//clase

class Sale {
    //amount?: number; la interrogacion en la variable abilita que no retorne nada

    protected amount: number; //protected deja accdeder exted sirve para heredad a las clases hijas... private no deja acceder de las clases o desde fuera

    constructor(amount: number) {
        this.amount = amount;
    }

    getTotal(): number {
        return this.amount;
    }
}


class SalesWithTax extends Sale {
    tax: number;

    constructor(tax: number, amount: number) {
        super(amount);
        this.tax = tax;

    }

    override getTotal(): number {       //la palabra override comprueba  que el metodo exista o sea el mismo del padre en la sobreescritura
        return this.tax + super.getTotal();
    }


}


//metodos

let salesWithTax = new SalesWithTax(10, 100);
const res2 = salesWithTax.getTotal();
console.log(res2);

