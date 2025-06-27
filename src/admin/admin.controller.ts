import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PlansService } from '../plans/plans.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdminGuard } from '../auth/guards/admin.guard';

@UseGuards(JwtAuthGuard, AdminGuard)
@Controller('admin')
export class AdminController {
  constructor(
    private usersService: UsersService,
    private plansService: PlansService,
  ) {}

  // ✅ Users Routes
  @Get('users')
  findAllUsers() {
    return this.usersService.findAll();
  }

  @Patch('users/:id')
  updateUser(@Param('id') id: string, @Body() body: any) {
    return this.usersService.update(id, body);
  }

  @Delete('users/:id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  // ✅ Plans Routes
  @Get('plans')
  findAllPlans() {
    return this.plansService.findAll();
  }

  @Post('plans')
  createPlan(@Body() body: any) {
    return this.plansService.create(body);
  }

  @Patch('plans/:id')
  updatePlan(@Param('id') id: string, @Body() body: any) {
    return this.plansService.update(id, body);
  }

  @Delete('plans/:id')
  deletePlan(@Param('id') id: string) {
    return this.plansService.delete(id);
  }
}
