import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { UserStatus } from 'prisma/generated/prisma/enums';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string = '';
  @ApiProperty()
  @IsEmail()
  email: string = '';
  @ApiProperty()
  @IsString()
  password: string = '';
  @ApiProperty()
  @IsString()
  status: UserStatus = UserStatus.CUSTOMER;
}
