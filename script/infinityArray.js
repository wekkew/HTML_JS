// hozz letre tobb dimenzios tombot, az arraySizes valtozo felhasznalasaval az alabbi modon:
// 1, az arraySizes tomb elemeinek szama a dimenziok szamat mutatja, tehat a fenti peldaban 3
// 2, az adott helyierteku elem az altala jelolt dimenziot leiro tomb meretet jeloli
// 3, a kapott tobb dimenzioju tombot toltsd fel 0-tol kezdve novekbo egesz szamu ertekekkel

var arraySizes = [4, 5, 2, 5];
var dimArray = [];


var szorzat = arraySizes[0];
var tomb = [];

for (var n = 0; n < arraySizes.length; n += 1) {
    szorzat = (szorzat * arraySizes[n]);
}

var vegelegesSzorzat = szorzat / arraySizes[0]

console.log(vegelegesSzorzat);

for (var n = 0; n < vegelegesSzorzat; n += 1) {
    tomb[n] = n;
}

console.log(tomb);

for (var hossz = 1; hossz == arraySizes.lenght; hossz += 1) {

    for (var n = 0; n < arraySizes[arraySizes.length - hossz]; n += 1) {

    }
}





//
//
// for (var dimDepth = 0; dimDepth < arraySizes.length; dimDepth += 1) {
//
//     var dimSize = arraySizes[dimDepth];
//
//
//     for (var arrayIndex =0; arrayIndex < dimSize; arrayIndex += 1) {
//         universe[arrayIndex] = new Array();
//         console.log(dimDepth, dimSize);
//
//     }
// }
//
// console.log(universe);
