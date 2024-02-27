import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async login(email: string, password: string): Promise<{ access_token: string }> {
        const user = await this.usersService.findOne({ email })
        if (user && user.password === password) {
            const payload = { sub: user._id, username: user.username };
            console.log("payload : ", payload);

            try {
                const accessToken = await this.jwtService.signAsync(payload)
                console.log("accessToken : ", accessToken);
                return {
                    access_token: accessToken
                }
            } catch (error) {
                new BadRequestException("error : ", error);
                console.log("error : ", error);
            } 
            
            
        }
        return null;
    }

    logout(request: any): string {
        console.log("request : ", request.user);
        
        if (request.user) {
            return `User with ${request.user.username} has been logged out`;
        }
        return 'No token found in the request';
    }
}
