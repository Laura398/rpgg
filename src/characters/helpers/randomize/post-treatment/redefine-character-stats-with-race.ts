import { Character } from "src/characters/entities/character.entity";
import { Race } from "src/races/entities/race.entity";

export default function redefineCharacterStatsWithRace(character: Character, raceData: Race) {
    const newCharacter = character;

    if (raceData.conditions.secondaryStats.length > 0) {
        for (let stat of raceData.conditions.secondaryStats) {
            if (newCharacter.secondaryStats[stat] < raceData.conditions.minimum) {
                newCharacter.secondaryStats[stat] = raceData.conditions.minimum;
            }
        }
    }

    if (raceData.avantages.primaryStat && raceData.avantages.primaryStat === "") {
        for (let key in newCharacter.mainStats) {
            newCharacter.mainStats[key] += raceData.avantages.add;
        }
    } else {
        newCharacter.mainStats[raceData.avantages.primaryStat] += raceData.avantages.add;
    }
    if (raceData.avantages.skills.length > 0) {
            for (let key in newCharacter.skills) {
                for (const skill in newCharacter.skills[key])
                newCharacter.skills[key][skill] += raceData.avantages.add;
            }
    }

    if (raceData.restrictions) {
        newCharacter.secondaryStats[raceData.restrictions] -+ 1;
    }
    
    if (raceData.initHP) {
        newCharacter.mainStats.hp = raceData.initHP;
    }
    if (raceData.initMP) {
        newCharacter.mainStats.mp = raceData.initMP;
    }
    newCharacter.mainStats.level = 1;

    return newCharacter;
}