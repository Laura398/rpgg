import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEnum, IsObject } from 'class-validator';
import { Document, now } from 'mongoose';
import { Alignments } from '../interfaces/enums/alignments.enum';
import { Contries, FamilySituation, SocialStatus } from '../interfaces/enums/contries.enum';
import { Genre, Sexuality } from '../interfaces/enums/enums';
import { CharacterType, Race } from '../interfaces/enums/races.enum';
import { Languages } from '../interfaces/types/languages.type';
import { TalentsType } from '../interfaces/types/talents.type';
import { MainStatsType, MoneyType, PrinciplesType, RenownType, SecondaryStatsType, SpecialType, TalentsAndWeaknessType, WeaponsAndArmorType } from '../interfaces/types/types';

@Schema()
export class Character extends Document {
    @Prop({ required: true })
    firstname: string;

    @Prop()
    lastname?: string;

    @Prop()
    nickname?: string;

    @Prop()
    @IsEnum(Race)
    race?: Race;

    @Prop()
    type?: CharacterType;

    @Prop()
    @IsEnum(Alignments)
    alignment?: Alignments;

    @Prop()
    @IsEnum(Genre)
    genre?: Genre;

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

    @Prop({ type: Object })
    @IsObject()
    mainStats?: MainStatsType;

    @Prop({ type: Object })
    @IsObject()
    secondaryStats?: SecondaryStatsType;

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

    @Prop({ type: Object })
    principles?: PrinciplesType;

    @Prop({ min: 1, max: 20 })
    reputation?: number;

    @Prop({ type: Object })
    renown?: RenownType;

    @Prop({ type: Object, default: {
        gold: 0,
        silver: 0,
        copper: 0
    }})
    money?: MoneyType;

    @Prop({ type: Array })
    inventory?: string[];

    @Prop({ type: Array })
    weapons?: WeaponsAndArmorType;

    @Prop({ type: Array })
    armors?: WeaponsAndArmorType;

    @Prop()
    mount?: string;

    @Prop({ required: true })
    userId: string;

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