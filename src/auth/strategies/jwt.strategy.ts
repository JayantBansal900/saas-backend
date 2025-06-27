// src/auth/strategies/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          // Read the JWT token from cookie
          if (req && req.cookies) {
            return req.cookies['jwt'];
          }
          return null;
        },
      ]),
      secretOrKey: process.env.JWT_SECRET || 'defaultsecret', // Fallback if .env not set
    });
  }

  async validate(payload: any) {
  return {
    userId: payload.userId,
    email: payload.email,
    isAdmin: payload.isAdmin, // ✅ Add this
  };
}

}