import { IsEnum, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { CharacterType, Race } from "../interfaces/enums/races.enum";
import { Alignments } from "../interfaces/enums/alignments.enum";
import { Genre, Sexuality } from "../interfaces/enums/enums";
import { Contries, FamilySituation, SocialStatus } from "../interfaces/enums/contries.enum";
import { TalentsType } from "../interfaces/types/talents.type";
import { Languages } from "../interfaces/types/languages.type";

export class CreateCharacterDto {
    @IsString()
    @IsNotEmpty()
    firstname: string;

    @IsString()
    @IsOptional()
    lastname?: string;

    @IsString()
    @IsOptional()
    nickname?: string;

    @IsEnum(Race)
    @IsOptional()
    race?: Race;

    @IsString()
    @IsOptional()
    type?: CharacterType;

    @IsEnum(Alignments)
    @IsOptional()
    alignment?: Alignments;

    @IsEnum(Genre)
    @IsOptional()
    genre?: Genre;

    @IsEnum(Sexuality)
    @IsOptional()
    sexuality?: Sexuality;

    @IsNumber()
    @IsOptional()
    height?: number;

    @IsNumber()
    @IsOptional()
    weight?: number;

    @IsString()
    @IsOptional()
    eyesColor?: string;

    @IsString()
    @IsOptional()
    hairColor?: string;

    @IsEnum(Contries)
    @IsOptional()
    origin?: Contries;

    @IsNumber()
    @IsOptional()
    children?: number;

    @IsEnum(SocialStatus)
    @IsOptional()
    socialStatus?: SocialStatus;

    @IsEnum(FamilySituation)
    @IsOptional()
    familySituation?: FamilySituation;

    @IsObject()
    @IsOptional()
    mainStats? = {
        hp: Number,
        mp: Number,
        level: Number,
        atk: Number,
        def: Number,
    }

    @IsObject()
    @IsOptional()
    secondaryStats? = {
        phy: Number,
        int: Number,
        dxt: Number,
        men: Number,
        cha: Number,
    }

    @IsObject()
    @IsOptional()
    talent? = [{
        name: String,
        skills: [String]
    }]

    @IsObject()
    @IsOptional()
    weakness? = {
        name: String,
        skills: [String]
    }

    @IsObject()
    @IsOptional()
    special? = [{
        name: String,
        talent: [String],
        stat: 'phy' || 'int' || 'dxt' || 'men' || 'cha',
    }]

    @IsObject()
    @IsOptional()
    skills?: TalentsType;

    @IsObject()
    @IsOptional()
    languages?: Languages;

    @IsNumber()
    @IsOptional()
    karma?: number;

    @IsObject()
    @IsOptional()
    principles? = {
        humanity: Number,
        honesty: Number,
        honor: Number,
        humility: Number,
        heroism: Number
    }

    @IsNumber()
    @IsOptional()
    reputation?: number;

    @IsObject()
    @IsOptional()
    renown? = {
        nobility: Number,
        religion: Number,
        bourgeoisie: Number,
        common: Number,
    };

    @IsObject()
    @IsOptional()
    money? = {
        gold: Number,
        silver: Number,
        copper: Number,
    }

    @IsObject()
    @IsOptional()
    inventory?: [String];

    @IsObject()
    @IsOptional()
    weapons?: [{
        name?: String,
        atk?: Number,
        weight?: 'light' | 'medium' | 'heavy',
        type?: 'melee' | 'range' | 'magic',
    }];

    @IsObject()
    @IsOptional()
    armors?: [{
        name?: String,
        def?: Number,
        weight?: 'light' | 'medium' | 'heavy',
        type?: 'melee' | 'range' | 'magic',
    }];

    @IsString()
    @IsOptional()
    mount?: string;
}