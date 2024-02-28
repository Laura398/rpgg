import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

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

  create(createCharacterDto: CreateCharacterDto) {
    console.log("createCharacterDto :>> ", createCharacterDto);
    
    return 'This action adds a new character';
  }

  update(id: string, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: string) {
    return `This action removes a #${id} character`;
  }
}
