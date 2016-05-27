var fruits = ['Apple', 'Banana'];


var last = fruits[fruits.length - 1];


var newLength= fruits.push('Orange');
console.log(newLength);



// var last = fruits.pop();
last = fruits.pop(last);



var first = fruits.shift();
fruits.push(last);
fruits.unshift(first);
console.log(fruits);

var bananaPos = fruits.indexOf('Banana');
console.log(bananaPos);

console.log(fruits['1'] === fruits[01]);

var fruitsReverse = fruits.reverse();

console.log(fruitsReverse);

var numbers = [5, 1, 3];

console.log(fruits.join('|'));
console.log(numbers.toString());

console.log(fruits.keys());
