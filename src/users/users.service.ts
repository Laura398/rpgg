import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { FilterQuery, Model, Mongoose, MongooseQueryMiddleware, MongooseQueryOptions } from 'mongoose';

@Injectable()
export class UsersService {
  constructor (
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  findAll() {
    return this.userModel.find().exec();
  }

  async findMany(selector: FilterQuery<User>, options?: MongooseQueryOptions) {
    return await this.userModel.find(selector, options).exec();
  }

  async findOneById(id: string) {
    return await this.userModel.findById({ _id: id }).exec();
  }

  async findOne(selector: FilterQuery<User>, options?: MongooseQueryOptions) {
    return await this.userModel.findOne(selector, options).exec();
  }

  create(createUserDto: CreateUserDto) {
    return new this.userModel(createUserDto).save();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate({ _id: id }, { $set: updateUserDto }, { new: true}).exec();
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete({ _id: id }).exec();
  }
}
