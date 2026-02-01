import { Injectable } from "@nestjs/common";
import { AuthRepository } from "./auth.repository";
import { JwtService } from '@nestjs/jwt'


@Injectable()
export class AuthService {
    constructor(
        private readonly repository: AuthRepository,
        private readonly jwt: JwtService
    ) {}


}