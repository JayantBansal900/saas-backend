import { Controller, Get, Put, Delete, Req, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async getProfile(@Req() req) {
    return this.usersService.findById(req.user.userId);
  }

  @Put('me')
  async updateProfile(@Req() req, @Body() body) {
    return this.usersService.update(req.user.userId, body);
  }

  @Delete('me')
  async deleteProfile(@Req() req) {
    return this.usersService.delete(req.user.userId);
  }
}
