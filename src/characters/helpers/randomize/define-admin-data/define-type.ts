import { ANIMALS, HALFLINGS, LUTINSFEMALES, LUTINSMALES } from "../../../interfaces/constants/races.constant";

export const defineType = (race: string, gender: string) => {
    switch (race) {
        case "Lutin":
            if (gender === "Femme") {
                return LUTINSFEMALES[Math.floor(Math.random() * LUTINSFEMALES.length)];
            } else if (gender === "Homme") {
                return LUTINSMALES[Math.floor(Math.random() * LUTINSMALES.length)];
            }
        case "Demi-Divitiné":
            return HALFLINGS[Math.floor(Math.random() * HALFLINGS.length)];
        case "Homme-Animal":
            return ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
        case "Homme possédé":
            return ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
        default:
            return undefined;
    }
}