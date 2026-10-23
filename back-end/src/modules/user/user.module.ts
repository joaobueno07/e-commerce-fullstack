import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [],
  exports: [UserService, UserRepository],
  providers: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
