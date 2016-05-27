var points = []
var bounds ={
            min: {x: undefined, y: undefined},
            max: {x: undefined, y: undefined}
            }

/*----------------------------------------------------------------------------*/

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
        setBounds(bounds.min.x, bounds.min.y, width, height);
    }
}

/*----------------------------------------------------------------------------*/

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

/*----------------------------------------------------------------------------*/

document.addEventListener('mousedown', mouseDown);

var isMouseDown = false;
function mouseDown(event) {
    isMouseDown = true;
    points.push({ x: event.clientX, y: event.clientY});
    addPoint(event.clientX, event.clientY);
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
            points.push(currentPoint);
            addPoint(currentPoint.x, currentPoint.y);
        }
    }
}
