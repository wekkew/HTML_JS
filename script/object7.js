/*

    Feladat: Objektumok 7.
    Fájlnév: object7.js

    1, A dogs tömbben szereplő kutyák neveit írd ki
    console.log használatával.

    2, Számold ki a kutyák átlagéletkorát, és jelenítsd meg.

    3, A forráskódnak szépen olvashatónak, formázottnak kell
    lennie, a használt változnaknak érthető elnevezéseket
    kell adnotok.

 */

var dogs = [
    {
        name: 'Potty',
        age: 2.1,
        weight: 5
    },
    {
        name: 'Pimpa',
        age: 4,
        weight: 14
    },
    {
        name: 'Zozo',
        age: 12,
        weight: 9,
        bark: true
    },
    {
        name: 'Uszka',
        weight: 40,
        length: '128cm'
    }
];





var dogsWithAge = 0;
var sumAge = 0;

for (var index = 0; index < dogs.length; index += 1) {
    //console.log(dogs[index].name);
    if (dogs[index].hasOwnProperty('age')) {
        sumAge = sumAge + dogs[index].age;
        dogsWithAge += 1;
}
}
var aveAge = sumAge / dogsWithAge;
//console.log(aveAge);
//console.log('------------------------');


/*
    haladó Feladat 7/1

    1, készíts új Objektumot, melybe a dogs tömbben lévő objektumok tulajdonságait tárolod. Minden tulajdonság legyen egy tömb, amelyben a dogs tömb objektumai található tulajdonságokat sorban tárolod

    2, készülj fel arra, hogy nem minden kutyának van meg minden adata! ha egy adat hiányzik , akkor a tömbben annál a kutyánál használj null-t

    3, A forráskódnak szépen olvashatónak, formázottnak kell
    lennie, a használt változnaknak érthető elnevezéseket
    kell adnotok.

*/

var canines = {};

for (var dogIndex = 0; dogIndex < dogs.length; dogIndex += 1) {
    var currentDog = dogs[dogIndex];
    for (var key in currentDog) {
        if (Object.keys(canines).indexOf(key) < 0) {
            canines[key] = [];
        }
    }
}
for (var dogIndex = 0; dogIndex < dogs.length; dogIndex += 1) {
    var currentDog = dogs[dogIndex];
    //miert ne lehetne beletenni ide a felsot ha mar ugayanaz a fejlecuk???????????????????????????
    for (var keyIndex = 0; keyIndex < Object.keys(canines).length; keyIndex +=1) {
        var currentKey = Object.keys(canines)[keyIndex];
        if (currentDog.hasOwnProperty(currentKey)) {
            canines[currentKey].push(currentDog[currentKey]);
        }
        else {
            canines[currentKey].push(null);
        }
    }
}
console.log(canines);














/*
// letrehozzuk a majdani vegleges objectumot (we creat the reukst object)
var propertiesObject = {};
// we collect all the unique property names
// creat all property array
var dogKeys = [];
// egy tomb ahova osszegyujtom a dogs ban levo kulonbozo 'kategoriakat'
for (var dogIndex = 0; dogIndex < dogs.length; dogIndex += 1) {                 // menjen vegig a dogs tombon egyesevel
    var currentDog = dogs[dogIndex];                                            // tomb ami a dogs dogindexedik eleme
    for (var key in currentDog) {                                               //vegigmegy tetszoleges sorrendben a objektumon
        if (dogKeys.indexOf(key) === -1) {                                      //ha nincs meg benne indexOf visszaadja az indexet a tombbol
            dogKeys.push(key);                                                  //akkor tegye bele
            propertiesObject[key] = [];                                         //es letrehoz egy []-t az eredmenytombben a nevevevl
        }
    }
}
console.log(dogKeys);                                                           //kiirjuk

for (var dogIndex = 0; dogIndex < dogs.length; dogIndex += 1) {                 //menjen vegig
    var currentDog = dogs[dogIndex];                                            // tomb ami a dogs i dik eleme
    for (var propertyNameIndex = 0; propertyNameIndex < dogKeys.length; propertyNameIndex += 1){    //menjen vegig
        var currentKey = dogKeys[propertyNameIndex];                            // a tomb ami a kategira [PNI eleme]
        if (currentDog.hasOwnProperty(currentKey)) {                            //ha a dogs ban megvan a kategoria
            propertiesObject[currentKey].push(currentDog[currentKey]);          //tegye bele  eredmenytomb megfelelo helyere
        }
        else {                                                                  // ha nincs
            propertiesObject[currentKey].push(null);                            // tegeyen bele egy null-t
        }
    }
}
console.log(propertiesObject);                                                  // erredmeny
*/
