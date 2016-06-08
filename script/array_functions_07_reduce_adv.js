/**
 * Feladat: Tömbfunkciók 07.: Reduce Advanced
 * Fájlnév: array_functions_07_reduce_adv.js
 *
 * Adott a lenti people tömb.
 * Array.prototype.reduce() használatával építs
 * egy objektumot az emberekről, ahol a kulcs
 * az ember neve, az érték pedig a gyermekeinek
 * átlagéletkora.
 *
 * Ezt az objektumot a reduce()-al hoz létre, és
 * manipuláld, ne legyen külön változó.
 * Nézd meg a reduce kezzőérték paraméterét, hogy
 * hogyan kell a kezdőértéket használni!
 *
 * A kimenet tehát a lenti példában legyen:
 * {
 *    Joci: 5.5,
 *    Mari: 21
 * }
 */

var people = [
  {
    name: 'Joci',
    children: [
      { name: 'Kati', age: 0.5 },
      { name: 'Peti', age: 4 },
      { name: 'Mici', age: 12 }
    ]
  },
  {
    name: 'Pista',
    children: [
      { name: 'Kati', age: 3 },
      { name: 'Peti', age: 14 },
      { name: 'Kati', age: 3 },
      { name: 'Peti', age: 14 },
      { name: 'Mici', age: 13 }
    ]
  },
  {
    name: 'Marcsi',
    children: [
      { name: 'Kati', age: 4 },
      { name: 'Peti', age: 45 },
      { name: 'Mici', age: 17 }
    ]
  },
  {
    name: 'Karcsi',
    children: [
      { name: 'Kati', age: 55 },
      { name: 'Peti', age: 46 },
      { name: 'Mici', age: 121 }
    ]
  },
  {
    name: 'Mari',
    children: [
      { name: 'Laci', age: 22 },
      { name: 'Remi', age: 9 },
      { name: 'Foci', age: 32 }
    ]
}
];

var result = {};
for (var pIndex = 0; pIndex < people.length; pIndex += 1) {
    result[people[pIndex].name] = people[pIndex].children.reduce(function (a, b) {
                                        return a + b.age;
                                    }, 0) / people[pIndex].children.length;
};
console.log(result);


var result = people.reduce(function (a, b) {
    a[b.name] = (b.children.reduce(function (x, y) {
        return x + y.age;
    }, 0) / b.children.length);
    return a;
}, {});
console.log(result);
