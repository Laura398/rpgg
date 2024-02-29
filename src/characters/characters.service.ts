import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';
import { randomizeCharacter } from './helpers/randomize/randomize-character';

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
    const userId = request.user.sub;
    if (!userId) {
      throw new Error("User not found");
    }
    return new this.characterModel({...createCharacterDto, user: userId}).save();
  }

  randomize(request: any) {
    const userId = request.user.sub;
    const newCharacter = randomizeCharacter();
    return new this.characterModel({...newCharacter, user: userId}).save();
  }

  async update(id: string, updateCharacterDto: UpdateCharacterDto) {
    return await this.characterModel.findByIdAndUpdate({ _id: id }, { $set: updateCharacterDto }, { new: true }).exec();
  }

  async remove(id: string) {
    return await this.characterModel.findByIdAndDelete({ _id: id }).exec();
  }

  async deleteAll() {
    return await this.characterModel.deleteMany({}).exec();
  }
}
