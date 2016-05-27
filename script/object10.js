/*
    Feladat: Objektumok 10/1., ujjgyakorlatok

    Az alábbi feladatok mindegyike a lenti office objektumon elvégezhető.

    a) feladat: Írd ki az office objektum összes tulajdonságának nevét
                (elég az első szint, a belső objektumok/tömbök nem kellenek)

    b) feladat: Írd ki az összes munkatárs nevét abc sorrenbe rendezve.

    c) feladat: Számold ki, hogy egy főre mennyi alapterület jut az irodából,
                és írd ki.

    d) feladat: Elküldük Domát, frissítsd a coworkers tömböt, hogy ezt tükrözze.
                Írd ki a tömböt.

    e) feladat: Felvettük Pistit, add hozzá a munkatársakhoz.

    f) feladat: Írd ki azoknak a tulajdonságoknak a nevét és értékét, ahol
                az érték szöveg tipusú.

*/

/*
    Feladat: Objektumok 10/2., összetett

    Statisztikát szeretnénk készíteni az iroda címének karaktereiből, és
    a munkatársak neveinek karaktereiből, mert valaki biztos hisz a
    számmisztikában! Ezért az alábbi a feladat:

    a) feladat: Készíts egy objektumot, amelyben a cím karaktereinek
                előfordulását tárolod.

                Például ha a cím: 'Bercsenyi u.', akkor a kimenet
                {
                    B: 1,
                    e: 2,
                    r: 1,
                    c: 1,
                    s: 1,
                    n: 1,
                    y: 1,
                    i: 1,
                    ' ': 1,
                    u: 1,
                    '.': 1
                }

    b) feladat: A fenti statisztikát hozd létre az összes munkatárs
                nevére összesítve!

*/

var office = {
    address: 'Hungary, Budapest, Bercsenyi str. 21/b. 603.',
    area: {
        value: 100,
        suffix: 'sqm'
    },
    floorLevel: 6,
    coworkers: [ 'Panni', 'Sara', 'Doma', 'Kristof', 'Peti' ],
    terrace: true
}

// 10/1.a
console.log(Object.keys(office));
// 10/1.b
console.log(office.coworkers);
// 10/1.c
console.log('az egy főre jutó terület: ' + (office.area.value / office.coworkers.length) + 'sqm');
// 10.1.d
office.coworkers.splice(office.coworkers.indexOf('Doma'), 1);
console.log(office.coworkers);
// 10/1.e
var newcoworker = 'Pisti';
office.coworkers.push(newcoworker);
// 10/1.f
for (var szoveg in office) {
    if (typeof(office[szoveg]) === 'string') {
        console.log(office[szoveg]);
    }
}
console.log('-----------------------------------------------------------------------------------');
// 10/2.a
console.log(office['address'].toString());

var address = office.address;
var letters = [];
for (var i = 0; i < address.length; i += 1) {
    if (!letters.includes(address[i])) {
        letters.push(address[i]);
    }
}
console.log(letters);
