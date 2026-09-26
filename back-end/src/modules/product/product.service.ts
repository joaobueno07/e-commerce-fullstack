import { Get, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  getProducts() {
    return {
      message: 'olá mundo',
    };
  }
}
