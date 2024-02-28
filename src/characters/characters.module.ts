import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './entities/character.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Character.name, 
      schema: CharacterSchema 
    }])
  ],
  controllers: [CharactersController],
  providers: [CharactersService, JwtService],
  exports: [CharactersService]
})
export class CharactersModule {}
