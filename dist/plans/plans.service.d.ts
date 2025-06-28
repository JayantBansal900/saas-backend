import { Model } from 'mongoose';
import { Plan, PlanDocument } from './plan.schema';
export declare class PlansService {
    private planModel;
    constructor(planModel: Model<PlanDocument>);
    create(data: Partial<Plan>): Promise<import("mongoose").Document<unknown, {}, PlanDocument, {}> & Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, PlanDocument, {}> & Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, PlanDocument, {}> & Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, PlanDocument, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, PlanDocument, {}> & Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, PlanDocument, {}> & Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, PlanDocument, "findOne", {}>;
    update(id: string, data: Partial<Plan>): Promise<import("mongoose").Document<unknown, {}, PlanDocument, {}> & Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, PlanDocument, {}> & Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
