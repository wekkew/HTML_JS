/**
 * Feladat: Tömbfunkciók 05.: Map
 * Fájlnév: array_functions_05_map.js
 *
 * Adott a lenti people tömb.
 * Array.prototype.map() segítségével állíts elő
 * egy tömböt, amelyben az emberek életkora szerepel,
 * abban a sorrendben, ahogy a lenti tömbben az emberek
 * szerepelnek!
 *
 */

var people = [
  { name: 'Joci', age: 39 },
  { name: 'Mari', age: 4 },
  { name: 'Paci', age: 27 },
  { name: 'Angi', age: 12 }
];

var result = people.map(function (person) {
    return person.age;
})

console.log(result);
