var dataObject = {
    name: 'ferenc',
    age: 42,
    etnicity: 'caucasian',
    residence: 'Hungary',
    salary: 123456
};
var allowedFields = ['name', 'age', 'residence'];

var car = {
    mark: 'Ford',
    type: 'Focus',
    version: 'combi',
    engineccm: 2,
    enginegas: 'diesel',
    color: 'white',
    specialmarks: 'colorful dotts',
    passangers: 5
};
var carMainDatas = ['mark', 'type', 'passangers'];


function filter(dataObject, allowedFields) {

    var originalFields = Object.keys(dataObject);

    for (var index = 0; index < originalFields.length - 1; index += 1) {
        var estaenelarrey = originalFields.includes(allowedFields[index]);
        if (!estaenelarrey) {
            delete dataObject[originalFields[index]];
        }
    }
    console.log(dataObject);
};

function filterTwo(dataObject, allowedFields) {

    var originalFields = Object.keys(dataObject);

    for (var index = 0; index < originalFields.length - 1; index += 1) {
        var estaenelarrey = originalFields.indexOf(allowedFields[index]);
        if (estaenelarrey < 0) {
            delete dataObject[originalFields[index]];
        }
    }
    console.log(dataObject);
}


filterTwo(car, carMainDatas);
filter(dataObject, allowedFields);
filter(car, carMainDatas);

// lenyeg hogy lehet hasznalni a for in metodust is akar 

function kiwep1(dataObject, allowedFields) {
    for (var key in dataObject) {
        if (dataObject.hasOwnProperty(key)) {
            if (!allowedFields.includes(key)) {
                delete dataObject[key];
            }
        }
    }
}
