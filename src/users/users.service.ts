import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, LoginUserDto, UpdatePasswordDto } from './dto/user.dto';
import { compare, hash } from 'bcrypt'
import { UsersRepository } from './users.repository';


interface FormatLogin extends Partial<User> {
    login: string
}

@Injectable()
export class UsersService {
    constructor(
        private repository: UsersRepository,
    ) {
    }

  
}