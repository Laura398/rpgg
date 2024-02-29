import { ALIGNEMENT, CLASSES, FAMILY_SITUATION, GENDERS, ORIGIN, SEXUALITY, SOCIAL_STATUS } from "src/characters/interfaces/constants/constants";
import { FIRSTNAMES, LASTNAMES } from "src/characters/interfaces/constants/names.constants";
import { RACES } from "src/characters/interfaces/constants/races.constant";
import { defineHeight } from "./define-admin-data/define-height";
import { defineType } from "./define-admin-data/define-type";
import { defineWeight } from "./define-admin-data/define-weight";
import { defineMainStats } from "./define-stats/define-main-stats";
import { defineSecondaryStats } from "./define-stats/define-secondary-stats";
import { defineSkills } from "./define-skills/define-skills";
import { defineLanguages } from "./define-skills/define-languages";

export const randomizeCharacter = (userId: string) => {
    const firstname = FIRSTNAMES[Math.floor(Math.random() * FIRSTNAMES.length)];
    const lastname = LASTNAMES[Math.floor(Math.random() * LASTNAMES.length)];
    const gender = GENDERS[Math.floor(Math.random() * GENDERS.length)]
    
    const race = RACES[Math.floor(Math.random() * RACES.length)];
    const type = defineType(race, gender);
    const alignment = ALIGNEMENT[Math.floor(Math.random() * ALIGNEMENT.length)];
    const className = CLASSES[Math.floor(Math.random() * CLASSES.length)];
    
    const sexuality = SEXUALITY[Math.floor(Math.random() * SEXUALITY.length)];
    const height = defineHeight(race, gender);
    const weight = defineWeight(race, gender);
    const colors = ["bleu", "vert", "marron", "noir", "rouge", "violet", "jaune", "gris", "blanc"];
    const eyesColor = colors[Math.floor(Math.random() * colors.length)];
    const hairColor = colors[Math.floor(Math.random() * colors.length)];
    
    const origin = ORIGIN[Math.floor(Math.random() * ORIGIN.length)];
    const hasChildren = Math.random() > 0.5;
    const children = hasChildren ? Math.floor(Math.random() * 10) : 0;
    const socialStatus = SOCIAL_STATUS[Math.floor(Math.random() * SOCIAL_STATUS.length)];
    const familySituation = FAMILY_SITUATION[Math.floor(Math.random() * FAMILY_SITUATION.length)];

    const mainStats = defineMainStats(className);
    const secondaryStats = defineSecondaryStats(className);

    const skills = defineSkills();

    const languages = defineLanguages(origin, race, type);

    const principles = {
        humanity: Math.floor(Math.random() * 20) - 10,
        honesty: Math.floor(Math.random() * 20) - 10,
        honor: Math.floor(Math.random() * 20) - 10,
        humility: Math.floor(Math.random() * 20) - 10,
        heroism: Math.floor(Math.random() * 20) - 10,
    }

    const newCharacter: any = {
        firstname,
        lastname,
        gender,
        race,
        alignment,
        class: className,
        sexuality,
        height,
        weight,
        eyesColor,
        hairColor,
        origin,
        children,
        socialStatus,
        familySituation,
        mainStats,
        secondaryStats,
        skills,
        languages,
        karma: 0,
        principles,
        userId
    }
    
    if (type) {
      newCharacter.type = type;
    }

    return newCharacter;
}