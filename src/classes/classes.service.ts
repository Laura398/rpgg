import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Class } from './entities/class.entity';
import { Model } from 'mongoose';
import { createAllClasses } from './helpers/create-all-classes';

@Injectable()
export class ClassesService {
    constructor (
        @InjectModel(Class.name) private readonly characterClassModel: Model<Class>
      ) {}

    createMany() {
        const data = createAllClasses()
        if (!data) {
            throw new Error("Data not found");
        }
        return this.characterClassModel.insertMany(data);
    }

    findOne (selector: any, options?: any) {
        return this.characterClassModel.findOne(selector, options).exec();
    }
}
