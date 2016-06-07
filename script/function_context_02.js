/**
 * Feladat: Funkció kontextusok 02.
 * Fájlnév: function_context_02.js
 *
 * - Készíts egy createTimer eljárást, aminek
 *   segítségével a programodat felhasználó
 *   fejlesztő egy ismétlődő időzítőt tud készíteni.
 *
 * - A createTimer eljárásnak két paramétert kell
 *   fogadnia, ezek:
 *      1) egy eljárás, amit meg kell hívnod ha
 *         az idő lejárt
 *      2) az ismétlődési idő
 *
 * - A createTimer adjon vissza egy olyan
 *   objektumot, amivel egy időzítő:
 *      a) elindítható (start)
 *      b) leállítható (stop)
 *
 * - Az időzítő a start() meghívásakor induljon el,
 *   a stop() meghívásáig fusson, és a megadott
 *   időközönként hívja meg a neki átadott eljárást.
 *
 * Példa:
 *
 *   var myTimer = createTimer(function() {
 *     console.log('fire!');
 *   }, 1000);
 *
 *   myTimer.start();
 */

//
// with setInterval
//
function createTimer(timerFunction, repeatDelay) {
  var intervalID;

  return {
    start: function() {
      intervalID = setInterval(timerFunction, repeatDelay);
    },

    stop: function() {
      clearInterval(intervalID);
    }
  };
}

var myTimer = createTimer(function() {
  console.log('fire!');
}, 1000);

myTimer.start();


//
// with setTimeout
//
function createTimer2(timerFunction, repeatDelay) {
  var timeoutID;

  function runTimerFunction() {
    timerFunction();
    timeoutID = setTimeout(runTimerFunction, repeatDelay);
  }

  return {
    start: function () {
      timeoutID = setTimeout(runTimerFunction, repeatDelay);
    },

    stop: function () {
      clearTimeout(timeoutID);
    }
  };
}

var myTimer2 = createTimer2(function() {
  console.log('fire 222!');
}, 1000);

myTimer2.start();
