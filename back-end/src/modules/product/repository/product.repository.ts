import { PrismaService } from 'src/database/prisma.service';
import { CreateProductDto } from '../dto/create-product.dto';

export class ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  getProducts() {
    return this.prismaService.product.findMany();
  }

  createProduct(product: CreateProductDto) {
    //return this.prismaService.product.create({
    // data: {
    //   name: product.title,
    //   description: product.description,
    //   // price: product.price,
    // }
    // });
  }
}
