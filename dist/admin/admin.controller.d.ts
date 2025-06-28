import { UsersService } from '../users/users.service';
import { PlansService } from '../plans/plans.service';
export declare class AdminController {
    private usersService;
    private plansService;
    constructor(usersService: UsersService, plansService: PlansService);
    findAllUsers(): Promise<(import("mongoose").Document<unknown, {}, import("../users/user.schema").UserDocument, {}> & import("../users/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    updateUser(id: string, body: any): Promise<(import("mongoose").Document<unknown, {}, import("../users/user.schema").UserDocument, {}> & import("../users/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    deleteUser(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../users/user.schema").UserDocument, {}> & import("../users/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    findAllPlans(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../plans/plan.schema").PlanDocument, {}> & import("../plans/plan.schema").Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("../plans/plan.schema").PlanDocument, {}> & import("../plans/plan.schema").Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("../plans/plan.schema").PlanDocument, "find", {}>;
    createPlan(body: any): Promise<import("mongoose").Document<unknown, {}, import("../plans/plan.schema").PlanDocument, {}> & import("../plans/plan.schema").Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updatePlan(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("../plans/plan.schema").PlanDocument, {}> & import("../plans/plan.schema").Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deletePlan(id: string): Promise<import("mongoose").Document<unknown, {}, import("../plans/plan.schema").PlanDocument, {}> & import("../plans/plan.schema").Plan & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
