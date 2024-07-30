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
    alcohol: number;
    name: string;
    ingredents: string[];

    constructor(name: string,
        alcohol, number,
        ingredents: string[]
    ) {
        this.name = name;
        this.alcohol = alcohol;
        this.ingredents = ingredents;
    }

    showInfo(): string {
        return ""
    };
}