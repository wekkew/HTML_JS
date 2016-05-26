function GenerateArray(size) {
   var myArray = new Array();
   for (var i = 0; i < size; i++) {
       myArray[i] =  Math.ceil(100 * Math.random());
   }
   return myArray;
}
