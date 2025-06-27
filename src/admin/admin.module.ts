import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { UsersModule } from '../users/users.module';
import { PlansModule } from '../plans/plans.module';

@Module({
  imports: [UsersModule, PlansModule],
  controllers: [AdminController],
})
export class AdminModule {}
