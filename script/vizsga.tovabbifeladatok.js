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
            {title: 'MR and MS Smith', year: 1990, actors: ['Johnny Depp', 'Scarlett Johanson', 'Brad Pitt', 'Bruce Willis'], awards:[{name: 'Academy Awards', nominee: 4, won: 3}]},
            {title: 'Titanic', year: 1997, actors: ['Leonardo DiCaprio', 'Kate Winslet'], awards: [{name: 'Academy Awards', nominee: 14, won: 11}, {name: 'British Academy Film Awards', nominee: 10, won: 0}, {name: 'Golden Globe', nominee: 8, won: 4}]},
            {title: 'Revolutionary Road', year: 2008, actors: ['Leonardo DiCaprio', 'Kate Winslet'], awards: [{name: 'Academy Awards', nominee: 3, won: 0}, {name: 'British Academy Film Awards', nominee: 4, won: 0}, {name: 'Golden Globe', nominee: 4, won: 1}]},
            {title: 'The Departed', year: 2006, actors: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'], awards: [{name: 'Academy Awards', nominee: 5, won: 4}, {name: 'Golden Globe', nominee: 5, won: 1}]},
            {title: 'As Good as It Gets', year: 1997, actors: ['Jack Nicholson', 'Helen Hunt'], awards: [{name: 'Academy Awards', nominee: 7, won: 2}, {name: 'Golden Globe', nominee: 7, won: 4}]},
            {title: 'Heartburn', year: 1986, actors: ['Jack Nicholson', 'Meryl Streep'], awards: []},
         ];



/*
1.  a) Melyik évben volt a legtöbb díjat nyert film, és mi volt az? Példa kimenet: 1997 - Titanic - 32 díj
    b) Melyik évben készítették a legkevesebb filmet, melyikben a legtöbbet? Példa kimenet: Legkevesebb: 2000, 3 film, legtöbb: 2003, 7 film
    c) Listázd évre lebontva (és ez alapján sorba rendezve) az Oscar - jelölt filmeket! Példa kimenet: 1997 - Titanic, Izefilm, Bigyofilm. 1999 - American Beauty, The fight Club, The Sixth Sense. 2000 - Gladiator, X-men. satöbbisatöbbi
*/

// functions
function findMaxes(array, key) {
    var numbers = [];
    for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex += 1) {
        numbers.push(array[arrayIndex][key]);
    }
    var max = 0;
    for (var numbersIndex = 0; numbersIndex < numbers.length; numbersIndex += 1) {
        var currentNumber = numbers[numbersIndex];
        if (currentNumber > max) {
            max = currentNumber;
        }
    }

    return max;
};

function findMins(array, key) {
    var numbers = [];
    for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex += 1) {
        numbers.push(array[arrayIndex][key]);
    }
    var min = Infinity;
    for (var numbersIndex = 0; numbersIndex < numbers.length; numbersIndex += 1) {
        var currentNumber = numbers[numbersIndex];
        if (currentNumber < min) {
            min = currentNumber;
        }
    }

    return min;
};

// for the first three exercises(1a-c) one needs only the titles and the producing years and the awards, so an array(movieYears) is made for this:

var movieYears = [];                                                            //an array which contains all necessary informations for the exercises
var yearsCount = [];                                                            // an array which contains all the years when film was produced
for (var movieDBIndex = 0; movieDBIndex < movieDB.length; movieDBIndex +=1) {
    var currentMovie = movieDB[movieDBIndex].title;                             // the title of the actual movie
    var currentYear = movieDB[movieDBIndex].year;                               // the production year of the actual movie
    var currentAwards = movieDB[movieDBIndex].awards;                           // the awards of the actual movie
    var currentWonSum = 0;
    var currentNominetedSum = 0;
    for (var awardIndex = 0; awardIndex < currentAwards.length; awardIndex += 1) {
        currentWonSum += currentAwards[awardIndex].won;
        currentNominetedSum += currentAwards[awardIndex].nominee;
    }
    movieYears.push({title: currentMovie, year: currentYear, wonAwards: currentWonSum, nominetedAwards: currentNominetedSum});

    var hasThatYear = false;
    for (var yearsIndex = 0; yearsIndex < yearsCount.length; yearsIndex +=1 ) {
        var currentYC = yearsCount[yearsIndex];                                 // the actual element of the yearsCount Array
        if (currentYC.years === currentYear) {
            currentYC.movies.push(currentMovie);
            currentYC.count += 1;
            hasThatYear = true;
        }
    }
    if (!hasThatYear) {
        yearsCount.push({years: currentYear, movies: [currentMovie], count: 1})
    }
};

yearsCount.sort(function (a, b) {
  if (a.count > b.count) {
    return -1;
  }
  if (a.count < b.count) {
    return 1;
  }
  // a must be equal to b
  return 0;
 });

// yearsCount is an array with sorted objects in the order of how many movies was produced in that particular year
//


//1.  a) Melyik évben volt a legtöbb díjat nyert film, és mi volt az? Példa kimenet: 1997 - Titanic - 32 díj

for (var yearsIndex = 0; yearsIndex < movieYears.length; yearsIndex += 1) {
    if (movieYears[yearsIndex].wonAwards === findMaxes(movieYears, 'wonAwards')) {
        console.log(movieYears[yearsIndex].year + ' - ' + movieYears[yearsIndex].title + ' - ' + findMaxes(movieYears, 'wonAwards') + ' díj');
    }
};

// b) Melyik évben készítették a legkevesebb filmet, melyikben a legtöbbet? Példa kimenet: Legkevesebb: 2000, 3 film, legtöbb: 2003, 7 film

var minMovie = findMins(yearsCount, 'count');
var maxMovie = findMaxes(yearsCount, 'count');
for (var yearsIndex = 0; yearsIndex < yearsCount.length; yearsIndex += 1) {
    var currentYear = yearsCount[yearsIndex];
    if (currentYear.count === minMovie) {
        console.log(yearsCount[yearsIndex].years + ' , ' + minMovie + ' film');
    }
    if (currentYear.count === maxMovie) {
        console.log(yearsCount[yearsIndex].years + ' , ' + maxMovie + ' film');
    }
};

// c) Listázd évre lebontva (és ez alapján sorba rendezve) az Oscar - jelölt filmeket! Példa kimenet: 1997 - Titanic, Izefilm, Bigyofilm. 1999 - American Beauty, The fight Club, The Sixth Sense. 2000 - Gladiator, X-men. satöbbisatöbbi
var oscarMovies = [];
for (var movieDBIndex = 0; movieDBIndex < movieDB.length; movieDBIndex += 1) {
    for (var awardIndex = 0; awardIndex < movieDB[movieDBIndex].awards.length; awardIndex += 1) {
        if (movieDB[movieDBIndex].awards[awardIndex].name === 'Academy Awards' && movieDB[movieDBIndex].awards[awardIndex].nominee > 0) {
            var wasonthelist = false;
            for (var oscarIndex = 0; oscarIndex < oscarMovies.length; oscarIndex += 1) {
                if (oscarMovies[oscarIndex].year === movieDB[movieDBIndex].year) {
                    oscarMovies[oscarIndex].movies.push(movieDB[movieDBIndex].title);
                    wasonthelist = true;
                }
            }
            if (!wasonthelist) {
                oscarMovies.push({year: movieDB[movieDBIndex].year, movies: [movieDB[movieDBIndex].title]});
            }
        }
    }
};
oscarMovies.sort(function (a, b) {
    if (a.year < b.year) {
        return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    // a must be equal to b
    return 0;
    });
for (var oscarIndex = 0; oscarIndex < oscarMovies.length; oscarIndex += 1) {
    console.log(oscarMovies[oscarIndex].year + ' - ' + oscarMovies[oscarIndex].movies.join(', '));
};
