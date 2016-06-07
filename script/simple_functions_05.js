/**
 * Feladat: Egyszerű funkciók 05.
 * Fájlnév: simple_functions_05.js
 *
 * A lent látható inputString változóban
 * található szöveget dolgozd fel String.prototype.split-el
 * illetve Array.prototype.map-al, és állítsd elő az alábbi
 * tömböt:
 *
 * [
 *   { name: 'Jakab', age: 12 },
 *   { name: 'Gerzson', age: 26 }
 * ]
 *
 *  A kucslneveket ne égesd be a programba!
 */

/*
var inputString = 'name:Jakab,age:12;name:Gerzson,age:26';

var resultArray = inputString
                    .split(';')
                    .map(function (element)
                    {
                        var obj = {};
                        element.split(',')
                            .forEach(function (key)
                            {
                                var words = key.split(':')
                                obj[words[0]] = words[1];
                            })

                        return obj;
                    });

console.log(resultArray);
*/



var str = 'alma.korte,barack:alma;korte.palinka'

var arr = str.split(/[,;.:]/);

console.log(arr);
