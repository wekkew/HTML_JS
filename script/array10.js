/*
    Feladat: Tömbök 10.
    Fájlnév: array10.js

    1, Készíts egy resultArray nevű tömböt, melyben
    az inputArray tömb elemeit növekvő sorrendbe rendezve
    tárolod. Az inputArray tömb maradjon érintetlen.

    2, A megoldásnak bármilyen egész számot tartalmazó,
    és bármekkora méretű egy dimenziós tömbbel működnie kell.

    3, A megoldáshoz for vagy while ciklusokat kell használnod!

    4, A forráskódnak szépen olvashatónak, formázottnak kell
    lennie, a használt változnaknak érthető elnevezéseket
    kell adnotok.

    Példa: ha inputArray = [4, 2, 7], akkor
              resultArray = [2, 4, 7]

 */

var inputArray = [5, 7, 9, 234, 56, 87, 2, 4, 233]


// Szar sajat megoldas

function solONE() {
    var tempArray = inputArray.slice();

    for (var n = 0; n < inputArray.length; n += 1) {
        if (tempArray[n] > tempArray[n + 1]) {
            tempArray.push(tempArray[n]);
            tempArray.splice(n, 1);
            n = -1;
        }
    }
    console.log(tempArray);
    //szar sajat megodas vege
}



//jo(bb) megoldas

function solTWO() {

    var tempArray = inputArray.slice();
    var hadFlip = true;

    while (hadFlip) {
        hadFlip = false;
        for (var n = 0; n < inputArray.length; n += 1) {
            if (tempArray[n] > tempArray[n + 1]) {
                var old = tempArray[n + 1];
                tempArray[n + 1] = tempArray[n];
                tempArray[n] = old;
                hadFlip = true;
            }
        }
    }
    console.log(tempArray);
}

solTWO();

// jobbmegoldas vege
