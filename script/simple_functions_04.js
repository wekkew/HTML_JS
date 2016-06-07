/**
 * Feladat: Egyszerű funkciók 04.
 * Fájlnév: simple_functions_04.js
 *
 * Készíts egy tömböt, amiben az objArray-ból
 * csak azok az elemek szerepelnek, amiknek
 * az életkora nagyobb, mint 20.
 *
 * Használj filter-t!
 *
 */

var objArray = [
  { age: 12, sex: 'female' },
  { age: 6, sex: 'female' },
  { age: 32, sex: 'male' },
  { age: 62, sex: 'female' },
  { age: 14, sex: 'male' }
];


var resultArray = objArray.filter(function (num) {
    return num.age > 20;
})


console.log(resultArray);
