import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HashDataService } from 'src/shared/hash-data/hash-data.service';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getUsers() {
    return this.userRepository.getUsers();
  }

  findUserById(id: string) {
    return this.userRepository.findUserById(id);
  }

  async createUsers(user: CreateUserDto) {
    const IsExistingUser = await this.userRepository.findUserByEmail(
      user.email,
    );

    if (IsExistingUser) {
      throw new ConflictException('Já existe um usuário com este e-mail');
    }

    const hashPassword = new HashDataService();

    const formattedUser: CreateUserDto = {
      name: user.name,
      email: user.email,
      password: await hashPassword.hash(user.password),
      status: user.status,
    };

    return this.userRepository.createUser(formattedUser);
  }

  updateUser(userId: string, user: UpdateUserDto) {
    return this.userRepository.updateUser(userId, user);
  }

  deleteUser(userId: string) {
    return this.userRepository.deleteUser(userId);
  }
}
