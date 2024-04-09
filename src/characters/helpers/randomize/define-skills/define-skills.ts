import { Art, Intellect, Knowledge, Physical, Social, Survival } from "src/characters/interfaces/enums/talents.enum";

export const defineSkills = () => {
    const artsNames = Object.values(Art);
    const knowledgeNames = Object.values(Knowledge);
    const intellectNames = Object.values(Intellect);
    const physicalNames = Object.values(Physical);
    const socialNames = Object.values(Social);
    const survivalNames = Object.values(Survival);

    const art = {};
    const knowledge = {};
    const intellect = {};
    const physical = {};
    const social = {};
    const survival = {};

    artsNames.forEach(artName => {
        art[artName] = 5 + Math.floor(Math.random() * 10); // between 5 and 15
    })
    knowledgeNames.forEach(knowledgeName => {
        knowledge[knowledgeName] = 5 + Math.floor(Math.random() * 10); // between 5 and 15
    })
    intellectNames.forEach(intellectName => {
        intellect[intellectName] = 5 + Math.floor(Math.random() * 10); // between 5 and 15
    })
    physicalNames.forEach(physicalName => {
        physical[physicalName] = 5 + Math.floor(Math.random() * 10); // between 5 and 15
    })
    socialNames.forEach(socialName => {
        social[socialName] = 5 + Math.floor(Math.random() * 10); // between 5 and 15
    })
    survivalNames.forEach(survivalName => {
        survival[survivalName] = 5 + Math.floor(Math.random() * 10); // between 5 and 15
    })

    return {
        art,
        knowledge,
        intellect,
        physical,
        social,
        survival
    }
}


