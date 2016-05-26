// tomb letrehozasa csak a melyseg van megadva es egy tombon belul csak egy tomb van


var arrayDepth = 5;

var resultArray = new Array();
var workingLevel = resultArray;

for (var depth = 0; depth < arrayDepth - 1; depth += 1) {
    workingLevel[0] = new Array();
    workingLevel = workingLevel[0];
}



console.log(resultArray);
