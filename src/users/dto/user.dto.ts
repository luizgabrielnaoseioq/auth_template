import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class LoginUserDto {
    @ApiProperty()
    @IsNotEmpty() 
    readonly login: string

    @ApiProperty()
    @IsNotEmpty() 
    readonly password: string
}

export enum Role {
    CLIENT = 'CLIENT',
    ADMIN = 'ADMIN',
    ROOT = 'ROOT'
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

    @ApiProperty()
    @IsNotEmpty()
    role: Role
}

export class UpdatePasswordDto {
    @IsNotEmpty()
    @ApiProperty()
    new_password: string
    
    @IsNotEmpty()
    @ApiProperty()
    old_password: string
}