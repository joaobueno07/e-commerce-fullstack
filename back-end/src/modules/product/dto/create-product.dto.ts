import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  title: string = '';

  @IsNumber()
  @IsNotEmpty()
  price: number = 0;

  @IsString()
  @MaxLength(300)
  description: string = '';

  @IsNumber()
  stock: number = 0;
}
