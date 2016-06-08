/**
 * Feladat: Tömbfunkciók 08.: Some
 * Fájlnév: array_functions_08_some.js
 *
 * Adott a lent látható people tömb. Az
 * Array.prototype.some() metódus segítségével vizsgáld meg,
 * hogy a tömbben van-e minden embernek gyermeke!
 *
 * Írj ki true-t ha van, false-ot ha nincs!
 * Nézd meg az Array.isArray() metódus dokumentációját,
 * szükséged lehet rá! (muhahahhahahahahahhhaah)[sátánikacaj]
 */

var people = [
  { name: 'Angi', children: ['Aki', 'Paki', 'Maki'] },
  { name: 'Joci', children: [] },
  { name: 'Mari', children: ['Laki'] },
  { name: 'Laci', children: false }
];

    console.log(!people.some(function (a) {
     return Array.isArray(a.children) || a.children.length !== 0;
}));
