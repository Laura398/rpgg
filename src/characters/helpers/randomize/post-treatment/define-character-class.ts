import { Character } from "src/characters/entities/character.entity";
import { Class } from "src/classes/entities/class.entity";
import { Race } from "src/races/entities/race.entity";

export const defineCharacterClass = (character: Character, races: Race[], classes: Class[]): Character => {
    const characterRace = races.find((race) => race.name === character.race);
    const allowedClasses = characterRace?.magic ? classes : classes.filter((classData) => !classData?.magic);
    const randomClass = allowedClasses[Math.floor(Math.random() * allowedClasses.length)];
    character.class = randomClass.name;
    return character;
}