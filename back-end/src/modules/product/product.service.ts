import { Get, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProductRepository } from './repository/product.repository';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  getProducts() {
    return this.productRepository.getProducts();
  }

  createProduct(product: CreateProductDto) {
    return this.productRepository.createProduct(product);
  }
}
