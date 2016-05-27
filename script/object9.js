/*

    Feladat: Objektumok 9.
    Fájlnév: object9.js

    Ebben a feladatban három előre definiált eljárást
    találtok.

    Az addPoint(x, y[, radius]) (58-as sor) az oldalon
    létrehoz egy HTML elemet, ami egy fekete körként
    jelenik meg a megadott x,y koordinátákon. Ez az
    eljárás bárhányszor meghívható, minden hivásával
    egy új pont fog felkerülni az oldalra.

    A setBounds(x, y, width, height) (83-as sor) eljárás
    egy előre meghatározott vékony kerettel rendelkező téglalap
    pozícióját és méretét állítja. A téglalap automatikusan
    megjelenik, és csak egy létezik belőle, tehát többszöri
    hívásra az eljárás át fogja helyezni és méretezni a
    téglalapot.

    A harmadik eljárás az onClick(event) (119-es sor). Ezt
    az eljárást a böngésző akkor hívja meg, ha az egérrel
    a HTML oldalunk egy pontjára kattintunk. Az eljárás
    az event nevű paraméterében egy olyan objektumot kap,
    amiben a clientX és clientY tulajdonság tartalmazza
    azt a koordinátát, ahol a kattintás történt.

    Minden eljárás felett megtalálhatod az adott eljárás
    dokumentációját. Értelmezd a dokumentációt, az
    eljárások célját, a várt paraméterek neveit, típusait.

    Az onClick eljárás törzsét neked kell megírnod, de a
    többi eljáráson nem módosíthatsz.

    A feladat: készíts egy points tömböt, amiben eltárolod
    a kattintások koordinátáit. A kattintás helyén jeleníts
    meg egy pöttyöt.

    Ha legalább két pont megjelent már az oldalon, akkor
    a setBounds eljárással rajzold körbe a pontok halmazát,
    és ezt a körberajzolást tartsd mindig aktuálisan.

    A képernyő koordinátarendszerének origója a bal felső
    sarokban van, a koordináták jobbra és lefelé növekednek.

    A forráskódnak szépen olvashatónak, formázottnak kell
    lennie, a használt változnaknak érthető angol elnevezéseket
    kell adnotok. Használjatok megjegyzéseket az olvashatóság
    segítésére és a megoldás dokumentálására.

 */

/**
 * Adds a visible point to the document
 *
 * @param {number} x      The x coordinate of the point
 * @param {number} y      The y coordinate of the point
 * @param {number} radius The radius of the point (optional, default is 10px)
 */
function addPoint(x, y, radius) {
    radius = Number(radius || 10)
    var pointElement = document.createElement('div')
    pointElement.setAttribute('style', [
            'position: absolute',
            'left: ' + (x - radius / 2) + 'px',
            'top: ' + (y - radius / 2) + 'px',
            'width: ' + radius + 'px',
            'height: ' + radius + 'px',
            'background: rgba(0, 0, 0, 0.75)',
            'border-radius: 50%'
        ].join(';')
    )
    document.body.appendChild(pointElement)
}

/**
 * Moves the bounding rectangle to a given position and
 * resizes it to a requested size
 *
 * @param {number} x      The x coordinate of the rectangle
 * @param {number} y      The y coordinate of the rectangle
 * @param {number} width  The width of the rectangle
 * @param {number} height The height of the rectangle
 */
function setBounds(x, y, width, height) {
    var boundsElement = document.getElementById('bounds')
    if (!boundsElement) {
        boundsElement = document.createElement('div')
        boundsElement.setAttribute('id', 'bounds')
        document.body.appendChild(boundsElement)
    }
    boundsElement.setAttribute('style', [
            'position: absolute',
            'z-index: 1',
            'border: solid 1px rgba(196, 0, 0, 0.75)',
            'left: ' + Number(x) + 'px',
            'top:' + Number(y) + 'px',
            'width: ' + (Number(width) - 2) + 'px',
            'height: ' + (Number(height) - 2) + 'px'
        ].join(';')
    )
}

// document.addEventListener('click', onClick)

/*
 * ---------------------------------------------------------------
 */
var points = []
var bounds ={
            min: {x: undefined, y: undefined},
            max: {x: undefined, y: undefined}
            }

/**
 * This method will be called every time the user clicks on the page
 *
 * @param  {object}  event  The event object.
 *                          Check the MDN reference for field documentation.
 */

function onClick(event) {

    points.push({ x: event.clientX, y: event.clientY});
    if (points.length > 1) {
        for (var index = 0; index < points.length; index += 1) {
            if (points[index].x < bounds.min.x || typeof bounds.min.x === 'undefined') {
                bounds.min.x = points[index].x;
            }
            if (points[index].y < bounds.min.y || typeof bounds.min.y === 'undefined') {
                bounds.min.y = points[index].y;
            }
            if (points[index].x > bounds.max.x || typeof bounds.max.x === 'undefined') {
                bounds.max.x = points[index].x;
            }
            if (points[index].y > bounds.max.y || typeof bounds.max.y === 'undefined') {
                bounds.max.y = points[index].y;
            }
        }
        var width = bounds.max.x - bounds.min.x;
        var height = bounds.max.y - bounds.min.y;
        // console.log(bounds);
        setBounds(bounds.min.x, bounds.min.y, width, height);
    }

    // addPoint(event.clientX, event.clientY, Math.round(timeMouse / 10));
    addPoint(event.clientX, event.clientY);
}

/*
    feldat: objectumok9.0.1
    fájlnév: object9.js
    cél hogy nőjön a pont radiusa a kattintás hosszával

var timeMouse;

document.addEventListener('mousedown', mouseDown);
var downMouse;
function mouseDown(event) {
    downMouse = Date.now();
}

document.addEventListener('mouseup', mouseUp);
var upMouse;
function mouseUp(event) {
    upMouse = Date.now();
    timeMouse = upMouse - downMouse;
}

*/


document.addEventListener('mousedown', mouseDown);
var isMouseDown = false;

function mouseDown(event) {
    isMouseDown = true;
    addPoint(event.clientX, event.clientY);
    points.push({ x: event.clientX, y: event.clientY});
    mouseMove(event);

}

document.addEventListener('mouseup', mouseUp);

function mouseUp(event) {
    isMouseDown = false;
}

document.addEventListener('mousemove', mouseMove);

function mouseMove(event) {
    if (isMouseDown) {
        var lastPoint = points[points.length - 1];
        var currentPoint = { x: event.clientX, y: event.clientY };
        if (Math.abs(currentPoint.x - lastPoint.x) > 10 ||  Math.abs(currentPoint.y - lastPoint.y) > 10) {
            addPoint(currentPoint.x, currentPoint.y);
            points.push(currentPoint);
        }
    }
}



/*
    feladat: objektumok 9.1
    filename: object9.js

    target: creating points over mouse movement

*/
