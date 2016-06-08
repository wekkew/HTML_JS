/**
 * Feladat: Tömbfunkciók 01.: Every
 * Fájlnév: array_functions_01_every.js
 *
 * Adott a lent látható people tömb. Az
 * Array.prototype.every() metódus segítségével vizsgáld meg,
 * hogy a tömbben minden ember 1990 után született-e!
 *
 * Vizsgáld meg a Date objektumot, hogy hogyan lehet lekérdezni
 * az aktuális évet (a programodnak jövőre is megfelelően kell
 * működnie)!
 *
 */

var people = [
  { name: 'Joci', age: 39 },
  { name: 'Mari', age: 4 },
  { name: 'Paci', age: 27 },
  { name: 'Angi', age: 12 }
];

var nyuggerotthon = [
    { name: 'Marika', age: 99 },
    { name: 'Jolika', age: 84 },
    { name: 'Pancineni', age: 97 },
    { name: 'Misiba', age: 112 }
]



var now = new Date();
now = now.getFullYear();
var bornIn1990 = 1990;
var olderthan = now - bornIn1990;


console.log(people.every(function(person) {
    return person.age > olderthan
}));


console.log(nyuggerotthon.every(function(person) {
    return person.age > olderthan;
}));
