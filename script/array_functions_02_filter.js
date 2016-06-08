/**
 * Feladat: Tömbfunkciók 02.: Filter
 * Fájlnév: array_functions_02_filter.js
 *
 * Adott a lent látható cars tömb. Az
 * Array.prototype.filter() metódus segítségével találd meg és add vissza
 * azokat az autókat, melyeknek a birtokosa még nem érte el a B kategóriás
 * vezetői engedély megszerzéséhez szükséges minimum életkort!
 *
 */

var cars = [
    {manufacturer: 'Audi', type: 'A4', owners:[{name: 'Mari', age: 22}, {name: 'Paci', age: 27}]},
    {manufacturer: 'BMW', type: 'i8', owners:[{name: 'Angi', age: 52}, {name: 'Zoci', age: 27}, {name: 'Mari', age: 14}]},
    {manufacturer: 'Mercedes', type: 'S550', owners:[{name: 'Vuki', age: 22}, {name: 'Nici', age: 47}, {name: 'Maki', age: 15}]}
        ];



/*
every
ha mindenki megfelelt akkor true val tert viszza
ha valahol talal egy false-t akkor false mindegy hogy hol

filter
ha true akkor viszzater az elemmel amugy kihagyja
*/

var limit = 17;

var cocheEnElCalle = cars.filter(function (car) {
    return !car.owners.every(function (owner) {
        return owner.age > limit;
    })
});

console.log(cocheEnElCalle);
