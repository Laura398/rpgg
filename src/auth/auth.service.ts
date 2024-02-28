import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService
    ) {}

    async login(email: string, password: string): Promise<{ accessToken: string, refreshToken: string }> {
        const user = await this.usersService.findOne({ email })
        if (user && user.password === password) {
            const payload = { sub: user._id, username: user.username };
            console.log("payload : ", payload);

            try {
                const accessToken = await this.jwtService.signAsync(payload)

                const refreshToken = await this.jwtService.signAsync(payload, {
                    secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
                    expiresIn: this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION')
                })

                return {
                    accessToken: accessToken,
                    refreshToken: refreshToken
                }
            } catch (error) {
                new BadRequestException("error : ", error);
                console.log("error : ", error);
            } 
            
            
        }
        return null;
    }

    async refresh(refreshToken: string) {
        const payload = this.jwtService.verify(refreshToken, {
            secret: process.env.JWT_REFRESH_TOKEN_SECRET,
        });

        const accessToken = await this.jwtService.signAsync(payload)

        const newRefreshToken = await this.jwtService.signAsync(payload, {
            secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
            expiresIn: this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION')
        })

        return {
            accessToken,
            refreshToken: newRefreshToken,
        };
    }
}
