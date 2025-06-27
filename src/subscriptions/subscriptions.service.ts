// src/subscriptions/subscriptions.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscription, SubscriptionDocument } from './subscription.schema';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectModel(Subscription.name)
    private subModel: Model<SubscriptionDocument>
  ) {}

  async create(userId: string, planId: string) {
    return this.subModel.create({
      userId,   // ✅ Correct field name
      planId,   // ✅ Correct field name
    });
  }

  async findUserSubscriptions(userId: string) {
    return this.subModel.find({ userId }); // ✅ Corrected field
  }

  async cancel(id: string) {
    const sub = await this.subModel.findByIdAndUpdate(
      id,
      { status: 'cancelled' },
      { new: true }
    );
    if (!sub) throw new NotFoundException('Subscription not found');
    return sub;
  }
}
