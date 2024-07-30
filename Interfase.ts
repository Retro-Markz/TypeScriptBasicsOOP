interface Drink {
    name: string;
}

interface AlcoholicDrink extends Drink {

    alcohol: number;

    showInfo(): string,
}

interface MixedDrink {
    ingredents: string[];
}

class Wine implements AlcoholicDrink {
    name: string;
    alcohol: number;

    constructor(name: string, alcohol: number) {
        this.name = name;
        this.alcohol = alcohol;
    }

    showInfo(): string {
        return `info: ${this.name} ${this.alcohol}`
    }
}

class Cocktail implements AlcoholicDrink, MixedDrink {
    name: string;
    alcohol: number;
    ingredents: string[];

    constructor(name: string,
        alcohol: number,
        ingredents: string[]
    ) {
        this.name = name;
        this.alcohol = alcohol;
        this.ingredents = ingredents;
    }

    showInfo(): string {

        const ingredentInfo = this.ingredents.reduce((ac, e) =>
            ac + " " + e + ", ", ""
        );

        return `info: ${this.name} ${this.alcohol}` +
            `ingredents: ${ingredentInfo}`;
    };
}

const margarita = new Cocktail("Margarita", 12.5, ["tequila", "limon", "sal", "soda"]);
const rioja = new Wine("vino rioja", 14);
const malbec = new Wine("vino malbec", 16);

const ad: AlcoholicDrink[] = [
    margarita, rioja, malbec
];

function showDrinks(drinks: AlcoholicDrink[]): void {
    drinks.forEach(e => console.log(e.showInfo()));
}

showDrinks(ad);
