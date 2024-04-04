export const createAllRaces = () => {
    const human = {
        name: "Humain",
        avantages: {
            primaryStat: "",
            secondaryStat: ["all"],
            add: 2
        },
        magic: true,
    };
    
    const elf = {
        name: "Elfe",
        conditions: {
            secondaryStats: ["dxt", "int"],
            minimum: 12
        },
        avantages: {
            primaryStat: "mp",
            skills: ["knowledge", "social"],
            add: 2
        },
        restrictions: "phy",
        initHP: 25,
        initMP: 25,
        magic: true
    };

    const dwarf = {
        name: "Nain",
        conditions: {
            secondaryStats: ["phy", "dxt"],
            minimum: 12
        },
        avantages: {
            primaryStat: "hp",
            skills: ["physical", "survival"],
            add: 2
        },
        initHP: 35,
        initMP: 0,
        magic: false
    };

    const ork = {
        name: "Ork",
        conditions: {
            secondaryStats: ["phy", "dxt"],
            minimum: 12
        },
        avantages: {
            primaryStat: "atk",
            skills: ["physical", "survival"],
            add: 2
        },
        restrictions: "cha",
        initHP: 30,
        initMP: 0,
        magic: false
    };

    const hybrid = {
        name: "Homme-Animal",
        conditions: {
            secondaryStats: ["int", "men"],
            minimum: 12
        },
        initHP: 30,
        initMP: 15,
        magic: true
    };

    const halfling = {
        name: "Demi-Divinité",
        conditions: {
            secondaryStats: ["int", "men"],
            minimum: 12
        },
        avantages: {
            primaryStat: "int",
            skills: ["all"],
            add: 1
        },
        initHP: 30,
        initMP: 10,
        magic: true
    };

    const lutin = {
        name: "Lutin",
        conditions: {
            secondaryStats: ["int", "men"],
            minimum: 12
        },
        avantages: {
            primaryStat: "int",
            skills: ["intellect", "social"],
            add: 2
        },
        restrictions: "phy",
        initHP: 15,
        initMP: 25,
        magic: true
    };

    const animus = {
        name: "Homme possédé",
        conditions: {
            secondaryStats: ["phy", "men"],
            minimum: 12
        },
        initHP: 30,
        initMP: 15,
        magic: true
    };
    
    return [human, elf, dwarf, ork, hybrid, halfling, lutin, animus];
}