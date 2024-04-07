import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Race extends Document {
    @Prop({ required: true })
    name: string;

    @Prop(raw({
        secondaryStats: { type: [String], optional: true},
        minimum: { type: Number, optional: true},
    }))
    conditions?: {
        secondaryStats: string[];
        minimum: number;
    }

    @Prop(raw({
        primaryStat: { type: String, optional: true},
        skills: { type: [String], optional: true},
        add: { type: Number, optional: true},
    
    }))
    avantages?: {
        primaryStat: string;
        skills: string[];
        add: number;
    }

    @Prop()
    restrictions?: string;

    @Prop()
    initHP?: number;

    @Prop()
    initMP?: number;

    @Prop({ default: true })
    magic: boolean;
}

export const RaceSchema = SchemaFactory.createForClass(Race);