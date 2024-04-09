import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    async login(email: string, password: string): Promise<{ accessToken: string, refreshToken: string }> {
        console.log('login', email, password);
                
        const user = await this.usersService.findOne({ email })
        console.log('user', user);
        
        if (!user) {
            throw new UnauthorizedException();
        }
        
        const validUser = await this.validateUser(email, password);
        if (!validUser) {
            throw new UnauthorizedException();
        }
        console.log('validUser', validUser);
        
        const payload = { sub: user._id, username: user.username };

        const accessToken = await this.jwtService.signAsync(payload)
        if (!accessToken) {
            throw new BadRequestException();
        }
        
        const refreshToken = await this.jwtService.signAsync(payload, {
            secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
            expiresIn: `${this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}s`
        })
        if (!refreshToken) {
            throw new BadRequestException();
        }

        console.log({
            accessToken: accessToken,
            refreshToken: refreshToken
        });
        
        return {
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    }

    async refresh(refreshToken: string) {
        const payload = this.jwtService.verify(refreshToken, {
            secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
        });
        if (!payload) {
            throw new UnauthorizedException();
        }
        const newPayload = { sub: payload.sub, username: payload.username };
        const accessToken = await this.jwtService.signAsync(newPayload)
        if (!accessToken) {
            throw new BadRequestException();
        }
        
        const newRefreshToken = await this.jwtService.signAsync(newPayload, {
            secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
            expiresIn: `${this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}s`
        })
        if (!newRefreshToken) {
            throw new BadRequestException();
        }

        return {
            accessToken: accessToken,
            refreshToken: newRefreshToken,
        };
    }

    async validateUser(email: string, loginPassword: string): Promise<any> {
        console.log('validateUser', email, loginPassword);
        
        const user = await this.usersService.findOneWithPassword({email});
        if (!user) {
            return null;
        }
        console.log('user', user);
                
        const validPassword = await bcrypt.compare(loginPassword, user.password);
        if (!validPassword) {
            return null;
        }
        console.log('validPassword', validPassword);
        
        const { password, ...result } = user;

        console.log('result', result);
        
          return result;
      }
}
