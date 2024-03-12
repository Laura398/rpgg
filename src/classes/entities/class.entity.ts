import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Class extends Document {
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
        primaryStats: { type: [String], optional: true},
        secondaryStats: { type: [String], optional: true},
        skills: { type: [String], optional: true},
        type: { type: String, optional: true},
        number: { type: Number, optional: true},
        other: { type: [String], optional: true},
    }))
    avantages?: {
        primaryStats: string[];
        secondaryStats: string[];
        skills: string[];
        type: string;
        number: number;
        other: string[];
    }

    @Prop(raw({
        primaryStat: { type: String, optional: true},
        skills: { type: [String], optional: true},
        number: { type: Number, optional: true},
        other: { type: [String], optional: true},
    }))
    restrictions?: {
        primaryStat: string;
        skills: string[];
        number: number;
        other: string[];
    };

    @Prop()
    initHP?: number;

    @Prop()
    initMP?: number;
}

export const CharacterClassSchema = SchemaFactory.createForClass(Class);