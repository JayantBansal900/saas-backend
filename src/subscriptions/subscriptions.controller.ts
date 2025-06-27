// src/subscriptions/subscription.controller.ts

import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  UseGuards,
  Body,
} from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../common/decorators/get-user.decorator';

@UseGuards(JwtAuthGuard) // Apply JWT guard to all routes
@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subsService: SubscriptionsService) {}

  // ✅ POST /subscriptions — Create new subscription
  @Post()
  subscribe(
    @GetUser() user: any,
    @Body('planId') planId: string
  ) {
    return this.subsService.create(user.userId, planId);
  }

  // ✅ GET /subscriptions — Fetch current user's subscriptions
  @Get()
  mySubscriptions(@GetUser() user: any) {
    return this.subsService.findUserSubscriptions(user.userId);
  }

  // ✅ PATCH /subscriptions/:id/cancel — Cancel subscription by ID
  @Patch(':id/cancel')
  cancelSub(@Param('id') id: string) {
    return this.subsService.cancel(id);
  }
}
