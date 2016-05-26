/*

    Feladat: Objecktumok 8.
    Fájlnév: object8.js

    Adott egy coordinates nevű tömb, melyben pontokat
    leíró objektumok vannak a lenti példa szerint.
    Ebben a tömbben bármennyi objektum lehet, de
    de mindegyik egy pontot ír le, így kötelezően
    szerepel bennük az x és y tulajdonság.

    Számold ki annak a téglalapnak a bal felső és jobb
    alsó koordinátáját, ami a megadott pontokat befoglalja
    és tárold egy objektumban az alábbi séma szerint:

    var bounds = {
        min: { x: 0, y: 0 },
        max: { x: 0, y: 0 }
    }

    Jelenítsd meg az így létrehozott objektumot console.log
    segítségével.

    A képernyő koordinátarendszerének origója a bal felső
    sarokban van, a koordináták jobbra és lefelé növekednek.

    A forráskódnak szépen olvashatónak, formázottnak kell
    lennie, a használt változnaknak érthető angol elnevezéseket
    kell adnotok. Használjatok megjegyzéseket az olvashatóság
    segítésére és a megoldás dokumentálására.

 */

var coordinates = [
    { x: 10.3, y: 300 },
    { x: 472,  y: 8 },
    { x: 39,   y: 20.99 },
    { x: 6.1,  y: 385 },
    { x: 63,   y: 23 }
]

// for the rectangle we need two ponts (four coordinates)
// these four cordinates are the xmin xmax ymin ymax values
// define the result rectangle's object (bound)  and its' four side's coordinates

var bounds = {
    min: { x: undefined, y: undefined },
    max: { x: undefined, y: undefined }
}
for (var index = 0; index < coordinates.length; index += 1) {
    if (coordinates[index].x > bounds.max.x || typeof bounds.max.x === 'undefined') {
        bounds.max.x = coordinates[index].x;
    }
    if (coordinates[index].x < bounds.min.x || typeof bounds.min.x === 'undefined') {
        bounds.min.x = coordinates[index].x;
    }
    if (coordinates[index].y > bounds.max.y || typeof bounds.max.y === 'undefined') {
        bounds.max.y = coordinates[index].y;
    }
    if (coordinates[index].y < bounds.min.y || typeof bounds.min.y === 'undefined') {
        bounds.min.y = coordinates[index].y;
    }
}
console.log(bounds);
