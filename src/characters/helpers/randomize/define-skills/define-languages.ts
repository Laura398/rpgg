import { LanguageLevels } from "src/characters/interfaces/enums/enums";

export const defineLanguages = (origin: string, race: string, type: string) => {
    const languageLevels = Object.values(LanguageLevels);

    const knownLanguages = [];
    switch (origin) {
        case "Gallomains":
            knownLanguages.push("common", "birth", "elf");
            break;
        case "Montagne Naine":
            knownLanguages.push("common", "birth", "dwarf");
            break;
        case "Orkland":
            knownLanguages.push("common", "birth", "orc");
            break;
        default:
            knownLanguages.push("common", "birth");
            break;
    }

    if (race === "Demi-Divitiné") {
        if (type === "Demi-Ange") {
            knownLanguages.push("antic");
        } else {
            knownLanguages.push("daemon");
        }
    }

    const knowsRunes = Math.random() > 0.9;
    if (knowsRunes) {
        knownLanguages.push("rune");
    }

    const languagesToReturn = {};
    
    if (knownLanguages.includes("common")) {
        languagesToReturn['common'] = {
            writing: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            reading: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            speaking: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            listening: languageLevels[Math.floor(Math.random() * languageLevels.length)]
        };
    }
    if (knownLanguages.includes("birth")) {
        languagesToReturn['birth'] = {
            writing: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            reading: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            speaking: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            listening: languageLevels[Math.floor(Math.random() * languageLevels.length)]
        };
    }
    if (knownLanguages.includes("elf")) {
        languagesToReturn['elf'] = {
            writing: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            reading: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            speaking: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            listening: languageLevels[Math.floor(Math.random() * languageLevels.length)]
        };
    }
    if (knownLanguages.includes("dwarf")) {
        languagesToReturn['dwarf'] = {
            writing: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            reading: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            speaking: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            listening: languageLevels[Math.floor(Math.random() * languageLevels.length)]
        };
    }
    if (knownLanguages.includes("orc")) {
        languagesToReturn['orc'] = {
            writing: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            reading: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            speaking: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            listening: languageLevels[Math.floor(Math.random() * languageLevels.length)]
        };
    }
    if (knownLanguages.includes("antic")) {
        languagesToReturn['antic'] = {
            writing: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            reading: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            speaking: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            listening: languageLevels[Math.floor(Math.random() * languageLevels.length)]
        };
    }
    if (knownLanguages.includes("daemon")) {
        languagesToReturn['daemon'] = {
            writing: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            reading: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            speaking: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            listening: languageLevels[Math.floor(Math.random() * languageLevels.length)]
        };
    }
    if (knownLanguages.includes("rune")) {
        languagesToReturn['rune'] = {
            writing: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            reading: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            speaking: languageLevels[Math.floor(Math.random() * languageLevels.length)],
            listening: languageLevels[Math.floor(Math.random() * languageLevels.length)]
        };
    }

    return languagesToReturn;
}