import { PrismaService } from 'src/database/prisma.service';

export class AuthRepository {
  constructor(private readonly prismaService: PrismaService) {}
}
