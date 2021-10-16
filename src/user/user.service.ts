import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { toUserDto } from 'src/shared/mapper';
import { comparePasswords } from 'src/shared/utils';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { LoginUserDto } from './dto/loginUserDto';
import { UserDto } from './dto/userDto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(Users) private readonly userRepo: Repository<Users>, ) {}
    
    async findOne(options?: object): Promise<UserDto> {
        const user =  await this.userRepo.findOne(options);    
        return toUserDto(user);  
    }

    async findByLogin({ name, password }: LoginUserDto): Promise<UserDto> {    
        const user = await this.userRepo.findOne({ where: { name } });
        
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
        }
        
        // compare passwords    
        const areEqual = await comparePasswords(user.password, password);
        
        if (!areEqual) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
        }
        
        return toUserDto(user);  
    }
    
    async findByPayload({ username }: any): Promise<UserDto> {
        return await this.findOne({ 
            where:  { username } });  
    }

    async create(userDto: CreateUserDto): Promise<UserDto> {    
        const { name, password, email } = userDto;
        
        // check if the user exists in the db    
        const userInDb = await this.userRepo.findOne({ 
            where: { name } 
        });
        if (userInDb) {
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);    
        }
        
        const user: Users = await this.userRepo.create({ name, password, email });
        await this.userRepo.save(user);
        return toUserDto(user);  
    }
    
    
}
