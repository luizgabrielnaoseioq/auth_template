import { PrismaService } from "../prisma/prisma.service";

export class AuthRepository {
    constructor(private readonly prisma: PrismaService){}

    async createUser(data: {
        name: string,
        email: string,
        password: string,
    }) {
        return this.prisma.user.create({ data })
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: { email: email}
        })
    }
}