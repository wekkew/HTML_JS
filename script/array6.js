/*
    Feladat: Tömbök 6.
    Fájlnév: array6.js

    1, Készíts egy resultArray nevű tömböt, melyben
    az inputArray tömb elemeit fordított sorrendben
    tárolod.

    2, A megoldásnak bármilyen egész számot tartalmazó,
    és bármekkora méretű egy dimenziós tömbbel működnie kell.

    3, A forráskódnak szépen olvashatónak, formázottnak kell
    lennie, a használt változnaknak érthető elnevezéseket
    kell adnotok.

    Példa: ha inputArray = [4, 2, 7], akkor
              resultArray = [7, 2, 4]

 */

var inputArray = [2, 7, 9, 234, 56, 87, 2, 4, 2];

var resultArray

// vegye fel az inputIndex az eredeti tömb utolsó elemének index értékét
// egyesevel csökkenjen az inputIndex amig a resultIndex egyesével nőni fog

for (var inputIndex = (inputArray.length - 1), resultIndex = 0; inputIndex >= 0; inputIndex -= 1, resultIndex += 1) {
    resultArray[resultIndex] = inputArray[inputIndex];
}
console.log(inputArray);
console.log(resultArray);





var resultArray = inputArray.slice();
resultArray = resultArray.reverse();
console.log(inputArray);
console.log(resultArray);
