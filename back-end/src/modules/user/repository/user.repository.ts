import { PrismaService } from 'src/database/prisma.service';

export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}
}
