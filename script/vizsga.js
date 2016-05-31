/**
 * Vizsgafeladat 1.
 * JavaScript objektumok és struktúrák
 *
 * Adott egy filmadatbázis tömb.
 * A tömbben az alábbi struktúra szerint felírható objektumok találhatók:
 *
 *      {
 *          title: 'The Matrix',
 *          year: 2001,
 *          actors: [
 *              'Brad Pitt',
 *              'Angelina Jolie'
 *          ],
 *          awards: [
 *              {
 *                  name: 'Academy Awards',
 *                  nominee: 4,
 *                  won: 3
 *              }
 *          ]
 *      }
 *
 * Feladatok:
 *
 *      1. Listázd ki a színészeket, a nevük mellé írva, hogy hány filmben
 *         szerepeltek, e szerint csökkenő sorrendben (azaz legelőre azt,
 *         aki a legtöbb filmben).
 *
 *      2. Listázd ki azokat a színészpárokat, akik több, mint egy filmben
 *         szerepeltek közösen, és írd ki a közös filmjeik címét is.
 *
 *      3. Listázd ki azokat a filmeket és készítésük évüket, amelyek
 *         Oscar-jelöléseik több mit felét meg is nyerték.
 *
 *      4. Írd ki annak a színésznek a nevét, akinek a legtöbb idő
 *         (legnagyobb szünet) telt el két filmje között (aki csak
 *         egy filmben szerepel, az nem számít).
 *
 * Megjegyzések:
 *
 *      a) A filmek adatbázisát nektek kell felépítenetek.
 *
 *      b) Figyeljük majd a kód helyességét, a megoldás eleganciáját,
 *         a forráskód olvashatóságát, a változók elnevezését,
 *         felesleges változók használatát, a megoldással töltött
 *         idő mennyiségét is!
 *
 *      c) Az MDN-en található, Array, String és egyéb objektumok
 *         beépített funkcióit használhatjátok, de máshonnan származó
 *         megoldásokat nem.
 *
 *      d) A feladat megoldása közben egymásnak nem segíthettek.
 *
 */

var movieDB =[
            {title: 'The Matrix', year: 2001, actors: ['Keanu Reeves', 'Laurence Fishburne'], awards: [{name: 'Academy Awards',nominee: 4, won: 4}]},
            {title: 'The Godfather', year: 1972, actors: ['Marlon Brando', 'Al Pacino'], awards: [{name: 'Academy Awards',nominee: 8, won: 4}]},
            {title: 'Apocalypse Now', year: 1979, actors: ['Marlon Brando', 'Martin Sheen'], awards: [{name: 'Academy Awards',nominee: 6, won: 2}]},
            {title: 'The Dark Knight', year: 2008, actors: ['Christian Bale', 'Heath Ledger'], awards: [{name: 'Academy Awards',nominee: 6, won: 2}]},
            {title: 'Fight Club', year: 1999, actors: ['Brad Pitt', 'Edward Nolton'], awards: [{name: 'Academy Awards',nominee: 1, won: 0}]},
            {title: '47 Ronin', year: 2013, actors: ['Keanu Reeves', 'Hiroyuki Sanada'], awards: [{name: 'Academy Awards',nominee: 0, won: 0}]},
            {title: 'Mr. & Mrs. Smith', year: 2005, actors: ['Brad Pitt', 'Angelina Jolie'], awards: [{name: 'Academy Awards',nominee: 1, won: 0}]},
            {title: 'American Psycho', year: 2000, actors: ['Christian Bale', 'Justin Theroux'], awards: [{name: 'Academy Awards',nominee: 0, won: 0}]},
            {title: 'In Bruges', year: 2008, actors: ['Colin Farell', 'Brendan Gleeson'], awards: [{name: 'Academy Awards',nominee: 1, won: 0}]},
            {title: 'By The Sea', year: 2015, actors: ['Brad Pitt', 'Angelina Jolie'], awards: [{name: 'Academy Awards',nominee: 0, won: 0}]},
            {title: 'The Matrix Reloaded', year: 2003, actors: ['Keanu Reeves', 'Laurence Fishburne'], awards: [{name: 'Academy Awards',nominee: 0, won: 0}]},
            {title: 'The Matrix Revolution', year: 2003, actors: ['Keanu Reeves', 'Laurence Fishburne'], awards: [{name: 'Academy Awards',nominee: 0, won: 0}]},
            {title: 'A Mighty Heart', year: 2007, actors: ['Angelina Jolie', 'Brad Pitt'], awards: [{name: 'Academy Awards',nominee: 0, won: 0}]}

         ];

// 1. Listázd ki a színészeket, a nevük mellé írva, hogy hány filmben szerepeltek, e szerint csökkenő sorrendben (azaz legelőre azt, aki a legtöbb filmben).
console.log('----------------------------------------------------------------------------------------------------------------------------------------------------------');
console.log('1. Listázd ki a színészeket, a nevük mellé írva, hogy hány filmben szerepeltek, e szerint csökkenő sorrendben (azaz legelőre azt, aki a legtöbb filmben).');
console.log('----------------------------------------------------------------------------------------------------------------------------------------------------------');

var actorFilm = [];
for (var i = 0; i < movieDB.length; i += 1) {
    for (var n = 0; n < movieDB[i].actors.length; n += 1) {
        if (actorFilm.length > 0) {
            var newItem = true;
            for (var a = 0; a < actorFilm.length; a += 1) {
                if (actorFilm[a].name === (movieDB[i].actors[n])) {
                    actorFilm[a].films += 1;
                    newItem = false;
                }
            }
            if (newItem) {
                actorFilm.push({name: movieDB[i].actors[n], films: 1});
            }
        }
        else {
            actorFilm.push({name: movieDB[i].actors[n], films: 1});
        }
    }
};
// stolen from the MDN
actorFilm.sort(function (a, b) {
  if (a.films < b.films) {
    return 1;
  }
  if (a.films > b.films) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
for (var i = 0; i < actorFilm.length; i += 1) {
    console.log(actorFilm[i].name + ' - '+ actorFilm[i].films);
};


// 2. Listázd ki azokat a színészpárokat, akik több, mint egy filmben szerepeltek közösen, és írd ki a közös filmjeik címét is.
console.log('-----------------------------------------------------------------------------------------------------------------------');
console.log('2. Listázd ki azokat a színészpárokat, akik több, mint egy filmben szerepeltek közösen, és írd ki a közös filmjeik címét is.');
console.log('-----------------------------------------------------------------------------------------------------------------------');


var actorList = [];
for (var i = 0; i < movieDB.length; i += 1){
    for (var n = 0; n < movieDB[i].actors.length; n += 1){
        if (actorList.indexOf(movieDB[i].actors[n]) === -1) {
            actorList.push(movieDB[i].actors[n]);
        }
    }
};
var commonFilms = [];
for (var i = 0; i < actorList.length; i += 1) {
    for (var n = 0 + i; n < actorList.length; n +=1 ) {
        var actor1 = actorList[i];
        var actor2 = actorList[n];
        if (i !== n) {
            for (var index = 0; index < movieDB.length; index += 1) {
                if (movieDB[index].actors.indexOf(actor1) !== -1 && movieDB[index].actors.indexOf(actor2) !== -1) {
                    if (commonFilms.length > 0) {
                        var length = commonFilms.length-1;
                        if (commonFilms[length][0] === actor1 && commonFilms[length][1] === actor2) {
                            commonFilms[length].push(movieDB[index].title);
                        }
                        else {
                            commonFilms.push([actor1, actor2, movieDB[index].title]);
                        }
                    }
                    else {
                        commonFilms.push([actor1, actor2, movieDB[index].title]);
                    }
                }
            }
        }
    }
};
//idaig osszegyultek azok a szineszek akiknek van kozos filmjuk + a filmcim
//azokra vagyunk kivancsiak akiknek tobb is van mint 1 :
for (var i = 0; i < commonFilms.length; i += 1) {
    if (commonFilms[i].length > 3) {
        console.log(commonFilms[i].join(' '));
    }
};


// 3. Listázd ki azokat a filmeket és készítésük évüket, amelyek Oscar-jelöléseik több mit felét meg is nyerték.
console.log('-------------------------------------------------------------------------------------------------------------');
console.log('3. Listázd ki azokat a filmeket és készítésük évüket, amelyek Oscar-jelöléseik több mit felét meg is nyerték.');
console.log('-------------------------------------------------------------------------------------------------------------');

for (var i = 0; i < movieDB.length; i += 1) {
    var nom = movieDB[i].awards[0].nominee;
    var won = movieDB[i].awards[0].won;
    if (won/nom >= 0.5) {
        console.log(movieDB[i].title + ' in ' + movieDB[i].year + ' : ' + movieDB[i].awards[0].won + '/' + movieDB[i].awards[0].niminee);
    }
};


// 4. Írd ki annak a színésznek a nevét, akinek a legtöbb idő (legnagyobb szünet) telt el két filmje között (aki csak egy filmben szerepel, az nem számít).
console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------');
console.log('4. Írd ki annak a színésznek a nevét, akinek a legtöbb idő (legnagyobb szünet) telt el két filmje között (aki csak egy filmben szerepel, az nem számít).');
console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------');

var multiActor = [];
for (var i = 0; i < actorFilm.length; i += 1) {
    if (actorFilm[i].films > 1) {
        multiActor.push(actorFilm[i].name);
    }
};
var actorYears =[];
for (var i = 0; i < multiActor.length; i += 1) {
    for (var n = 0; n < movieDB.length; n += 1){
        if (movieDB[n].actors.indexOf(multiActor[i]) !== -1) {
            if (actorYears.length > 0) {
                var newItem = true;
                for (var a = 0; a < actorYears.length; a += 1) {
                    if (actorYears[a].indexOf(multiActor[i]) !== -1) {
                        actorYears[a].push(movieDB[n].year);
                        newItem = false;
                    }
                }
                if (newItem) {
                    actorYears.push([multiActor[i], movieDB[n].year]);
                }
            }
            else {
                actorYears.push([multiActor[i], movieDB[n].year]);
            }
        }
    }
};
var min = [];
var max = [];
for (var i = 0; i < actorYears.length; i += 1) {
    min[i] = actorYears[i][1];
    max[i] = actorYears[i][1];
    for (var n = 1; n < actorYears[i].length; n += 1) {
        if (actorYears[i][n] < min[i]) {
            min[i] = actorYears[i][n];
        }
        if (actorYears[i][n] > max[i]) {
            max[i] = actorYears[i][n];
        }
    }
};
var diffYear = [];
for (var i = 0; i < min.length; i += 1) {
    diffYear[i] = max[i] - min[i];
};
var maxDiff = diffYear[0];
for (var i = 0; i < diffYear.length; i += 1) {
    if (diffYear[i] > maxDiff) {
        maxDiff = diffYear[i];
    }
};
console.log(actorYears[diffYear.indexOf(maxDiff)][0] + ' has ' + maxDiff + ' years');
