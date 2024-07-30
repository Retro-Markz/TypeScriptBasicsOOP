type Beer = {
    name: String; //readonly evita que pueda ser modificado desde fuera
    alcohol: number;
    brand?: string  //la interrogacion lo pone como opcional
}

type Snack = {
    nameSnack: string,
    price: number
}

//los tipos sirven apra definir elementos y estructuras

function show(beer: Beer): void {
    console.log(`info ${beer.name} ${beer.alcohol}`);

}

const myBeer: Beer = {
    name: "delirium",
    alcohol: 7.5,
}


myBeer.name = "Indio"; //debido al readonly, ahora marca error
show(myBeer);

const combo: Beer & Snack = {
    name: "Corona",
    alcohol: 4.5,
    brand: "Modelo",
    nameSnack: "Pastel",
    price: 100,

}

console.log(combo);
