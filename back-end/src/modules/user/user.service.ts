import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getUsers() {
    return this.userRepository.getUsers();
  }

  getUserById(user: string) {
    return this.userRepository.getUserById(user);
  }

  createUsers(user: CreateUserDto) {
    return this.userRepository.createUser(user);
  }

  updateUser(userId: string, user: UpdateUserDto) {
    return this.userRepository.updateUser(userId, user);
  }

  deleteUser(userId: string) {
    return this.userRepository.deleteUser(userId);
  }
}
