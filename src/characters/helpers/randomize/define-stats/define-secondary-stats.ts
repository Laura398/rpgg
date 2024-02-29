import { MAGIC_CLASSES, NON_MAGIC_CLASSES, POLYVALENT_CLASSES } from "src/characters/interfaces/constants/constants"

export const defineSecondaryStats = (className: string) => {
    if (MAGIC_CLASSES.includes(className)) {
        return {
            phy: 8 + Math.floor(Math.random() * 20),
            int: 12 + Math.floor(Math.random() * 20),
            dxt: 10 + Math.floor(Math.random() * 20),
            men: 10 + Math.floor(Math.random() * 20),
            cha: 10 + Math.floor(Math.random() * 20)
        }
    } else if (NON_MAGIC_CLASSES.includes(className)) {
        return {
            phy: 12 + Math.floor(Math.random() * 20),
            int: 8 + Math.floor(Math.random() * 20),
            dxt: 10 + Math.floor(Math.random() * 20),
            men: 10 + Math.floor(Math.random() * 20),
            cha: 10 + Math.floor(Math.random() * 20)
        }
    } else if (POLYVALENT_CLASSES.includes(className)) {
        return {
            phy: 10 + Math.floor(Math.random() * 20),
            int: 10 + Math.floor(Math.random() * 20),
            dxt: 10 + Math.floor(Math.random() * 20),
            men: 10 + Math.floor(Math.random() * 20),
            cha: 10 + Math.floor(Math.random() * 20)
        }
    }
}