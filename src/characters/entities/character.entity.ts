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

    @Prop({ type: Object, default: {
        hp: 10,
        mp: 10,
        level: 1,
        atk: 1,
        def: 1
    }})
    mainStats = {
        hp: {type: Number, min: 0, max: 100},
        mp: {type: Number, min: 0, max: 100},
        level: {type: Number, min: 1, max: 100},
        atk: {type: Number, min: 0, max: 100},
        def: {type: Number, min: 0, max: 100}, 
    }

    @Prop({ type: Object, default: {
        phy: 1,
        int: 1,
        dxt: 1,
        men: 1,
        cha: 1
    }})
    secondaryStats = {
        phy: {type: Number, min: 0, max: 100},
        int: {type: Number, min: 0, max: 100},
        dxt: {type: Number, min: 0, max: 100},
        men: {type: Number, min: 0, max: 100},
        cha: {type: Number, min: 0, max: 100},
    }

    @Prop({ nullable: true, type: Object })
    talent? = {
        name: {type: String},
        skills: [{type: typeof PartialType<ArtType & KnowledgeType & IntellectType & PhysicalType & SocialType & SurvivalType>}],
    }

    @Prop({ nullable: true, type: Object })
    weakness? = {
        name: {type: String},
        skills: [{type: typeof PartialType<ArtType & KnowledgeType & IntellectType & PhysicalType & SocialType & SurvivalType>}],
    }

    @Prop({ nullable: true, type: [Object] })
    special? = [{
        name: {type: String},
        talent: [{type: typeof PartialType<ArtType & KnowledgeType & IntellectType & PhysicalType & SocialType & SurvivalType>}],
        stat: {type: 'phy' || 'int' || 'dxt' || 'men' || 'cha' },
    }]

    @Prop({ nullable: true, type: Object })
    skills?: TalentsType;

    @Prop({ nullable: true, type: Object })
    languages?: Languages;

    @Prop({ default: 0, min: -10, max: 10})
    karma?: number;

    @Prop({ type: Object, default: {
        humanity: 0,
        honesty: 0,
        honor: 0,
        humility: 0,
        heroism: 0
    }})
    principles = {
        humanity: {type: Number, min: -10, max: 10},
        honesty: {type: Number, min: -10, max: 10},
        honor: {type: Number, min: -10, max: 10},
        humility: {type: Number, min: -10, max: 10},
        heroism: {type: Number, min: -10, max: 10}
    };

    @Prop({ nullable: true, min: 1, max: 20 })
    reputation?: number;

    @Prop({ nullable: true, type: Object })
    renown = {
        nobility: {type: Number, min: -10, max: 10},
        religion: {type: Number, min: -10, max: 10},
        bourgeoisie: {type: Number, min: -10, max: 10},
        common: {type: Number, min: -10, max: 10},
    };

    @Prop({ type: Object, default: {
        gold: 0,
        silver: 0,
        copper: 0
    }})
    money = {
        gold: {type: Number, min: 0},
        silver: {type: Number, min: 0},
        copper: {type: Number, min: 0},
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