/**
 * Feladat: Egyszerű funkciók 01.
 * Fájlnév: simple_functions_01.js
 *
 * Adott a lent látható tömb, melyben objektumokat
 * tárolunk. Iterálj végig a tömbön forEach
 * használatával, és írd ki az objektumok kulcsainak neveit!
 */

var objArray = [
  { command: 'learn', when: 'now' },
  { name: 'Yolo', age: 26 },
  { color: 'purple', type: 'Prince' }
];

objArray.forEach(function (objItem) {
    Object.keys(objItem).forEach(function (keyName) {
        console.log(keyName);
    })
});
