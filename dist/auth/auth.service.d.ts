import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signup(fullName: string, email: string, password: string): Promise<{
        message: string;
        user: {
            id: unknown;
            fullName: string;
            email: string;
        };
    }>;
    login(email: string, password: string): Promise<{
        message: string;
        token: string;
    }>;
    getProfile(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("../users/user.schema").UserDocument, {}> & import("../users/user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
