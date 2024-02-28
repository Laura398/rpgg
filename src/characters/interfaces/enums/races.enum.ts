export enum Race {
    HUMAN = 'Humain',
    ELF = 'Elfe',
    DWARF = 'Nain',
    ORC = 'Ork',
    HYBRID = 'Homme-Animal',
    BERSERKER = 'Homme possédé',
    LUTIN = 'Lutin',
    HALFLING = 'Demi-Divitiné',
}

export enum LutinType {
    DAYGNOME = 'Gnome du jour',
    NIGHTGNOME = 'Gnome de la nuit',
    SUMMERFAIRY = 'Fée de l\'été',
    WINTERFAIRY = 'Fée de l\'hiver',
    SPRINGFAIRY = 'Fée du printemps',
    AUTUMNFAIRY = 'Fée de l\'automne',
}

export enum HalflingType {
    ANGEL = 'Demi-Ange',
    DEMON = 'Demi-Démon',
}

export type CharacterType = LutinType | HalflingType | string;