export const defineMainStats = () => {
    return {
        hp: 10 + Math.floor(Math.random() * 25), // between 10 and 35
        mp: 0 + Math.floor(Math.random() * 35), // between 0 and 35
        level: 1,
        atk: 8 + Math.floor(Math.random() * 7), // between 8 and 15
        def: 8 + Math.floor(Math.random() * 7) // between 8 and 15
    }
}