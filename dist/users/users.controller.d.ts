import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<(import("mongoose").Document<unknown, {}, import("./user.schema").UserDocument, {}> & import("./user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    updateProfile(req: any, body: any): Promise<(import("mongoose").Document<unknown, {}, import("./user.schema").UserDocument, {}> & import("./user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    deleteProfile(req: any): Promise<(import("mongoose").Document<unknown, {}, import("./user.schema").UserDocument, {}> & import("./user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
