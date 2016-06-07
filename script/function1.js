var arr = [2,1,4,8,5,4,51,87];

arr.sort(function (a, b){
    if (a === b) {
        return 0;
    }

    return a > b ? 1 : -1;
});

console.log(arr);


arr.forEach(function (currentValue){
        console.log(currentValue);
});


function forEach(inputArray, callback){
    for (var index = 0; index < inputArray.length; index += 1) {
        var currentElement = inputArray[index];
        callback(currentElement, index);
    }
};

forEach(arr, function(currentElement, index) {
    console.log(index + ': ' + currentElement);
});


var MyMath = {

    abs: function(a) {
        if (a < 0) {
            a = -a;
        }

        return a;
    },

    max: function(a, b) {
        return (a >= b ? a : b);
    },

    min: function(a, b) {
        return (a <= b ? a : b);
    }

};


console.log(MyMath.abs(-45));
console.log(MyMath.max(4, -3));
console.log(MyMath.min(4, -3));

var exercises = [

    function () {
        console.log('Exercise 0');
    },

    function () {
        console.log('Exercise 1');
    },
];

exercises.forEach(function (exercise) {
    exercise();
});


console.log(typeof arr);


function makePoint(startX, startY) {

    var pointData = {
        x: startX, y: startY
    }

    return {
        setX: function(x) {
            pointData.x = x;
        },

        setY: function(y) {
            pointData.y = y;
        },

        log: function() {
            console.log(pointData);
        },

        setCoordinate: function(x, y) {
            pointData.x = x;
            pointData.y = y;
        },
    };

};

var point1 = makePoint();



setTimeout(function () {

    console.log('Done');
}, 5000);
