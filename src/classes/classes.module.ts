import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Class, CharacterClassSchema } from './entities/class.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Class.name,
        schema: CharacterClassSchema
      }
    ])
  ],
  controllers: [ClassesController],
  providers: [ClassesService],
  exports: [ClassesService]
})
export class ClassesModule {}
