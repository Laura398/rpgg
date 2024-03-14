import { Character } from "src/characters/entities/character.entity";
import { Class } from "src/classes/entities/class.entity";
import { Race } from "src/races/entities/race.entity";

export default function redefineCharacterStatsWithClass(character: Character, raceData: Race, classData: Class) {
    const newCharacter = character;

    if (classData.conditions.secondaryStats.length > 0) {
        for (const stat of classData.conditions.secondaryStats) {
            if (newCharacter.secondaryStats[stat] < classData.conditions.minimum) {
                newCharacter.secondaryStats[stat] = classData.conditions.minimum;
            }
        }
    }

    // if (classData.avantages.type === "+") {
    //     if (classData.avantages.primaryStats.length > 0) {
    //         for (const key in classData.avantages.primaryStats) {
    //             newCharacter.mainStats[key] += classData.avantages.number;
    //         }
    //     }
    //     if (classData.avantages.secondaryStats.length > 0) {
    //         for (const key in classData.avantages.secondaryStats) {
    //             newCharacter.secondaryStats[key] += classData.avantages.number;
    //         }
    //     }
    //     if (classData.avantages.skills.length > 0) {
    //         for (const key in classData.avantages.skills) {
    //             for (const skill in newCharacter.skills[key])
    //             newCharacter.skills[key][skill] += classData.avantages.number;
    //         }
    //     }
    // } else if (classData.avantages.type === "x") {
    //     if (classData.avantages.primaryStats.length > 0) {
    //         for (const key in classData.avantages.primaryStats) {
    //             if (raceData.avantages.primaryStat === key) newCharacter.mainStats[key] += raceData.avantages.add;
    //         }
    //     }
    //     if (classData.avantages.skills.length > 0) {
    //         for (const key in classData.avantages.skills) {
    //             if (raceData.avantages.skills.includes(key)) newCharacter.skills[key] += raceData.avantages.add;
    //         }
    //     }
    // }
    
    // if (classData.restrictions.primaryStat) {
    //     newCharacter.secondaryStats[classData.restrictions.primaryStat] -= classData.restrictions.number;
    // } 
    // if (classData.restrictions.skills.length > 0) {
    //     for (const key in classData.avantages.skills) {
    //         for (const skill in newCharacter.skills[key])
    //         newCharacter.skills[key][skill] -= classData.restrictions.number;
    //     }
    // }

    if (classData.initHP && newCharacter.mainStats.hp < classData.initHP) {
        newCharacter.mainStats.hp = classData.initHP;
    }
    if (classData.initMP && (classData.initMP === 0 || newCharacter.mainStats.mp < classData.initMP)) {
        newCharacter.mainStats.mp = classData.initMP;
    } 

    return newCharacter;
}