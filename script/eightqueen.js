// chesstable generating
function GenerateArray(size) {
   var myArray = new Array();
   for (var i = 0; i < size; i++) {
       myArray[i] =  Math.round(1 * Math.random());
   }
   return myArray;
}
var chesstable = [[], [], [], [], [], [], [], []];

for (var i = 0; i < chesstable.length; i += 1) {
    chesstable[i] = GenerateArray(8);
}


var queens1 = [
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0]];



// RULES

// sorban

    function rowCheck(table) {

        for (var i = 0; i < table.length; i += 1) {
            if (table[i].indexOf(1) !== table[i].lastIndexOf(1)) {
                console.log('HIBA');
            }
        }

    }
    rowCheck(queens1);
    rowCheck(chesstable);


console.log('-----------------------------------------------------------------------------------');

// oszlopban

    function columnCheck(table) {

        for (var i = 0; i < table.length; i += 1) {
            var isGood = true;
            var oszlop = [];
            if (!oszlop.hasOwnProperty(table[i].indexOf(1))) {
                oszlop [i] = table[i].indexOf(1);
            }
            if (oszlop.hasOwnProperty(table[i].indexOf(1))) {
                console.log('HIBA');
            }
        }

    }

    columnCheck(queens1);
    columnCheck(chesstable);

console.log('-----------------------------------------------------------------------------------');
// átló

    // a kiralynok pozicioja
    //ha tobb van int 8 akkor HIBA
    var queensPosition = {};
    function getAllQueens(table) {

        queensPosition.x = [];
        queensPosition.y = [];
        for (var x = 0; x < table.length; x += 1) {
            for (var y = 0; y < table[x].length; y += 1) {
                if (table[x][y] === 1) {
                    queensPosition.x.push(x);
                    queensPosition.y.push(y);
                }
            }
        }
        if (queensPosition.x.length === 8) {
            console.log(queensPosition);
        }
        else {
            console.log('HIBA');
        }
        return queensPosition;
    }
    getAllQueens(queens1);




    function jobbraleatlo(table, queensPosition){
        for (var i =0; i < queensPosition.x.length; i += 1) {
            var x = queensPosition.x[i];
            var y = queensPosition.y[i];
            if (x > y) {
                var max = x;
            }
            else {
                var max = y;
            }
            for (var n = 1; n < 8-max; n +=1) {
                if (table[x+n][y+n] === 1) {
                    console.log('HIBA');
                }
            }
        }
    }

























//
