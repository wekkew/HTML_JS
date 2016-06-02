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
             {title: 'A Mighty Heart', year: 2007, actors: ['Angelina Jolie', 'Brad Pitt'], awards: [{name: 'Academy Awards',nominee: 0, won: 0}]},
             {title: 'The New', year: 2009, actors: ['Johnny Depp', 'Scarlett Johanson', 'Angelina Jolie', 'Brad Pitt'], awards: [{name: 'Academy Awards', nominee: 4, won: 3}]},
             {title: 'Titanic', year: 1997, actors: ['Leonardo DiCaprio', 'Kate Winslet'], awards: [{name: 'Academy Awards', nominee: 14, won: 11}, {name: 'British Academy Film Awards', nominee: 10, won: 0}, {name: 'Golden Globe', nominee: 8, won: 4}]},
             {title: 'Revolutionary Road', year: 2008, actors: ['Leonardo DiCaprio', 'Kate Winslet'], awards: [{name: 'Academy Awards', nominee: 3, won: 0}, {name: 'British Academy Film Awards', nominee: 4, won: 0}, {name: 'Golden Globe', nominee: 4, won: 1}]},
             {title: 'The Departed', year: 2006, actors: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'], awards: [{name: 'Academy Awards', nominee: 5, won: 4}, {name: 'Golden Globe', nominee: 5, won: 1}]},
             {title: 'As Good as It Gets', year: 1997, actors: ['Jack Nicholson', 'Helen Hunt'], awards: [{name: 'Academy Awards', nominee: 7, won: 2}, {name: 'Golden Globe', nominee: 7, won: 4}]},
             {title: 'Heartburn', year: 1986, actors: ['Jack Nicholson', 'Meryl Streep'], awards: []},
          ];


console.log('----------------------------------------------------------------------------------------------------------------------------------------------------------');
console.log('1. Listázd ki a színészeket, a nevük mellé írva, hogy hány filmben szerepeltek, e szerint csökkenő sorrendben (azaz legelőre azt, aki a legtöbb filmben).');
console.log('----------------------------------------------------------------------------------------------------------------------------------------------------------');

var actorMovies = [];
for (var i = 0; i < movieDB.length; i += 1) {
    for (var n = 0; n < movieDB[i].actors.length; n += 1) {
        if (actorMovies.length > 0) {
            var newItem = true;
            for (var a = 0; a < actorMovies.length; a += 1) {
                if (actorMovies[a].name === (movieDB[i].actors[n])) {
                    actorMovies[a].films += 1;
                    newItem = false;
                }
            }
            if (newItem) {
                actorMovies.push({name: movieDB[i].actors[n], films: 1});
            }
        }
        else {
            actorMovies.push({name: movieDB[i].actors[n], films: 1});
        }
    }
};
// stolen from the MDN
actorMovies.sort(function (a, b) {
  if (a.films < b.films) {
    return 1;
  }
  if (a.films > b.films) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
for (var i = 0; i < actorMovies.length; i += 1) {
    console.log(actorMovies[i].name + ' - '+ actorMovies[i].films);
};



console.log('-----------------------------------------------------------------------------------------------------------------------');
console.log('2. Listázd ki azokat a színészpárokat, akik több, mint egy filmben szerepeltek közösen, és írd ki a közös filmjeik címét is.');
console.log('-----------------------------------------------------------------------------------------------------------------------');


var actorList = [];
for (var actorIndex = 0; actorIndex < actorMovies.length; actorIndex += 1) {
    actorList.push(actorMovies[actorIndex].name)
};

var commonMovies = [];
for (var actorIndex = 0; actorIndex < actorList.length; actorIndex += 1) {
    for (var actor2Index = actorIndex+1; actor2Index < actorList.length; actor2Index +=1 ) {
        var actor1 = actorList[actorIndex];
        var actor2 = actorList[actor2Index];

        for (var movieDBIndex = 0; movieDBIndex < movieDB.length; movieDBIndex += 1) {
            var currentMovie = movieDB[movieDBIndex];
            if (currentMovie.actors.indexOf(actor1) !== -1 && currentMovie.actors.indexOf(actor2) !== -1) {
                var pusHappened = false;

                for (var commonIndex = 0; commonIndex < commonMovies.length; commonIndex += 1) {
                    if (commonMovies[commonIndex].actorOne === actor1 && commonMovies[commonIndex].actorTwo === actor2) {
                        commonMovies[commonIndex].movies.push(currentMovie.title);
                        pusHappened = true;
                    }
                }
                if (!pusHappened) {
                    commonMovies.push({actorOne: actor1, actorTwo: actor2, movies: [currentMovie.title]});
                }
            }
        }
    }
};
//idaig osszegyultek azok a szineszek akiknek van kozos filmjuk + a filmcim
//azokra vagyunk kivancsiak akiknek tobb is van mint 1 :
for (var commonIndex = 0; commonIndex < commonMovies.length; commonIndex += 1) {
    currentMovie = commonMovies[commonIndex];
    if (currentMovie.movies.length > 1) {
        console.log(currentMovie.actorOne + ' and ' + currentMovie.actorTwo + ' have these films in common: ' + currentMovie.movies.join(' and '));
    }
};



console.log('-------------------------------------------------------------------------------------------------------------');
console.log('3. Listázd ki azokat a filmeket és készítésük évüket, amelyek Oscar-jelöléseik több mit felét meg is nyerték.');
console.log('-------------------------------------------------------------------------------------------------------------');

for (var movieDBIndex = 0; movieDBIndex < movieDB.length; movieDBIndex += 1) {
    var currentMovie = movieDB[movieDBIndex];

    for (var awardIndex = 0; awardIndex < currentMovie.awards.length; awardIndex += 1) {
        var currentAwards = currentMovie.awards[awardIndex];
        if (currentAwards.name === 'Academy Awards') {
            var oscarNom = currentAwards.nominee;
            var oscarWon = currentAwards.won;
            if (oscarWon/oscarNom > 0.5) {
                console.log(movieDB[movieDBIndex].title + ' ' + movieDB[movieDBIndex].year);
            }
        }
    }
};



console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------');
console.log('4. Írd ki annak a színésznek a nevét, akinek a legtöbb idő (legnagyobb szünet) telt el két filmje között (aki csak egy filmben szerepel, az nem számít).');
console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------');

var multiActor = [];
for (var i = 0; i < actorMovies.length; i += 1) {
    if (actorMovies[i].films > 1) {
        multiActor.push(actorMovies[i].name);
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
