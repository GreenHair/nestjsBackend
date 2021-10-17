import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { Public } from 'src/shared/public.decorator';
import { CreateUserDto } from 'src/user/dto/createUserDto';
import { LoginUserDto } from 'src/user/dto/loginUserDto';
import { AuthService } from './auth.service';
import { LoginStatus } from './interfaces/login-status.interface';
import { RegistrationStatus } from './interfaces/registrattionStatus.interface';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    @Public()
    public async register(@Body() createUserDto: CreateUserDto,  ): Promise<RegistrationStatus> {    
        const result: RegistrationStatus = await this.authService.register(createUserDto);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);    
        }
        return result;  
    }

    @Post('login')
    @Public()
    public async login(@Body() loginUserDto: LoginUserDto): Promise<LoginStatus> {
        return await this.authService.login(loginUserDto);  
    }

}
