import { Module } from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { WeaponsController } from './weapons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Weapon, WeaponSchema } from './entities/weapon.entity';
import { CharactersService } from 'src/characters/characters.service';
import { Character, CharacterSchema } from 'src/characters/entities/character.entity';
import { ClassesService } from 'src/classes/classes.service';
import { CharacterClassSchema, Class } from 'src/classes/entities/class.entity';
import { RacesService } from 'src/races/races.service';
import { Race, RaceSchema } from 'src/races/entities/race.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Weapon.name,
        schema: WeaponSchema
      },
      {
        name: Character.name,
        schema: CharacterSchema
      },
      {
        name: Class.name,
        schema: CharacterClassSchema
      },
      {
        name: Race.name,
        schema: RaceSchema
      }
    ])
  ],
  controllers: [WeaponsController],
  providers: [WeaponsService, CharactersService, ClassesService, RacesService],
  exports: [WeaponsService]
})
export class WeaponsModule {}