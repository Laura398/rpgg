import { Alignments } from "../enums/alignments.enum";
import { Classes } from "../enums/classes.enum";
import { Contries, FamilySituation, SocialStatus } from "../enums/contries.enum";
import { Gender, Sexuality } from "../enums/enums";

export const GENDERS = Object.values(Gender);

export const ALIGNEMENT = Object.values(Alignments);

export const SEXUALITY = Object.values(Sexuality);

export const ORIGIN = Object.values(Contries);

export const SOCIAL_STATUS = Object.values(SocialStatus);

export const FAMILY_SITUATION = Object.values(FamilySituation);

export const CLASSES = Object.values(Classes);

export const MAGIC_CLASSES = ["Druide", "Mage", "Moine", "Prêtre", "Sorcier"];

export const NON_MAGIC_CLASSES = ["Barbare", "Bersherker", "Guerrier", "Mercenaire", "Paladin"];

export const POLYVALENT_CLASSES = ["Assassin-Voleur", "Aventurier", "Cavalier", "Chasseur"];