var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 56, 1, 23, 4];
var numbers = [27, 11, 3, 9, 27, 3, 3, 3, 27, 8, 32, 5, 27, 11];

function average(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i += 1) {
        sum += array[i];
    };
    return sum/array.length;
};


var szoveg = 'dog';
var tomb = [1, 2, 3, 4];
var szam = 13224;
var objektum = {objektum: 5, nemtommi: 3};

function flip(input) {

    if (typeof input === 'object' && !Array.isArray(input)) {
        return 'Error: input type should not be Object.'
    }
    else {
        input = String(input);
        var flipstring = '';
        for (var i=input.length-1; i>-1; i-=1) {
            flipstring += input.charAt(i);
        }
    }

    return flipstring;
}
console.log(flip(szam));
console.log(flip(szoveg));
console.log(flip(tomb));
console.log(flip(objektum));

function isPrime(num) {
    num = Math.abs(num);
    if (num === 0 || isNaN(num)) {
        return false;
    }
    for (var i=2; i < num; i+=1) {
        if (num % i === 0){
            return false;
        }
    }

    return true;
}
console.log(isPrime(1181));


function isPalindrom(input) {
    if (typeof input === 'object' && !Array.isArray(input)) {
        return 'Error: input type should not be Object.'
    }
    else {
        input = String(input);
        var flipstring = '';
        for (var i=input.length-1; i>-1; i-=1) {
            flipstring += input.charAt(i);
        }
        if (input === flipstring){
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(isPalindrom('kiserekmentenlapsikolenodavanabanarabjajajbaranabanavadonelokispalnetnemkeresik'));


function letterCombinations(input) {
    if (typeof input === 'object' && !Array.isArray(input)) {
        return 'Error: input type should not be Object.'
    }
    else {
        input = String(input);
        var result = [];
        for (var stringIndex1 = 0; stringIndex1 < input.length+1; stringIndex1 += 1) {
            for (var stringIndex2 = stringIndex1 + 1; stringIndex2 < input.length+1; stringIndex2 += 1) {
                result.push(input.substring(stringIndex1, stringIndex2));
            }
        }
    }

    return result;
};
console.log(letterCombinations('alfaromeo').sort().join(', '));


function letterAlphabeticalOrdered(input) {
    if (typeof input === 'object' && !Array.isArray(input)) {
        return 'Error: input type should not be Object.'
    }
    else {
        input = String(input);
        result = [];
        for (var stringIndex = 0; stringIndex < input.length; stringIndex += 1) {
            result.push(input[stringIndex]);
        }
        result.sort();
    }

    return result.join('');
};
console.log(letterAlphabeticalOrdered('alma'));


var input = 'lorem ipsum dolor sunt';

var indexOf = [0];
var newIndex;
while (newIndex !== input.lastIndexOf(' ')) {
    newIndex = input.indexOf(' ', newIndex+1);
    indexOf.push(input.indexOf(' ', newIndex)+1);
}

console.log(indexOf);
var result = [];
for (var stringIndex = 0; stringIndex < input.length; stringIndex += 1) {
    result.push(input[stringIndex]);

}
for (var indexOfIndex = 0; indexOfIndex < indexOf.length; indexOfIndex += 1){
    result[indexOf[indexOfIndex]] = result[indexOf[indexOfIndex]].toUpperCase();
}
console.log(result.join(''));




























/**/
