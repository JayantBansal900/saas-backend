import { Model } from 'mongoose';
import { Subscription, SubscriptionDocument } from './subscription.schema';
export declare class SubscriptionsService {
    private subModel;
    constructor(subModel: Model<SubscriptionDocument>);
    create(userId: string, planId: string): Promise<import("mongoose").Document<unknown, {}, SubscriptionDocument, {}> & Subscription & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findUserSubscriptions(userId: string): Promise<(import("mongoose").Document<unknown, {}, SubscriptionDocument, {}> & Subscription & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    cancel(id: string): Promise<import("mongoose").Document<unknown, {}, SubscriptionDocument, {}> & Subscription & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
