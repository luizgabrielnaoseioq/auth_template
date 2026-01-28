import { PrismaService } from "../service/prisma/prisma.service.js"

interface UserCreateBody {
    name: string
    email: string
    password: string
}

export default class UserCreateService {
    constructor(private repository: PrismaService){}

    async exec(params: UserCreateBody) {
        const { name, email, password } = params

        const saveInRepository = await this.repository
    }
}