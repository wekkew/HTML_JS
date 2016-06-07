/**
 * Feladat: Egyszerű funkciók 03.
 * Fájlnév: simple_functions_03.js
 *
 * Készíts az Array.prototype.filter metódus
 * felhasználásával egy új tömböt a numArray-ból,
 * amiben csak a páros számértékek szerepelnek.
 */

var numArray = [3, 6, 3, 6, 89, 123, 1, 5];
var resultArray=[];

resultArray = numArray.filter(function (num) {
    return num % 2 === 0;
});


console.log(resultArray);
