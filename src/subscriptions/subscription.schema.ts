import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Subscription {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  planId: string;

  @Prop({ default: 'active' })
  status: 'active' | 'cancelled';
}

export type SubscriptionDocument = Subscription & Document;
export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
