import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Response } from 'express';
import { RequestType } from 'src/interfaces/types';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private configService: ConfigService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async register(@Body() registerUserDto: CreateUserDto) {
    return this.usersService.create(registerUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Res() res: Response, @Body() loginDto: LoginDto) {    
    const tokens = await this.authService.login(loginDto.email, loginDto.password);    
    res.cookie('Authorization', `Bearer ${tokens.accessToken}`, { httpOnly: true }); // set 1month
    res.cookie('Refresh', tokens.refreshToken, { httpOnly: true});
    console.info("Loggin : ", tokens);
    return tokens;
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('logout')
  logout(@Res() res: Response) {
    res.clearCookie('Authorization');
    res.clearCookie('Refresh');
  }

  @UseGuards(AuthGuard)
  @Get('refresh-token')
  @HttpCode(HttpStatus.OK)
  async refresh(@Request() req: RequestType, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.cookies['Refresh'];    
    const newTokens = await this.authService.refresh(refreshToken);    
    res.cookie('Authorization', `Bearer ${newTokens.accessToken}`, { httpOnly: true });
    res.cookie('Refresh', newTokens.refreshToken, { httpOnly: true });
    return newTokens;
  }

  @UseGuards(AuthGuard)
  @Get('check-token')
  checkToken(@Request() req: any) {
    const userId = req.user.sub;
    if (!userId) {
      return false;
    }
    return true;
  }
}
