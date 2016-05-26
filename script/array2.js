// outerArray tomb ami outerArraySize nyi innerArraySize hosszusagu tombot tartalmaz
// es a benne az elemek generalt veletlenszamok (egesz szam 0-100 kozott)

var outerArraySize = 5;
var innerArraySize = 3;

var outerArray = new Array();



for (var outerIndex = 0; outerIndex < outerArraySize; outerIndex = outerIndex + 1) {
    outerArray[outerIndex] = new Array();
    for (var innerIndex = 0; innerIndex < innerArraySize; innerIndex = innerIndex + 1) {
        outerArray[outerIndex][innerIndex] = Math.round(Math.random() * 100);
    }
}

console.log(outerArray);

// legnagyobb ertek es az indexei !

var max = outerArray[0][0];
var maxOuterIndex = 0;
var maxInnerIndex = 0;

for (var outerIndex = 0; outerIndex < outerArraySize; outerIndex += 1) {
    for (var innerIndex = 0; innerIndex < innerArraySize; innerIndex += 1){
        if (max < outerArray[outerIndex][innerIndex]) {
            max = outerArray[outerIndex][innerIndex];
            maxOuterIndex = outerIndex;
            maxInnerIndex = innerIndex;
        }
    }
}

console.log('legmagasabb ertek: ' + max, 'kulso tomb index: ' + maxOuterIndex, 'belso tomb index: ' + maxInnerIndex);

//
// // egytombos atirat:
//
// var newArray = new Array;
// var maxArray = outerArray[0][0];
//
// for (var outerIndex = 0, n = 0; outerIndex < outerArraySize; outerIndex += 1) {
//     for (var innerIndex = 0; innerIndex < innerArraySize; innerIndex += 1) {
//         newArray[n] = outerArray[outerIndex][innerIndex];
//         n += 1;
//         if (outerArray[outerIndex][innerIndex] > maxArray) {
//             maxArray = outerArray[outerIndex][innerIndex];
//         }
//     }
// }
//
// console.log(newArray);
// console.log(maxArray);
