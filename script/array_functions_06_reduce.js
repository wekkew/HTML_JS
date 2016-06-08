/**
 * Feladat: Tömbfunkciók 06.: Reduce
 * Fájlnév: array_functions_06_reduce.js
 *
 * Adott a lenti people tömb.
 * Array.prototype.reduce() használatával számold
 * ki az emberek átlagéletkorát, és írd ki azt!
 */

var people = [
  { name: 'Joci', age: 39 },
  { name: 'Mari', age: 4 },
  { name: 'Paci', age: 27 },
  { name: 'Angi', age: 12 }
];

var result = people.reduce(function (a, b) {
    return a + b.age;
}, 0) / people.length;

console.log(result);
