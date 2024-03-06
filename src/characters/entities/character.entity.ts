import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { IsEnum } from 'class-validator';
import mongoose, { Document, now } from 'mongoose';
import { Alignments } from '../interfaces/enums/alignments.enum';
import { Contries, FamilySituation, SocialStatus } from '../interfaces/enums/contries.enum';
import { Gender, Sexuality } from '../interfaces/enums/enums';
import { Race } from '../interfaces/enums/races.enum';
import { Languages } from '../interfaces/types/languages.type';
import { TalentsType } from '../interfaces/types/talents.type';
import { RenownType, SpecialType, TalentsAndWeaknessType, WeaponsAndArmorType } from '../interfaces/types/types';
import { Classes } from '../interfaces/enums/classes.enum';

@Schema()
export class Character extends Document {
    @Prop({ required: true })
    firstname: string;

    @Prop()
    lastname?: string;

    @Prop()
    nickname?: string;

    @Prop()
    avatar?: string;

    @Prop()
    @IsEnum(Race)
    race?: Race;

    @Prop()
    type?: string;

    @Prop(Classes)
    class?: Classes;

    @Prop()
    @IsEnum(Alignments)
    alignment?: Alignments;

    @Prop()
    @IsEnum(Gender)
    gender?: Gender;

    @Prop()
    @IsEnum(Sexuality)
    sexuality?: Sexuality;

    @Prop()
    height?: number;

    @Prop()
    weight?: number;

    @Prop()
    eyesColor?: string;

    @Prop()
    hairColor?: string;

    @Prop()
    @IsEnum(Contries)
    origin?: Contries;

    @Prop()
    children?: number;

    @Prop()
    @IsEnum(SocialStatus)
    socialStatus?: SocialStatus;

    @Prop()
    @IsEnum(FamilySituation)
    familySituation?: FamilySituation;

    @Prop(raw({
        hp: { type: Number, default: 10, optional: true},
        mp: { type: Number, default: 10, optional: true},
        level: { type: Number, default: 5, optional: true},
        atk: { type: Number, default: 10, optional: true},
        def: { type: Number, default: 10, optional: true},
    }))
    mainStats: Record<number, any>;

    @Prop(raw({
        phy: { type: Number, default: 10},
        int: { type: Number, default: 10},
        dxt: { type: Number, default: 10},
        men: { type: Number, default: 10},
        cha: { type: Number, default: 10},
    }))
    secondaryStats: Record<number, any>;

    @Prop({ type: Object })
    talent?: TalentsAndWeaknessType;

    @Prop({ type: Object })
    weakness?: TalentsAndWeaknessType;

    @Prop({ type: Array })
    special?: SpecialType;

    @Prop({ type: Object })
    skills?: TalentsType;

    @Prop({ type: Object })
    languages?: Languages;

    @Prop({ default: 0, min: -10, max: 10})
    karma?: number;

    @Prop(raw({
        humanity: { type: Number, default: 0, min: -10, max: 10},
        honesty: { type: Number, default: 0, min: -10, max: 10},
        honor: { type: Number, default: 0, min: -10, max: 10},
        humility: { type: Number, default: 0, min: -10, max: 10},
        heroism: { type: Number, default: 0, min: -10, max: 10},
    }))
    principles: Record<number, any>;

    @Prop({ min: 1, max: 20, default: 1 })
    reputation?: number;

    @Prop({ type: Object })
    renown?: RenownType;

    @Prop(raw({
        gold: { type: Number, default: 0},
        silver: { type: Number, default: 0},
        copper: { type: Number, default: 0},
    }))
    money: Record<number, any>;

    @Prop({ type: Array })
    inventory?: string[];

    @Prop({ type: Array })
    weapons?: WeaponsAndArmorType;

    @Prop({ type: Array })
    armors?: WeaponsAndArmorType;

    @Prop()
    mount?: string;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: string;

    @Prop({default: now()})
    createdAt: Date;

    @Prop()
    createdBy: string;

    @Prop({default: now()})
    updatedAt: Date;

    @Prop()
    updatedBy: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);