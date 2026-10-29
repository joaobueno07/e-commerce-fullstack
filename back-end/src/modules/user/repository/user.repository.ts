import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  getUsers() {
    return this.prismaService.user.findMany();
  }

  findUserById(id: string) {
    return this.prismaService.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        email: true,
        name: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  findUserByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        email: true,
        name: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  createUser(user: CreateUserDto) {
    return this.prismaService.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        status: user.status,
        createdAt: new Date(),
      },
    });
  }

  updateUser(userId: string, user: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { id: userId },
      data: user,
    });
  }

  deleteUser(userId: string) {
    return this.prismaService.user.delete({
      where: { id: userId },
    });
  }
}
