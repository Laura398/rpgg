export const defineHeight = (race: string, gender: string) => {
    switch (race) {
        case "Nain":
            if (gender === "Femme") {
                return 130 + Math.floor(Math.random() * 20);
            } else {
                return 140 + Math.floor(Math.random() * 20);
            }
        case "Lutin":
            if (gender === "Femme") {
                return 130 + Math.floor(Math.random() * 20);
            } else {
                return 140 + Math.floor(Math.random() * 20);
            }
        default:
            if (gender === "Femme") {
                return 150 + Math.floor(Math.random() * 30);
            } else {
                return 160 + Math.floor(Math.random() * 30);
            }
    }
}