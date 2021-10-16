import { Users } from "src/entities/Users";
import { UserDto } from "src/user/dto/userDto";

export const toEntityDto = (entityDto: any, repository: any) => {
    Object.assign(entityDto, repository)
    return entityDto
}

export const toUserDto = (data: Users): UserDto => {  
    const { uid, name, email } = data;
    let userDto: UserDto = { uid, name, email };
    return userDto;
};
