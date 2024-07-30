type Beer = {
    readonly name: String; //readonly evita que pueda ser modificado desde fuera
    alcohol: number;
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