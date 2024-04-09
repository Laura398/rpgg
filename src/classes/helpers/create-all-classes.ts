export const createAllClasses = () => {
    const adventurer = {
        name: "Aventurier",
        initHP: 30,
        allWeapons: true,
        allArmors: true,
        magic: true,
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
        },
        initHP: 30,
        initMP: 0,
        allWeapons: true,
        allArmors: true,
        magic: false,
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
        },
        restrictions: {
            skills: ["social", "knowledge"],
            number: 2,
        },
        initHP: 40,
        initMP: 10,
        allWeapons: true,
        allArmors: false,
        heavyArmors: false,
        lightArmors: true,
        magic: true,
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
        },
        restrictions: {
            skills: ["knowledge", "social"],
            number: 3,
        },
        initHP: 35,
        initMP: 0,
        allWeapons: true,
        allArmors: true,
        magic: false,
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
        },
        other: ["Double les pièces gagnées"],
        initHP: 32,
        initMP: 0,
        allWeapons: true,
        allArmors: false,
        heavyArmors: false,
        lightArmors: true,
        magic: false,
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
        },
        initHP: 28,
        initMP: 0,
        allWeapons: true,
        allArmors: false,
        heavyArmors: false,
        lightArmors: true,
        magic: false,
        bonus: "ranged weapons",
        malus: "melee weapons"
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
        initHP: 20,
        initMP: 30,
        twoHandedWeapons: false,
        rangedWeapons: false,
        meleeWeapons: false,
        allArmors: false,
        heavyArmors: false,
        lightArmors: false,
        magic: true,
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
        initHP: 30,
        initMP: 20,
        twoHandedWeapons: false,
        rangedWeapons: false,
        meleeWeapons: false,
        allArmors: false,
        heavyArmors: false,
        lightArmors: false,
        magic: true,
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
        },
        initHP: 24,
        initMP: 26,
        twoHandedWeapons: false,
        rangedWeapons: false,
        meleeWeapons: false,
        allArmors: false,
        heavyArmors: false,
        lightArmors: false,
        magic: true,
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
        },
        initHP: 25,
        initMP: 25,
        twoHandedWeapons: false,
        rangedWeapons: false,
        meleeWeapons: false,
        allArmors: false,
        heavyArmors: false,
        lightArmors: false,
        magic: true,
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
        initHP: 30,
        initMP: 0,
        twoHandedWeapons: false,
        rangedWeapons: true,
        meleeWeapons: true,
        allArmors: false,
        heavyArmors: false,
        lightArmors: false,
        magic: false,
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
        },
        other: ["Gain d'aptitudes x1.5",  "2 d'écart maximum entre les statistiques du personnages"],
        initHP: 30,
        initMP: 0,
        twoHandedWeapons: false,
        rangedWeapons: true,
        meleeWeapons: true,
        allArmors: false,
        heavyArmors: false,
        lightArmors: false,
        magic: false,
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
        },
        initHP: 25,
        initMP: 20,
        allWeapons: true,
        allArmors: true,
        magic: true,
        miracles: true,
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
        },
        initHP: 30,
        initMP: 15,
        allWeapons: true,
        allArmors: true,
        magic: true,
        specificMiracles: true,
    }

    return [adventurer, warrior, berserker, barbarian, mercenary, hunter, mage, wizard, druid, monk, assassin, rider, priest, paladin];
}