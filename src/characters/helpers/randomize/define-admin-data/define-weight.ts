export const defineWeight = (race: string, gender: string) => {
    switch (race) {
        case "Nain":
            if (gender === "Femme") {
                return 60 + Math.floor(Math.random() * 20);
            } else {
                return 70 + Math.floor(Math.random() * 20);
            }
        case "Lutin":
            if (gender === "Femme") {
                return 40 + Math.floor(Math.random() * 20);
            } else {
                return 50 + Math.floor(Math.random() * 20);
            }
        default:
            if (gender === "Femme") {
                return 50 + Math.floor(Math.random() * 30);
            } else {
                return 60 + Math.floor(Math.random() * 30);
            }
    }
}