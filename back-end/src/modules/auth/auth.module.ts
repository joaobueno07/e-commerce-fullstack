import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { HashDataService } from 'src/shared/hash-data/hash-data.service';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, PassportModule],
  exports: [],
  providers: [AuthService, HashDataService, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
