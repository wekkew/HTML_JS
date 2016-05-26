/*
    Feladat: Tömbök HomeWork.
    Fájlnév: arrayHW.js

    1, Készíts egy resultArray nevű tömböt, melyben
    az names tömb elemeit abc sorrendbe rendezve
    tárolod. Az inputArray tömb maradjon érintetlen.

    2, A megoldásnak bármilyen szöveget tartalmazó,
    és bármekkora méretű egy dimenziós tömbbel működnie kell.

    3, A forráskódnak szépen olvashatónak, formázottnak kell
    lennie, a használt változnaknak érthető elnevezéseket
    kell adnotok.

    Példa: ha names = ['karcsi', 'julcsi', 'anna'], akkor
              resultArray = ['anna', 'julcsi', 'karcsi']

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
*/

var names = [
    'Jane',
    'Adele',
    'Rhianna',
    'Yaj',
    'Peter',
    'Kristof',
    'Sara',
    'Doma',
    'Panni',
    'Adele'
]

var hatekonytalansagimutato = 0;
// var names = ['f', 'e', 'd', 'c', 'b', 'a'];
// var names = ['a', 'b', 'c', 'd', 'e', 'f'];

var n = 0;

var hadFlip = true;

while (hadFlip) {
    hadFlip = false;

    for (var index = 0; index < names.length - 1 - n; index += 1) {
        var position = names[index].localeCompare(names[index + 1]);

        if (position > 0) {
            var old = names[index];
            names[index] = names[index + 1];
            names[index + 1] = old;
            hadFlip = true;
        }
        hatekonytalansagimutato += 1;
    }
    n += 1;
}

console.log(names);
console.log(n);
console.log(hatekonytalansagimutato);
