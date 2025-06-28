import { Document } from 'mongoose';
export type PlanDocument = Plan & Document;
export declare class Plan {
    name: string;
    price: number;
    features: string[];
    isRecommended: boolean;
}
export declare const PlanSchema: import("mongoose").Schema<Plan, import("mongoose").Model<Plan, any, any, any, Document<unknown, any, Plan, any> & Plan & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Plan, Document<unknown, {}, import("mongoose").FlatRecord<Plan>, {}> & import("mongoose").FlatRecord<Plan> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
