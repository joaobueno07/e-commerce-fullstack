import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Camiseta Azul - Tema Marvel' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  productTitle: string = '';

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 30.53 })
  productPrice: number = 0;

  @ApiProperty({
    example: 'Uma camiseta de algodão com o tema de heróis da Marvel',
  })
  @IsString()
  @MaxLength(300)
  productDescription: string = '';

  @IsNumber()
  @ApiProperty({ example: 45 })
  productStock: number = 0;
}
