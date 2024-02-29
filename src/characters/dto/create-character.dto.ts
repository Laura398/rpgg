import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { Alignments } from "../interfaces/enums/alignments.enum";
import { Contries, FamilySituation, SocialStatus } from "../interfaces/enums/contries.enum";
import { Gender, Sexuality } from "../interfaces/enums/enums";
import { Race } from "../interfaces/enums/races.enum";
import { Languages } from "../interfaces/types/languages.type";
import { TalentsType } from "../interfaces/types/talents.type";
import { MainStatsType, MoneyType, PrinciplesType, RenownType, SecondaryStatsType, SpecialType, TalentsAndWeaknessType, WeaponsAndArmorType } from "../interfaces/types/types";
import { Classes } from "../interfaces/enums/classes.enum";

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
    type?: string;

    @IsEnum(Classes)
    @IsOptional()
    class?: Classes;

    @IsEnum(Alignments)
    @IsOptional()
    alignment?: Alignments;

    @IsEnum(Gender)
    @IsOptional()
    gender?: Gender;

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
    mainStats?: MainStatsType;

    @IsObject()
    @IsOptional()
    secondaryStats?: SecondaryStatsType;

    @IsObject()
    @IsOptional()
    talent?: TalentsAndWeaknessType;

    @IsObject()
    @IsOptional()
    weakness?: TalentsAndWeaknessType;

    @IsArray()
    @IsOptional()
    special?: SpecialType;

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
    principles?: PrinciplesType;

    @IsNumber()
    @IsOptional()
    reputation?: number;

    @IsObject()
    @IsOptional()
    renown?: RenownType;

    @IsObject()
    @IsOptional()
    money?: MoneyType;

    @IsObject()
    @IsOptional()
    inventory?: [String];

    @IsObject()
    @IsOptional()
    weapons?: WeaponsAndArmorType;

    @IsObject()
    @IsOptional()
    armors?: WeaponsAndArmorType;

    @IsString()
    @IsOptional()
    mount?: string;
}