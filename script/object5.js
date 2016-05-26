/*

    Feladat: Objecktumok 5.
    Fájlnév: object5.js

    1, Írj programot, ami a numValues objektumon belül
    tulajdonságokat hoz létre. A tulajdonságok nevei a
    names tömbben vannak tárolva

    2, Az így létrehozott tulajdonságokban tárold a
    tulajdonság nevének names tömbben elfoglalt helyét
    1-el növelve (tehát a 'one'-ban 1-et)

    4, A megoldásnak bármekkora, egyszerű neveket tartalmazó
    tömbbel működnie kell

    3, Írd ki az objektumot a console.log segítéségével.

    4, A forráskódnak szépen olvashatónak, formázottnak kell
    lennie, a használt változnaknak érthető elnevezéseket
    kell adnotok.

 */

var names = ['one', 'two', 'three', 'four', 'five'];
var numValues = {};


for (var index = 0; index < names.length; index += 1) {
    numValues[names[index]] = index + 1;
}
console.log(numValues);

var arr =  new Array();
var obj = new Object();

console.log(arr);
console.log(obj);

console.log(Object.keys(numValues));

for (var key in numValues) {
    console.log(key + '=' + numValues[key]);
};
