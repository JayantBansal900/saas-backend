// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(fullName: string, email: string, password: string) {
    const existing = await this.usersService.findByEmail(email);
    if (existing) {
      throw new UnauthorizedException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.usersService.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return {
      message: 'Signup successful',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    };
  }

  async login(email: string, password: string) {
  const user = await this.usersService.findByEmail(email);
  if (!user) throw new UnauthorizedException('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new UnauthorizedException('Invalid credentials');

  const payload = {
    userId: user._id,
    email: user.email,
    isAdmin: user.isAdmin, // ✅ Add this
  };

  const token = this.jwtService.sign(payload);

  return {
    message: 'Login successful',
    token,
  };
}


  async getProfile(userId: string) {
    return this.usersService.findById(userId);
  }
}
