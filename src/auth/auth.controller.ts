import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    // private configService: ConfigService,
  ) {}

  @Post('register')
  async register(@Body() registerUserDto: CreateUserDto) {
    return this.usersService.create(registerUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {    
    const tokens = await this.authService.login(loginDto.email, loginDto.password);    
    // res.cookie('Authorization', `Bearer ${tokens.accessToken}`, { httpOnly: true }); // set 1month
    // res.cookie('Refresh', tokens.refreshToken, { httpOnly: true});
    console.info("Loggin : ", tokens);
    return tokens;
  }

  @UseGuards(AuthGuard)
  @Get('logout')
  logout() {
    console.log("Logout");
    
    // res.clearCookie('Authorization');
    // res.clearCookie('Refresh');
  }

  // @UseGuards(AuthGuard)
  // @Get('refresh-token')
  // async refresh(@Request() req: RequestType, @Res({ passthrough: true }) res: Response) {
  //   const refreshToken = req.cookies['Refresh'];    
  //   const newTokens = await this.authService.refresh(refreshToken);    
  //   // res.cookie('Authorization', `Bearer ${newTokens.accessToken}`, { httpOnly: true });
  //   // res.cookie('Refresh', newTokens.refreshToken, { httpOnly: true });
  //   return newTokens;
  // }

  // @UseGuards(AuthGuard)
  // @Get('check-token')
  // checkToken(@Request() req: any) {
  //   const userId = req.user.sub;
  //   if (!userId) {
  //     return false;
  //   }
  //   return true;
  // }
}
