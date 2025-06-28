import { SubscriptionsService } from './subscriptions.service';
export declare class SubscriptionsController {
    private readonly subsService;
    constructor(subsService: SubscriptionsService);
    subscribe(user: any, planId: string): Promise<import("mongoose").Document<unknown, {}, import("./subscription.schema").SubscriptionDocument, {}> & import("./subscription.schema").Subscription & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    mySubscriptions(user: any): Promise<(import("mongoose").Document<unknown, {}, import("./subscription.schema").SubscriptionDocument, {}> & import("./subscription.schema").Subscription & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    cancelSub(id: string): Promise<import("mongoose").Document<unknown, {}, import("./subscription.schema").SubscriptionDocument, {}> & import("./subscription.schema").Subscription & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
