// pallithato parameteres hogy hany veletlen szam legyen benne
// Math.round(Math.random() * 100)

var num = 10;
// how many random number do you need ?
var arr = new Array;

for (var index = 0; index < num; index += 1 ) {
    arr[index] = Math.round(Math.random() * 100);
}

console.log(arr);

// minden masodik elemet irjuk egy uj tombbe

var parosArr = new Array;

for (var paros = 0, index = 0; paros < arr.length; paros += 2, index += 1) {
    parosArr[index] = arr[paros];
}

console.log(parosArr);
