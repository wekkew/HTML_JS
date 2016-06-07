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
// actorMovies is a workarray which contains every data neceserry for the current task.
// it is formed in every excercise.
// for the first one, one needs the actors and the movie titles. for the last two tasks one needs the years too
for (var movieDBIndex = 0; movieDBIndex < movieDB.length; movieDBIndex += 1) {
    var currentMovie = movieDB[movieDBIndex];
    for (var actorIndex = 0; actorIndex < currentMovie.actors.length; actorIndex += 1) {
        var newItem = true;
        for (var actorMoviesIndex = 0; actorMoviesIndex < actorMovies.length; actorMoviesIndex += 1) {
            if (actorMovies[actorMoviesIndex].name === (currentMovie.actors[actorIndex])) {
                actorMovies[actorMoviesIndex].titles.push(currentMovie.title);
                actorMovies[actorMoviesIndex].years.push(currentMovie.year);
                actorMovies[actorMoviesIndex].count += 1;
                newItem = false;
            }
        }
        if (newItem) {
            actorMovies.push({name: currentMovie.actors[actorIndex], titles: [currentMovie.title], years: [currentMovie.year], count: 1});
        }
    }
};
// stolen from the MDN
// a sorting function
actorMovies.sort(function (a, b) {
  if (a.count < b.count) {
    return 1;
  }
  if (a.count > b.count) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
for (var i = 0; i < actorMovies.length; i += 1) {
    console.log(actorMovies[i].name + ' - '+ actorMovies[i].count);
};


console.log('-----------------------------------------------------------------------------------------------------------------------');
console.log('2. Listázd ki azokat a színészpárokat, akik több, mint egy filmben szerepeltek közösen, és írd ki a közös filmjeik címét is.');
console.log('-----------------------------------------------------------------------------------------------------------------------');

// actorList is an auxillary array that contains only the actors names
// it could be easily list from the movieDB and the actorMovies arrays too but this auxillary array makes it much more easy.
var actorList = [];
for (var actorIndex = 0; actorIndex < actorMovies.length; actorIndex += 1) {
    actorList.push(actorMovies[actorIndex].name)
};
// commonMovies is an array that contains every actor pair who has common movies.
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
// until now we have every pair of actor who has a common movie
//azokra vagyunk kivancsiak akiknek tobb is van mint 1 :
//  but for task 2 we only need that ones who have more than one common movies:
for (var commonIndex = 0; commonIndex < commonMovies.length; commonIndex += 1) {
    currentMovie = commonMovies[commonIndex];
    if (currentMovie.movies.length > 1) {
        console.log(currentMovie.actorOne + ' and ' + currentMovie.actorTwo + ' have these movies in common: ' + currentMovie.movies.join(' and '));
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



for (var actorMoviesIndex = 0; actorMoviesIndex < actorMovies.length; actorMoviesIndex += 1) {
    var currentActor = actorMovies[actorMoviesIndex];
    if (currentActor.titles.length > 1) {
        currentActor.years.sort();
        currentActor.hiatus = [];
        for (var yearsIndex = 0; yearsIndex < currentActor.years.length - 1; yearsIndex += 1) {
            currentActor.hiatus.push(currentActor.years[yearsIndex + 1] - currentActor.years[yearsIndex]);
        }
    }
};
var maxHiatus = {name: [], hiatus: 0};
for (var actorMoviesIndex = 0; actorMoviesIndex < actorMovies.length; actorMoviesIndex += 1) {
    currentActor = actorMovies[actorMoviesIndex];
    if (currentActor.count > 1) {
        for (var hiatusIndex = 0; hiatusIndex < currentActor.hiatus.length; hiatusIndex += 1) {
            if (currentActor.hiatus[hiatusIndex] === maxHiatus.hiatus && currentActor.name !== maxHiatus.name[maxHiatus.name.length -1]) {
                maxHiatus.name.push(currentActor.name);
            }
            if (currentActor.hiatus[hiatusIndex] > maxHiatus.hiatus) {
                maxHiatus.hiatus = currentActor.hiatus[hiatusIndex];
                maxHiatus.name = [currentActor.name];
            }
        }
    }
};

console.log(maxHiatus.name.join(' , ') + ' : ' + maxHiatus.hiatus + ' years');

console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------');
console.log('5. Írd ki az összes lehetséges színész párost a movieDB színészeiből');
console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------');
var randomPair = [];

for (var actorIndex = 0; actorIndex < actorList.length - 1; actorIndex += 1) {
    for (var actor2Index = actorIndex + 1; actor2Index < actorList.length; actor2Index += 1) {
        randomPair.push([actorList[actorIndex], actorList[actor2Index]]);
    }
}

console.log(randomPair);



console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------');
console.log('6. Írd ki az összes lehetséges színész triót a movieDB színészeiből');
console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------');

var randomTrio = [];

for (var actorIndex = 0; actorIndex < actorList.length - 2; actorIndex += 1) {
    for (var actor2Index = actorIndex + 1; actor2Index < actorList.length - 1; actor2Index += 1) {
        for (var actor3Index = actor2Index + 1; actor3Index < actorList.length; actor3Index += 1) {
            var actor1 = actorList[actorIndex];
            var actor2 = actorList[actor2Index];
            var actor3 = actorList[actor3Index];
            randomTrio.push([actor1, actor2, actor3]);
        }
    }
};

console.log(randomTrio);


console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------');
console.log('7. gyujtsd ki a szokasos filmadatbazisbol a dijakat, es mellejuk, hogy milyen filmek nyertek azokat el. kb ugyanugy, mint amikor a szineszeket es a filmjeiket gyujtottuk ki.');
console.log('7.bonusz: rendezd is dijankent csokkeno sorrendbe a filmeket (amelyik a legtobbet nyert abbol, az elol');
console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------');

var awardsList = [];

for (var movieDBIndex = 0; movieDBIndex < movieDB.length; movieDBIndex += 1) {
    var currentMovie = movieDB[movieDBIndex];
    for (var awardIndex = 0; awardIndex < currentMovie.awards.length; awardIndex += 1) {
        var currentAward = currentMovie.awards[awardIndex];
        var newItem = true;

        for (var awardsListIndex = 0; awardsListIndex < awardsList.length; awardsListIndex += 1) {

            if (awardsList[awardsListIndex].name === currentAward.name) {
                awardsList[awardIndex].movies.push(currentMovie.title);
                newItem = false;
            }
        }
        if (newItem) {
            awardsList.push({name: currentAward.name, movies: [currentMovie.title]});
        }
    }
};
console.log(awardsList);

awardsList.sort(function (a, b) {

    if ()
})
