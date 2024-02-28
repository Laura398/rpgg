import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Response } from 'express';
import { RequestType } from 'src/interfaces/types';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async register(@Body() registerUserDto: CreateUserDto) {
    return this.usersService.create(registerUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Res({ passthrough: true }) res: Response, @Body() loginDto: LoginDto) {
    const tokens = await this.authService.login(loginDto.email, loginDto.password);    
    res.cookie('Authorization', `Bearer ${tokens.accessToken}`, { httpOnly: true });
    res.cookie('Refresh', tokens.refreshToken, { httpOnly: true });
    return tokens;
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('logout')
  logout(@Res({ passthrough: true }) res: Response) {
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
}
