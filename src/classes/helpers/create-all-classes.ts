export const createAllClasses = () => {
    const adventurer = {
        name: "Aventurier",
        initHP: 30,
    }

    const warrior = {
        name: "Guerrier",
        conditions: {
            secondaryStats: ["phy", "men"],
            minimum: 12,
        },
        avantages: {
            primaryStats: ["dxt"],
            type: "x",
            number: 2,
            other: ["Toutes armes", "Toutes armures"],
        },
        restrictions: {
            other: ["Pas de dons magiques"],
        },
        initHP: 30,
        initMP: 0,
    }

    const berserker = {
        name: "Berserker",
        conditions: {
            secondaryStats: ["men", "dxt", "phy"],
            minimum: 13,
        },
        avantages: {
            primaryStats: ["dxt"],
            type: "x",
            number: 1.5,
            other: ["Toutes armes"],
        },
        restrictions: {
            skills: ["social", "knowledge"],
            number: 2,
            other: ["Pas d'armures lourdes"],
        },
        initHP: 40,
        initMP: 10,
    }

    const barbarian = {
        name: "Barbare",
        conditions: {
            secondaryStats: ["men", "phy"],
            minimum: 13,
        },
        avantages: {
            primaryStats: ["atk", "def"],
            secondaryStats: ["dxt"],
            type: "+",
            number: 2,
            other: ["Toutes armes"],
        },
        restrictions: {
            skills: ["knowledge", "social"],
            number: 3,
        },
        initHP: 35,
        initMP: 0,
    }

    const mercenary = {
        name: "Mercenaire",
        conditions: {
            secondaryStats: ["men", "dxt"],
            minimum: 12,
        },
        avantages: {
            skills: ["survival"],
            type: "+",
            number: 2,
            other: ["Double les pièces gagnées"],
        },
        restrictions: {
            others: ["Pas d'armures lourdes"],
        },
        initHP: 32,
        initMP: 0,
    }

    const hunter = {
        name: "Chasseur",
        conditions: {
            secondaryStats: ["men", "dxt"],
            minimum: 13,
        },
        avantages: {
            skills: ["survival"],
            type: "+",
            number: 4,
            other: ["Bonus armes à distance"],
        },
        restrictions: {
            other: ["Pas d'armures lourdes", "Pas d'armures lourdes", "Malus armes de mêlée"],
        },
        initHP: 28,
        initMP: 0,
    }

    const mage = {
        name: "Mage",
        conditions: {
            secondaryStats: ["int", "cha"],
            minimum: 12,
        },
        avantages: {
            skills: ["kowledge", "social"],
            type: "+",
            number: 2,
        },
        restrictions: {
            other: ["Pas d'armures de guerrier", "Pas d'armes de guerrier"],
        },
        initHP: 20,
        initMP: 30,
    }

    const wizard = {
        name: "Sorcier",
        conditions: {
            secondaryStats: ["int", "men"],
            minimum: 13,
        },
        avantages: {
            secondaryStats: ["dxt"],
            skills: ["kowledge"],
            type: "+",
            number: 2,
        },
        restrictions: {
            other: ["Pas d'armures de guerrier", "Pas d'armes de guerrier"],
        },
        initHP: 30,
        initMP: 20,
    }

    const druid = {
        name: "Druide",
        conditions: {
            secondaryStats: ["int", "dxt"],
            minimum: 13,
        },
        avantages: {
            skills: ["survival", "kowledge"],
            type: "+",
            number: 2,
        },
        restrictions: {
            skills: ["social"],
            number: 2,
            other: ["Pas d'armures de guerrier", "Pas d'armes de guerrier"],
        },
        initHP: 24,
        initMP: 26,
    }

    const monk = {
        name: "Moine",
        conditions: {
            secondaryStats: ["men", "phy"],
            minimum: 12,
        },
        avantages: {
            secondaryStats: ["dxt"],
            skills: ["kowledge"],
            type: "+",
            number: 2,
        },
        restrictions: {
            skills: ["survival"],
            number: 2,
            other: ["Pas d'armures de guerrier", "Pas d'armes de guerrier"],
        },
        initHP: 25,
        initMP: 25,
    }

    const assassin = {
        name: "Assassin-Voleur",
        conditions: {
            secondaryStats: ["dxt", "int"],
            minimum: 13,
        },
        avantages: {
            secondaryStats: ["dxt"],
            skills: ["survival"],
            type: "+",
            number: 2,
        },
        restrictions: {
            other: ["Pas d'armures de guerrier", "Pas d'armes à deux mains"],
        },
        initHP: 30,
        initMP: 0,
    }

    const rider = {
        name: "Cavalier",
        conditions: {
            secondaryStats: ["dxt", "men"],
            minimum: 13,
        },
        avantages: {
            skills: ["social", "kowledge"],
            type: "+",
            number: 2,
            other: ["Gain d'aptitudes x1.5"]
        },
        restrictions: {
            other: ["Pas d'armures de guerrier", "Pas d'armes à deux mains", "2 d'écart maximum entre les statistiques du personnages"],
        },
        initHP: 30,
        initMP: 0,
    }

    const priest = {
        name: "Prêtre",
        conditions: {
            secondaryStats: ["int", "cha"],
            minimum: 12,
        },
        avantages: {
            skills: ["kowledge", "social"],
            type: "+",
            number: 2,
            other: ["Miracles"]
        },
        initHP: 25,
        initMP: 20,
    }

    const paladin = {
        name: "Paladin",
        conditions: {
            secondaryStats: ["int", "cha", "men"],
            minimum: 12,
        },
        avantages: {
            secondaryStats: ["dxt"],
            skills: ["social"],
            type: "+",
            number: 2,
            other: ["Miracles spécifiques"]
        },
        initHP: 30,
        initMP: 15,
    }

    return [adventurer, warrior, berserker, barbarian, mercenary, hunter, mage, wizard, druid, monk, assassin, rider, priest, paladin];
}