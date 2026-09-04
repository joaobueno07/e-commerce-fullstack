import { Get, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  // async createProduct(createProductDto) {}

  getProducts() {
    return {
      message: 'olá mundo',
    };
  }
}
