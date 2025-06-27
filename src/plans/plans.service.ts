import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plan, PlanDocument } from './plan.schema';

@Injectable()
export class PlansService {
  constructor(@InjectModel(Plan.name) private planModel: Model<PlanDocument>) {}

  create(data: Partial<Plan>) {
    return this.planModel.create(data);
  }

  findAll() {
    return this.planModel.find();
  }

  findOne(id: string) {
    return this.planModel.findById(id.trim()); // 🧼 Clean just in case
  }

  async update(id: string, data: Partial<Plan>) {
    const cleanId = id.trim(); // 🧼 Trim newline/space
    const updated = await this.planModel.findByIdAndUpdate(cleanId, data, { new: true });
    if (!updated) throw new NotFoundException('Plan not found');
    return updated;
  }

  async delete(id: string) {
    const cleanId = id.trim(); // 🧼 Clean here too
    const deleted = await this.planModel.findByIdAndDelete(cleanId);
    if (!deleted) throw new NotFoundException('Plan not found');
    return deleted;
  }
}
