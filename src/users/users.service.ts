import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, MongooseQueryOptions } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor (
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  findAll() {
    return this.userModel.find({}, { fields : { password: 0 }}).exec();
  }

  async findMany(selector: FilterQuery<User>, options?: MongooseQueryOptions) {
    if (options?.fields) {
      options.fields = { password: 0, ...options.fields };
    } else {
      options = { fields: { password: 0 }, ...options };
    }
    return await this.userModel.find(selector, options).exec();
  }

  async findOneById(id: string) {
    return await this.userModel.findById({ _id: id }, { fields : { password: 0 }}).exec();
  }

  async findOne(selector: FilterQuery<User>, options?: MongooseQueryOptions) {
    if (options?.fields) {
      options.fields = { password: 0, ...options.fields };
    } else {
      options = { fields: { password: 0 }, ...options };
    }
    return await this.userModel.findOne(selector, options).exec();
  }

  async findOneWithPassword(selector: FilterQuery<User>, options?: MongooseQueryOptions) {
    return await this.userModel.findOne(selector, options).exec();
  }

  async create(createUserDto: CreateUserDto) {
    try {
      const {password} = createUserDto;

      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const savedUser = await new this.userModel({...createUserDto, password: hashedPassword}).save();
      delete savedUser.password;
      return savedUser;
    } catch (error) {
      return new BadRequestException("error : ", error);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userModel.findByIdAndUpdate({ _id: id }, { $set: updateUserDto }, { new: true}).exec();
    delete updatedUser.password;
    return updatedUser;
  }

  async remove(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete({ _id: id }).exec();
    delete deletedUser.password;
    return deletedUser;
  }
}
