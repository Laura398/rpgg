import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Race } from './entities/race.entity';
import { createAllRaces } from './helpers/create-all-races';

@Injectable()
export class RacesService {
    constructor (
        @InjectModel(Race.name) private readonly raceModel: Model<Race>
      ) {}

    create(data: any) {
    if (!data) {
        throw new Error("Data not found");
    }
    return new this.raceModel(data).save();
    }

    createMany() {
        const data = createAllRaces()
        if (!data) {
            throw new Error("Data not found");
        }
        return this.raceModel.insertMany(data);
    }

    async findOne (selector: any, options?: any) {
        return await this.raceModel.findOne(selector, options).exec();
    }

    async findAll () {
        return await this.raceModel.find().exec();
    }

    async deleteAll() {
        return await this.raceModel.deleteMany({}).exec();
    }
}
