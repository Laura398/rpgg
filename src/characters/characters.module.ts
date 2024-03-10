import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './entities/character.entity';
import { RacesService } from 'src/races/races.service';
import { Race, RaceSchema } from 'src/races/entities/race.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
        name: Character.name, 
        schema: CharacterSchema 
      },
      {
        name: Race.name,
        schema: RaceSchema
      }
  ])
  ],
  controllers: [CharactersController],
  providers: [CharactersService, JwtService, RacesService],
  exports: [CharactersService]
})
export class CharactersModule {}
