/*
    Feladat: Tömbök 8.
    Fájlnév: array8.js

    1, A workingArray tömb elemeinek sorrendjét fordítsd meg a tömbön belül
    úgy, hogy azokat új tömbbe nem másolod át. Egyébként bármilyen
    változót létrehozhatsz, ami a feladat megoldását segíti.

    2, A megoldásnak bármilyen, tömbben tárolható értéket tartalmazó,
    és bármekkora méretű egy dimenziós tömbbel működnie kell.

    3, A forráskódnak szépen olvashatónak, formázottnak kell
    lennie, a használt változnaknak érthető elnevezéseket
    kell adnotok.

    Példa: ha workingArray = [4, 2, 7], akkor a program futása után
              workingArray = [7, 2, 4]

    Segítség: a tömbön hívható metódusok dokumentációja itt elérhető:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

*/


var workingArray = [2, 7693, 9, 234, 56, 87, 556, 4, 45646];
// var workingArray = [1, 2, 3, 4, 5]

//CSUNYA MEGOLDAS BY ME

var workinglength = workingArray.length;

for (var index = 0; index < workinglength; index += 1) {
    workingArray.push(workingArray[index]);
}
console.log(workingArray);
for ( var index = 0; index < workinglength; index += 1) {
    workingArray[index] = workingArray[workingArray.length - 1 - index];
}
console.log(workingArray);
for (var index = 0; index < workinglength; index += 1) {
    workingArray.pop(workingArray[index]);
}
console.log(workingArray);

//CSUNYA MEGOLDA VEGE


// SZEP MEGOLDAS BY KIWEP

var length = Math.floor(workingArray.length / 2);

for (var leftIndex = 0; leftIndex < length; leftIndex += 1) {
    var leftValue = workingArray[leftIndex];
    var rightIndex = workingArray.length -1 -leftIndex;
    workingArray[leftIndex] = workingArray[rightIndex];
    workingArray[rightIndex] = leftValue;
}
console.log(workingArray);

// SZEP MEGOLDAS BY KIWEP
