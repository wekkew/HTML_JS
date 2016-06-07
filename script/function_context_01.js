/**
 * Feladat: Funkció kontextusok 01.
 * Fájlnév: function_context_01.js
 *
 * - Készíts 10 időzítőt a setTimeout segítségével.
 * - Minden időzítő 100 és 600 ezredmásodperc elteltével
 *   fusson le, véletlenszerűen.
 * - Amikor az időzítő elindul, akkor írd ki azt, hogy
 *   az adott időzítőt hanyadikként hoztad létre, illetve
 *   mennyi volt a várakozási idő.
 *
 * Példa kimenet:
 *    Timer #4 invoked after 183 ms.
 *    Timer #1 invoked after 294 ms.
 * ...
 *    Timer #2 invoked after 561 ms.
 */


for (var index = 0; index < 10; index += 1) {
    var time = Math.round(Math.random() * (6000-1000)+1000)

    function startTimer(index, time) {
        setTimeout(function() {
            console.log('Timer #' + index + ' invoked after ' + time + " ms");
        },time);
    };
    startTimer(index, time);

};
