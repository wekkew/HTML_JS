/**
 *
 * Feladat: Kreatív funkciók 01.
 * Fájlnév: creative_functions_01.js
 *
 * Készítsd el Bobot. Bob egy kis fickó, akinek utasításokat lehet adni,
 * hogy merre menjen. Bob kezdetben a 0,0 pozíción áll.
 *
 * Bobnak el kell tudnia lépnie 'right', 'down', 'left' és 'up' irányokba
 * paraméterezhető számú lépéssel. Amikor Bob lép, akkor ki kell írnia, hogy
 * merre és mennyit lépett, illetve a lépés után aktuálisan milyen pozíción
 * áll.
 *
 * Bob számára az utasításokat a directionCommands tömbből kell kiadnod.
 * Annyi utasítást adj Bobnak, amennyi a tömbben van, a belső struktúráját
 * a lenti példában láthatod.
 *
 * Találj ki különféle módokat, hogy Bobot hogyan lehetne felépíteni,
 * akár írj is többféle megvalósítást.
 *
 */

var directionCommands = [
  { command: 'right', steps: 2 },
  { command: 'down', steps: 1 },
  { command: 'right', steps: 1 },
  { command: 'down', steps: 1 },
  { command: 'left', steps: 2 }
];


function bob() {
    var coordinates = {x: 0; y:0};

    return {
        right: function (steps) {
            coordinates.x += steps;
        }

        left: function (steps) {
            coordinates.x -= steps;
        }

        up: function (steps) {
            coordinates.y += steps;
        }

        down: function (steps) {
            coordinates.y -= steps;
        }
}
