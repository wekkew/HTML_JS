/**
 * Feladat: Egyszerű funkciók 02.
 * Fájlnév: simple_functions_02.js
 *
 * Adott a lent látható tömb, melyben számokat
 * tárolunk. Állíts elő egy új tömböt, amiben az
 * eredeti tömb számainak kétszeresét tárolod, a
 * sorrendet megőrízve.
 *
 * Használj forEach-et.
 *
 * Bónusz: nézz utána az Array.prototype.map -nak,
 * és old meg a feladatot map-al is!
 */

var numArray = [4, 6, 2, 7, 33, 12, 663, 95722, 1];
var resultArray = [];

numArray.forEach(function (num) {
    resultArray.push(num * 2)
});


resultArray = numArray.map(function (num, index) {
    return {index: index, number: num * 2};
});


console.log(resultArray);
