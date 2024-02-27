import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://rpgg-db:27017/rpgg'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
