/**
 * Feladat: Tömbfunkciók 03.: Find
 * Fájlnév: array_functions_03_find.js
 *
 * Írj egy metódust, ami a lent látható cars tömbben definiált
 * struktúra szerinti adathalmazban képes megkeresni az első olyan autót,
 * melyeknek legalább a metódus számára átadott paraméterű, vagy annál több tulajdonosa van.
 * A kereséshez használd az Array.prototype.find() metódust!
 *
 * - A megírt funkciót nevezd el megfelelően.
 * - A funkciónak két paramétert kell fogadnia, az első a tömb, amiben keres, a második
 *   a tulajdonosok száma, amivel vizsgál.
 * - A metódusnak vissza kell adnia a talált autó adatobjektumát, vagy undefined-et, ha
 *   nem talált semmit.
 *
 * A megírt funkciót hívd meg a lenti cars tömbbel, és írd ki az ereményt!
 */

 var cars = [
    {manufacturer: 'Audi', type: 'A4', owners:[{name: 'Mari', age: 22}, {name: 'Paci', age: 27}]},
    {manufacturer: 'BMW', type: 'i8', owners:[{name: 'Angi', age: 52}, {name: 'Zoci', age: 27}, {name: 'Mari', age: 14}]},
    {manufacturer: 'Mercedes', type: 'S550', owners:[{name: 'Vuki', age: 22}, {name: 'Nici', age: 47}, {name: 'Maki', age: 15}, {name: 'Han Solo', age: 75}]}
];

//this function returns the exact element of the required array (cars) which has at least required owners (limit).

function findMultiOwnersCar (array, limit) {
    return array.find(function (car) {
        return car.owners.length >= limit;
    })
};

console.log(findMultiOwnersCar(cars, 3));
