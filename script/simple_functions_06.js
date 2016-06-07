for (var index = 0; index < 10; index += 1) {

    function getIndex(index) {
        setTimeout(function () {
            console.log(index);
        }, 1000);
    }
    getIndex(index);

    function() {}

}

console.log('kacsa');
