import { Document } from 'mongoose';
export declare class Subscription {
    userId: string;
    planId: string;
    status: 'active' | 'cancelled';
}
export type SubscriptionDocument = Subscription & Document;
export declare const SubscriptionSchema: import("mongoose").Schema<Subscription, import("mongoose").Model<Subscription, any, any, any, Document<unknown, any, Subscription, any> & Subscription & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Subscription, Document<unknown, {}, import("mongoose").FlatRecord<Subscription>, {}> & import("mongoose").FlatRecord<Subscription> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
