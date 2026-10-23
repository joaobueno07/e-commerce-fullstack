import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Post()
  createProduct(@Body() product: CreateProductDto) {
    return this.productsService.createProduct(product);
  }
}
