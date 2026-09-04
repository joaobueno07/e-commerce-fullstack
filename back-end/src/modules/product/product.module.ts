import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { PrismaModule } from 'src/database/prisma.module';
import { ProductRepository } from './repository/product.repository';

@Module({
  imports: [PrismaModule],
  exports: [],
  providers: [ProductService, ProductRepository],
  controllers: [ProductController],
})
export class ProductsModule {}
