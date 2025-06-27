import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PlansModule } from './plans/plans.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/saas_dashboard'),
    AuthModule,
    UsersModule,
    PlansModule,
    SubscriptionsModule,
    AdminModule,
  ],
  
})
export class AppModule {}
