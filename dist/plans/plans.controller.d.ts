import { PlansService } from './plans.service';
export declare class PlansController {
    private readonly plansService;
    constructor(plansService: PlansService);
    create(body: any): Promise<import("mongoose").Document<unknown, {}, import("./plan.schema").PlanDocument, {}> & import("./plan.schema").Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./plan.schema").PlanDocument, {}> & import("./plan.schema").Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./plan.schema").PlanDocument, {}> & import("./plan.schema").Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("./plan.schema").PlanDocument, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./plan.schema").PlanDocument, {}> & import("./plan.schema").Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./plan.schema").PlanDocument, {}> & import("./plan.schema").Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("./plan.schema").PlanDocument, "findOne", {}>;
    update(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("./plan.schema").PlanDocument, {}> & import("./plan.schema").Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, import("./plan.schema").PlanDocument, {}> & import("./plan.schema").Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
