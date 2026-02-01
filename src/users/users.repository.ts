import { PrismaService } from "../prisma/prisma.service";

export class UsersRepository {
    constructor(private prismaService: PrismaService) {}
}