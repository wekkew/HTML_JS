/*
 * Feladat: Tömbfunkciók 04.: ForEach
 * Fájlnév: array_functions_04_foreach.js
 *
 * Adott a lenti sequence tömb, minden eleme egy function.
 * Array.prototype.forEach() segítségével iterálj végig a
 * tömbön, és hívd meg az elem-metódusokat, átadva számukra
 * a tömbben levő indexüket!
 *
 * A programnak az alábbi üzenetet kell kiírnia:
 *    first! > 0
 *    second! > 1
 *    third! > 2
 */

var sequence = [
  function (index) { console.log('first! > ' + index); },
  function (index) { console.log('second! > ' + index); },
  function (index) { console.log('third! > ' + index); }
];

sequence.forEach(function(beela, index) {
    beela(index);
});
