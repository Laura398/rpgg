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

export type SpecialType = [{
    name: String,
    talent: [String],
    stat: 'phy' | 'int' | 'dxt' | 'men' | 'cha',
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