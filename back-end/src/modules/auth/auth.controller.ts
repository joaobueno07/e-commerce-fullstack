import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  public getAuth() {}
}
