import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class LoginuserDto {
    @ApiProperty()
    @IsNotEmpty() 
    readonly login: string

    @ApiProperty()
    @IsNotEmpty() 
    readonly password: string
}

export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty()
    name: string
    
    @IsNotEmpty()
    @ApiProperty()
    surname: string
    
    @IsNotEmpty()
    @ApiProperty()
    login: string
    
    @IsNotEmpty()
    @ApiProperty()
    password: string
}

export class UpdatePasswordDto {
    @IsNotEmpty()
    @ApiProperty()
    new_password: string
    
    @IsNotEmpty()
    @ApiProperty()
    old_password: string
}