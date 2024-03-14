import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RacesService } from 'src/races/races.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';
import redefineCharacterStatsWithRace from './helpers/randomize/post-treatment/redefine-character-stats-with-race';
import { randomizeCharacter } from './helpers/randomize/randomize-character';
import { ClassesService } from 'src/classes/classes.service';
import redefineCharacterStatsWithClass from './helpers/randomize/post-treatment/redefine-character-stats-with-class';

@Injectable()
export class CharactersService {
  constructor (
    @InjectModel(Character.name) private readonly characterModel: Model<Character>,
    private readonly racesService: RacesService,
    private readonly classesService: ClassesService,
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

  async randomize(request: any) {
    const userId = request.user.sub;
    const newCharacter = randomizeCharacter();
    return new this.characterModel({...newCharacter, user: userId}).save();
    // const raceData = await this.racesService.findOne({ name: newCharacter.race });
    // const characterDependingOnRace = redefineCharacterStatsWithRace(newCharacter, raceData);
    // const classData = await this.classesService.findOne({ name: newCharacter.class });
    // const characterDependingOnClass = redefineCharacterStatsWithClass(characterDependingOnRace, raceData, classData);
    // return new this.characterModel({...characterDependingOnClass, user: userId}).save();
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
