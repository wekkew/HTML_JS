// ciklussal ombot aminek minden eleme tomb es a masodik tombon belul egymas utani szamok vannak

var outerArraySize = 2;
var innerArraySize = 5;

var outerArray = new Array();



for (var outerIndex = 0; outerIndex < outerArraySize; outerIndex += 1) {
    outerArray[outerIndex] = new Array();
    for (var innerIndex = 0; innerIndex < innerArraySize; innerIndex += 1) {
        outerArray[outerIndex][innerIndex] = innerArraySize * outerIndex + innerIndex;
    }
}

// szumma

var sum = 0;

for (var n = 0; n < outerArray.length; n +=1) {
    for (var m = 0; m < outerArray[n].length; m += 1){
        sum = sum + outerArray[n][m];
    }
}




console.log(outerArray);

console.log(outerArray.length);
console.log(outerArray[0].length);

console.log(sum);
