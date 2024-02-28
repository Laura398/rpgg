import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RequestType } from 'src/interfaces/types';

@Injectable()
export class CharactersService {
  constructor (
    @InjectModel(Character.name) private readonly characterModel: Model<Character>
  ) {}

  findAll() {
    return this.characterModel.find().exec();
  }

  async findMany(selector: any, options?: any) {
    return await this.characterModel.find(selector, options).exec();
  }

  async findOneById(id: string) {
    return await this.characterModel.findById({ _id: id }).exec();
  }

  async findOne(selector: any, options?: any) {
    return await this.characterModel.findOne(selector, options).exec();
  }

  create(request: any, createCharacterDto: CreateCharacterDto) {
    console.log("createCharacterDto :>> ", createCharacterDto);
    console.log("request :>> ", request);
    
    const userId = request.user.sub;
    if (!userId) {
      throw new Error("User not found");
    }
    console.log("userId :>> ", userId);
    
    return new this.characterModel({...createCharacterDto, userId}).save();
  }

  update(id: string, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  async remove(id: string) {
    return await this.characterModel.findByIdAndDelete({ _id: id }).exec();
  }

  async deleteAll() {
    return await this.characterModel.deleteMany({}).exec();
  }
}
