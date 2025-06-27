// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findById(id: string) {
    return this.userModel.findById(id).select('-password');
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  async create(data: Partial<User>) {
    return this.userModel.create(data);
  }

  async update(id: string, data: Partial<User>) {
    return this.userModel.findByIdAndUpdate(id, data, { new: true }).select('-password');
  }

  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
    async findAll() {
    return this.userModel.find().select('-password'); // Hide password in response
  }
}
