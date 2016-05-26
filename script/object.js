// array

var array = [1, 2, 3];

// object1

var vector = {
    x:12,
    y:55,
    children : [
        { x: 12, y: 15 },
        { x: 13, y: 55 },
        { x: 16, y: 45 },
        { x: 33, y: 56 }
    ]
};



var name = 'x';

vector.x === vector[name] === vector['x'] // 12

// foglalt szavak (if, while, var, class, function)
//de ha akarjuk akkor 'if' 'while' stb mert '' az string es a string barmi lehet

console.log(vector.children[1].y);

var arr =  new Array();
var obj = new Object();

console.log(arr);
console.log(obj);

console.log(Object.keys(numValues));

for (var key in numValues) {
    console.log(key + '=' + numValues[key]);
};
