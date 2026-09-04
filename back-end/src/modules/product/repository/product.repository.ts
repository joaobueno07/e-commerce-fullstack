import { PrismaService } from 'src/database/prisma.service';

export class ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}
}
