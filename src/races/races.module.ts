import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Race, RaceSchema } from './entities/race.entity';
import { RacesController } from './races.controller';
import { RacesService } from './races.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Race.name, 
      schema: RaceSchema 
    }])
  ],
  controllers: [RacesController],
  providers: [RacesService],
  exports: [RacesService]
})
export class RacesModule {}
