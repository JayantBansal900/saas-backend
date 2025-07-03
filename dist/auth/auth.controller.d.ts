import { AuthService } from './auth.service';
import { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(body: any): Promise<{
        message: string;
        user: {
            id: unknown;
            fullName: string;
            email: string;
        };
    }>;
    login(email: string, password: string, res: Response): Promise<{
        message: string;
    }>;
    logout(res: Response): {
        message: string;
    };
    getProfile(user: any): Promise<(import("mongoose").Document<unknown, {}, import("../users/user.schema").UserDocument, {}> & import("../users/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    getProfileAlias(user: any): Promise<(import("mongoose").Document<unknown, {}, import("../users/user.schema").UserDocument, {}> & import("../users/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
