/*
    Feladat: Tömbök 11/1., ujjgyakorlatok

    Az alábbi feladatok mindegyike a lenti numbers tömbön elvégzendő.

    a) feladat: Írd ki a tömb összes elemét fordított sorrendben (az utolsótól az elsőig)

    b) feladat: Írd ki azt az elemet, amelyik a legtöbbször fordul elő, és azt is, hogy hányszor fordul elő

    c) feladat: Írd ki azt a két egymás melletti elemet, amelyek között a legnagyobb a különbség

    d) feladat: Mint a c) feladat, de ha a legnagyobb különbség többször is előfordul, akkor az összes párost írd ki

    e) feladat: Írd ki az összes 10-nél nagyobb elemet

    f) feladat: Írd ki visszafele minden harmadik elemet, az utolsónál kezdve

*/

var numbers = [27, 11, 3, 9, 27, 3, 3, 3, 27, 8, 32, 5, 27, 11];

// 11/1.a) feladat: Írd ki a tömb összes elemét fordított sorrendben (az utolsótól az elsőig)
console.log('11/1.a');
    for ( var i = numbers.length; i > - 1; i -= 1) {
        console.log(numbers[i]);
    }
    console.log(numbers.reverse());

    for (var i = 0; i < numbers.length/2; i += 1) {
        var old = numbers[i];
        numbers[i] = numbers[(numbers.length - 1) - i];
        numbers[numbers.length - 1 - i] = old;
    }
    console.log(numbers);
console.log('-----------------------------------------------------------------------------------');


// 11/1.b) feladat: Írd ki azt az elemet, amelyik a legtöbbször fordul elő, és azt is, hogy hányszor fordul elő
console.log('11/1.b');
    var numbersOneByOne = {};
    for (var i = 0; i < numbers.length; i += 1) {
        if (!numbersOneByOne.hasOwnProperty(numbers[i])) {
            numbersOneByOne[numbers[i]] = 1;
        }
        else {
            numbersOneByOne[numbers[i]] += 1;
        }
    }
    var max = 0;
    var maxArray = [];
    var keys = Object.keys(numbersOneByOne);
    for (var i = 0; i < keys.length; i += 1) {
        if (numbersOneByOne[keys[i]] === max) {
            maxArray.push(keys[i]);
        }
        if (numbersOneByOne[keys[i]] > max) {
            max = numbersOneByOne[keys[i]];
            maxArray[0] = keys[i];
        }
    }
    console.log(maxArray.join(' and ') + ' are the most popular numbers, with a ' + max + ' time incidence.');
console.log('-----------------------------------------------------------------------------------');


// 11/1.c) feladat: Írd ki azt a két egymás melletti elemet, amelyek között a legnagyobb a különbség
console.log('11/1.c');
    var diff = [];
    var diffIndex = [];
    for (var i = 0; i < numbers.length - 1; i += 1) {
        diff[i] = Math.abs(numbers[i] - numbers[i + 1]);
    }

    var maxDiff = diff[0];
    for (var i = 1; i < diff.length - 1; i += 1) {
        if (diff[i] > diff[i - 1]) {
            maxDiff = diff[i];
            diffIndex = [];
            diffIndex[0] = i;
        }
        if (maxDiff === diff[i]) {
            diffIndex.push(i);
        }
    }
    var resultNumber = [];
    for (var i = 0; i < diffIndex.length; i += 2) {
        resultNumber[i] = numbers[diffIndex[i]];
        resultNumber[i+1] = numbers[diffIndex[i]+1];
    }
    console.log('The biggest difference is ' + maxDiff + ' between' + resultNumber.join(' and ') + '.');
console.log('-----------------------------------------------------------------------------------');


// 11/1.d) feladat: Mint a c) feladat, de ha a legnagyobb különbség többször is előfordul, akkor az összes párost írd ki
console.log('11/1.d megoldva a 11/1.c -nél' );




console.log('-----------------------------------------------------------------------------------');


// 11/1.e) feladat: Írd ki az összes 10-nél nagyobb elemet
console.log('11/1.e');
    for (var i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > 9) {
            console.log(numbers[i]);
        }
    }
console.log('-----------------------------------------------------------------------------------');


// 11/1.f) feladat: Írd ki visszafele minden harmadik elemet, az utolsónál kezdve
console.log('11/1.f');
    for (var i = numbers.length - 1; i > -1; i -= 3) {
        console.log(numbers[i]);
    }
