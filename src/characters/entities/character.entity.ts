import { PartialType } from '@nestjs/mapped-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEnum } from 'class-validator';
import { Document, now } from 'mongoose';
import { Alignments } from '../interfaces/enums/alignments.enum';
import { Contries, FamilySituation, SocialStatus } from '../interfaces/enums/contries.enum';
import { Genre, Sexuality } from '../interfaces/enums/enums';
import { CharacterType, Race } from '../interfaces/enums/races.enum';
import { Languages } from '../interfaces/types/languages.type';
import { ArtType, IntellectType, KnowledgeType, PhysicalType, SocialType, SurvivalType, TalentsType } from '../interfaces/types/talents.type';

@Schema()
export class Character extends Document {
    @Prop({ required: true })
    firstname: string;

    @Prop({ nullable: true })
    lastname?: string;

    @Prop({ nullable: true })
    nickname?: string;

    @Prop({ nullable: true, enum: Race })
    @IsEnum(Race)
    race?: Race;

    @Prop({ nullable: true })
    type?: CharacterType;

    @Prop({ nullable: true, enum: Alignments })
    @IsEnum(Alignments)
    alignment?: Alignments;

    @Prop({ nullable: true, enum: Genre })
    @IsEnum(Genre)
    genre?: Genre;

    @Prop({ nullable: true, enum: Sexuality})
    @IsEnum(Sexuality)
    sexuality?: Sexuality;

    @Prop({ nullable: true })
    height?: number;

    @Prop({ nullable: true })
    weight?: number;

    @Prop({ nullable: true })
    eyesColor?: string;

    @Prop({ nullable: true })
    hairColor?: string;

    @Prop({ nullable: true, enum: Contries})
    @IsEnum(Contries)
    origin?: Contries;

    @Prop({ nullable: true })
    children?: number;

    @Prop({ nullable: true, enum: SocialStatus})
    @IsEnum(SocialStatus)
    socialStatus?: SocialStatus;

    @Prop({ nullable: true, enum: FamilySituation})
    @IsEnum(FamilySituation)
    familySituation?: FamilySituation;

    @Prop()
    mainStats = {
        hp: {type: Number, default: 10, min: 0, max: 100},
        mp: {type: Number, default: 10, min: 0, max: 100},
        level: {type: Number, default: 1, min: 1, max: 100},
        atk: {type: Number, default: 1, min: 0, max: 100},
        def: {type: Number, default: 1, min: 0, max: 100}, 
    }

    @Prop()
    secondaryStats = {
        phy: {type: Number, default: 1, min: 0, max: 100},
        int: {type: Number, default: 1, min: 0, max: 100},
        dxt: {type: Number, default: 1, min: 0, max: 100},
        men: {type: Number, default: 1, min: 0, max: 100},
        cha: {type: Number, default: 1, min: 0, max: 100},
    }

    @Prop({ nullable: true })
    talent? = {
        name: {type: String},
        skills: [{type: typeof PartialType<ArtType & KnowledgeType & IntellectType & PhysicalType & SocialType & SurvivalType>}],
    }

    @Prop({ nullable: true })
    weakness? = {
        name: {type: String},
        skills: [{type: typeof PartialType<ArtType & KnowledgeType & IntellectType & PhysicalType & SocialType & SurvivalType>}],
    }

    @Prop({ nullable: true })
    special? = [{
        name: {type: String},
        talent: [{type: typeof PartialType<ArtType & KnowledgeType & IntellectType & PhysicalType & SocialType & SurvivalType>}],
        stat: {type: 'phy' || 'int' || 'dxt' || 'men' || 'cha' },
    }]

    @Prop({ nullable: true })
    skills?: TalentsType;

    @Prop({ nullable: true })
    languages?: Languages;

    @Prop({ default: 0, min: -10, max: 10})
    karma?: number;

    @Prop()
    principles = {
        humanity: {type: Number, default: 0, min: -10, max: 10},
        honesty: {type: Number, default: 0, min: -10, max: 10},
        honor: {type: Number, default: 0, min: -10, max: 10},
        humility: {type: Number, default: 0, min: -10, max: 10},
        heroism: {type: Number, default: 0, min: -10, max: 10}
    };

    @Prop({ nullable: true, min: 1, max: 20 })
    reputation?: number;

    @Prop({ nullable: true })
    renown = {
        nobility: {type: Number, default: 0, min: -10, max: 10},
        religion: {type: Number, default: 0, min: -10, max: 10},
        bourgeoisie: {type: Number, default: 0, min: -10, max: 10},
        common: {type: Number, default: 0, min: -10, max: 10},
    };

    @Prop()
    money = {
        gold: {type: Number, default: 0, min: 0},
        silver: {type: Number, default: 0, min: 0},
        copper: {type: Number, default: 0, min: 0},
    }

    @Prop({ nullable: true })
    inventory?: string[];

    @Prop({ nullable: true })
    weapons?: {
        name: string,
        atk: number,
        weight: 'light' | 'medium' | 'heavy',
        type: 'melee' | 'range' | 'magic',
    }[];

    @Prop({ nullable: true })
    armors?: {
        name: string,
        def: number,
        weight: 'light' | 'medium' | 'heavy',
        type: 'melee' | 'range' | 'magic',
    }[];

    @Prop({ nullable: true })
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