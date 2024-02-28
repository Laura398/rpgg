import { PartialType } from "@nestjs/mapped-types"
import { Art, Intellect, Knowledge, Physical, Social, Survival } from "../enums/talents.enum"

export type ArtType = {
    [key in Art]?: number;
}

export type KnowledgeType = {
    [key in Knowledge]?: number;
}

export type IntellectType = {
    [key in Intellect]?: number;
}

export type PhysicalType = {
    [key in Physical]?: number;
}

export type SocialType = {
    [key in Social]?: number;
}

export type SurvivalType = {
    [key in Survival]?: number;
}

export type TalentsType = {
    art?: ArtType,
    knowledge?: KnowledgeType,
    intellect?: IntellectType,
    physical?: PhysicalType,
    social?: SocialType,
    survival?: SurvivalType,
}