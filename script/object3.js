/*

    Feladat: Objecktumok 3.
    Fájlnév: object3.js

    1, Hozz létre egy objektumot, amit a 'car' nevű
    változóban tárolsz.

    2, Ebben az objektumban tárold az autó nevét,
    színét és gyártási évét.

    3, Írd ki az objektumot a console.log segítéségével.

    4, Változtasd meg a gyártási évet, és újra írd ki az objektumot.

    5, A forráskódnak szépen olvashatónak, formázottnak kell
    lennie, a használt változnaknak érthető elnevezéseket
    kell adnotok.

 */
var car = {
    name: 'Ford',
    color: 'White',
    year: 2010,
};

console.log(car);

car.year = 2011;

console.log(car);
