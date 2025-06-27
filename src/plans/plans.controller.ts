import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PlansService } from './plans.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any) {
    return this.plansService.create(body);
  }

  @Get()
  findAll() {
    return this.plansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plansService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.plansService.update(id.trim(), body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.plansService.delete(id.trim());
  }
}
