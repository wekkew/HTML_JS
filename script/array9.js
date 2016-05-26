/*
    Feladat: Tömbök 9.
    Fájlnév: array9.js

    1, A deck tömb tartalmazza a francia kártya 52 lapját. Anélkül, hogy
    a kártyákat új tömbbe másolnád keverd össze a paklit, tehát a tömb
    elemeit.

    2, A keverésnél a legegyszerűbb megoldásra törekedj, ne a
    legoptimálisabbra!

    3, Amennyiben a keverés paraméterezhető (pl. a keverés hossza,
    ismétlések száma), úgy a paramétereket jól elnevezett változókként
    vezesd ki a program elejére.

    4, A forráskódnak szépen olvashatónak, formázottnak kell
    lennie, a használt változnaknak érthető elnevezéseket
    kell adnotok.

    Segítség: a tömbön hívható metódusok dokumentációja itt elérhető:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

 */

var deck = [
    'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cJ', 'cQ', 'cK', 'cA',
    'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dJ', 'dQ', 'dK', 'dA',
    'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hJ', 'hQ', 'hK', 'hA',
    's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sJ', 'sQ', 'sK', 'sA'
]

//pakliban hány kártya van
var deckLength = deck.length;

function solONE() {

    // egy tömb amiben annyi elem van ahány kártya a pakliban
    var tempArray=[];
    for (var a = 0; a < deckLength; a += 1) {
        tempArray[a] = a;
    }

    // kisorsoljuk a random helyuket a kartyaknak
    var newArray = [];
    for (var newIndex = 0; newIndex < deckLength; newIndex += 1) {
        var tempMax = tempArray.length - 1;
        var randomIndex = Math.floor(Math.random() * (tempMax + 1));
        newArray[newIndex] = tempArray[randomIndex];
        tempArray.splice(randomIndex, 1);
    }

    // betesszuk a kartyakat az uj helyukre
    for (var n = 0; n < deckLength; n += 1) {
        var x = newArray[n];
        var old = deck[x];
        deck[x] = deck[n];
        deck[n] = old;
    }
    console.log(deck);
}
// solONE();


function solTWO() {
    var mixNum = 100;
    var mixing = mixNum * deckLength;

    for (var x = 0; x < mixing; x += 1){
        for (var n = 0; n < deckLength; n += 1) {
            var randomIndex = Math.floor(Math.random() * (deckLength - n));
            var old = deck[n];
            deck[n] = deck[randomIndex];
            deck[randomIndex] = old;
        }
    }
    console.log(deck);
    console.log('Összesen ' + mixing + '-szer lett megmozgatva minden egyes lap.');
}
solTWO();
