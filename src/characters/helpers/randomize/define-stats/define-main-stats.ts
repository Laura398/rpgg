import { MAGIC_CLASSES, NON_MAGIC_CLASSES, POLYVALENT_CLASSES } from "src/characters/interfaces/constants/constants"
import { Race } from "src/races/entities/race.entity"

export const defineMainStats = (className: string) => {
    if (MAGIC_CLASSES.includes(className)) {
        return {
            hp: 10 + Math.floor(Math.random() * 20),
            mp: 12 + Math.floor(Math.random() * 20),
            level: 5,
            atk: 8 + Math.floor(Math.random() * 12),
            def: 10 + Math.floor(Math.random() * 12)
        }
    } else if (NON_MAGIC_CLASSES.includes(className)) {
        return {
            hp: 12 + Math.floor(Math.random() * 20),
            mp: 8 + Math.floor(Math.random() * 20),
            level: 5,
            atk: 12 + Math.floor(Math.random() * 20),
            def: 10 + Math.floor(Math.random() * 20)
        }
    } else if (POLYVALENT_CLASSES.includes(className)) {
        return {
            hp: 10 + Math.floor(Math.random() * 20),
            mp: 10 + Math.floor(Math.random() * 20),
            level: 5,
            atk: 10 + Math.floor(Math.random() * 20),
            def: 10 + Math.floor(Math.random() * 20)
        }
    }
}