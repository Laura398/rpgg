import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Weapon } from './entities/weapon.entity';
import { ALL_WEAPONS } from './helpers/create-all-weapons';
import { CharactersService } from 'src/characters/characters.service';
import { ClassesService } from 'src/classes/classes.service';

@Injectable()
export class WeaponsService {
  constructor (
    @InjectModel(Weapon.name) private readonly weaponModel: Model<Weapon>,
    private readonly charactersService: CharactersService,
    private readonly classesService: ClassesService,
  ) {}

createMany() {
    // const data = ALL_WEAPONS
    if (!ALL_WEAPONS) {
        throw new Error("Data not found");
    }
    return this.weaponModel.insertMany(ALL_WEAPONS);
}

findAll() {
    return this.weaponModel.find().exec();
}

async findListByCharacter(characterId: string) {
    const character = await this.charactersService.findOneById(characterId);
    const characterclass = character.class;
    const weapons = [];
    if (!characterclass) {
        return weapons;
    }
    const classData = await this.classesService.findOne({ name: characterclass }, { fields: { allWeapons: 1, twoHandedWeapons: 1, meleeWeapons: 1, rangedWeapons: 1 } });
    if (classData?.allWeapons) {
        weapons.push(...await this.weaponModel.find().exec());
    } else {
        if (classData?.twoHandedWeapons) {
            weapons.push(...await this.weaponModel.find({ twoHands: true }).exec());
        }
        if (classData?.meleeWeapons) {
            weapons.push(...await this.weaponModel.find({ melee: true }).exec());
        }
        if (classData?.rangedWeapons) {
            weapons.push(...await this.weaponModel.find({ melee: false }).exec());
        }
    }
    return weapons;
}

findOne (selector: any, options?: any) {
    return this.weaponModel.findOne(selector, options).exec();
}

deleteAll() {
    return this.weaponModel.deleteMany().exec();
}
}