/*
    Feladat: Tömbök 7.
    Fájlnév: array7.js

    1, Készíts egy resultArray nevű tömböt, melyben
    az inputArray tömb elemeit véletlenszerű sorrendben
    tárolod. Véletlen számot a Math.random() fügyvénnyel
    generálhatsz.

    2, A megoldásnak bármilyen egész számot tartalmazó,
    és bármekkora méretű egy dimenziós tömbbel működnie kell.

    3, A forráskódnak szépen olvashatónak, formázottnak kell
    lennie, a használt változnaknak érthető elnevezéseket
    kell adnotok.

    Példa: ha inputArray = [4, 2, 7], akkor
              resultArray = [7, 2, 4]

 */
 function GenerateArray(size) {
    var myArray = new Array();
    for (var i = 0; i < size; i++) {
        myArray[i] =  Math.ceil(100 * Math.random());
    }
    return myArray;
 }


var inputArray = GenerateArray(10);


function solutionONE() {
// CSUNYA MEGOLDAS
// randomszám generálás 0 és az inputArray legmagasabb indexű elem között
var min = 0;
var max = inputArray.length -1;
// var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
// azért kell a randomIndexet a ciluson belül definiálni, hogy 'körönként' új számot kapjunk
var futasszam = [];
for (var ciklusfutas = 0; ciklusfutas < 10; ciklusfutas += 1) {
    var n = 0;
    var resultArray = [];
    for (var inputIndex = 0; inputIndex < max + 1; inputIndex += 1) {
        var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        if (Number.isInteger(resultArray[randomIndex])) {
            inputIndex -= 1;
        }
        else {
            resultArray[randomIndex] = inputArray[inputIndex];
        }
        n += 1;
    }
    futasszam[ciklusfutas] = n;
}
// console.log(inputArray);
// console.log(resultArray);
var osszeg = 0;
for (var x = 0; x < futasszam.length; x += 1) {
    osszeg = osszeg + futasszam[x];
}
var atlag = osszeg / futasszam.length;
var hanyszoros = atlag / inputArray.length;
console.log(inputArray.length + ' elem hosszusagu eredeti tombenel ' + hanyszoros + 'szeresen hatékonytalan');
// CSUNYA MEGOLDAS VEGE
}
solutionONE();



// LEENDO SZEP MEGOLDAS


function solutionTWO() {

    var copyArray = inputArray.slice();
    var copyMax = copyArray.length - 1;


    var resultArray = [];

    for (var resultIndex = 0; resultIndex < inputArray.length; resultIndex += 1) {
        var copyMax = copyArray.length - 1;
        var randomIndex = Math.floor(Math.random() * (copyMax + 1));
        resultArray[resultIndex] = copyArray[randomIndex];
        copyArray.splice(randomIndex, 1);
    }
    console.log(inputArray);
    console.log(resultArray);

}
// solutionTWO();
