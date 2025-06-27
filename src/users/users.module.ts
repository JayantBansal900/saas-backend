// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller'; // ✅ add this line
import { User, UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController], // ✅ add this line
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
