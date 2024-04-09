import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { IsOptional } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class Class extends Document {
    @Prop({ required: true })
    name: string;

    @Prop(raw({
        secondaryStats: { type: [String], optional: true},
        minimum: { type: Number, optional: true},
    }))
    @IsOptional()
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
    }))
    @IsOptional()
    avantages?: {
        primaryStats: string[];
        secondaryStats: string[];
        skills: string[];
        type: string;
        number: number;
    }

    @Prop(raw({
        primaryStat: { type: String, optional: true},
        skills: { type: [String], optional: true},
        number: { type: Number, optional: true},
    }))
    @IsOptional()
    restrictions?: {
        primaryStat: string;
        skills: string[];
        number: number;
    };

    @Prop()
    @IsOptional()
    other?: string[];

    @Prop()
    @IsOptional()
    initHP?: number;

    @Prop()
    @IsOptional()
    initMP?: number;

    @Prop({ default: true })
    allWeapons?: boolean;

    @Prop({ default: true })
    twoHandedWeapons?: boolean;

    @Prop({ default: true })
    meleeWeapons?: boolean;

    @Prop({ default: true })
    rangedWeapons?: boolean;

    @Prop({ default: true })
    allArmors?: boolean;

    @Prop({ default: true })
    heavyArmors?: boolean;

    @Prop({ default: true })
    lightArmors?: boolean;

    @Prop({ default: true })
    magic?: boolean;

    @Prop()
    @IsOptional()
    bonus?: string;

    @Prop()
    @IsOptional()
    malus?: string;

    @Prop({ default: false })
    miracles?: boolean;

    @Prop({ default: false })
    specificMiracles?: true;
}

export const CharacterClassSchema = SchemaFactory.createForClass(Class);