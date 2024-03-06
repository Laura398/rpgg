import { ALL_SKILLS } from "../constants/constants"

export type MainStatsType = {
    hp?: Number,
    mp?: Number,
    level?: Number,
    atk?: Number,
    def?: Number,
}

export type SecondaryStatsType = {
    phy?: Number,
    int?: Number,
    dxt?: Number,
    men?: Number,
    cha?: Number,
}

export type TalentsAndWeaknessType = {
    name?: String,
    skills?: [String]
}

const test = ALL_SKILLS.map(item => `'${item}'`).join(' | ');
export type SpecialType = [{
    name: String,
    draw: 'phy' | 'int' | 'dxt' | 'men' | 'cha',
    stat: String
}]

export type PrinciplesType = {
    humanity?: Number,
    honesty?: Number,
    honor?: Number,
    humility?: Number,
    heroism?: Number
}

export type RenownType = {
    nobility?: Number,
    religion?: Number,
    bourgeoisie?: Number,
    common?: Number,
}

export type MoneyType = {
    gold?: Number,
    silver?: Number,
    copper?: Number,
}

export type WeaponsAndArmorType = [{
    name?: String,
    atk?: Number,
    weight?: 'Léger' | 'Moyen' | 'Lourd',
    type?: 'Mélée' | 'Distance' | 'Magique',
}]