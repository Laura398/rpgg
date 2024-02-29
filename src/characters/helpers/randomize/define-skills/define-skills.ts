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
        art[artName] = Math.floor(Math.random() * 20);
    })
    knowledgeNames.forEach(knowledgeName => {
        knowledge[knowledgeName] = Math.floor(Math.random() * 20);
    })
    intellectNames.forEach(intellectName => {
        intellect[intellectName] = Math.floor(Math.random() * 20);
    })
    physicalNames.forEach(physicalName => {
        physical[physicalName] = Math.floor(Math.random() * 20);
    })
    socialNames.forEach(socialName => {
        social[socialName] = Math.floor(Math.random() * 20);
    })
    survivalNames.forEach(survivalName => {
        survival[survivalName] = Math.floor(Math.random() * 20);
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


