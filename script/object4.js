/*

    Feladat: Objecktumok 4.
    Fájlnév: object4.js

    1, Hozz létre egy objektumot, amiben egy tanuló adatait
    tárolod. A tanulónak legyen neve (name),
    születési éve (birthYear) és osztálya (class).

    2, A tanuló rendelkezzen egy osztályzatok (scores)
    tulajdonsággal, amiben az eddig megszerzett jegyeit tárolod.

    3, Írd ki az objektumot a console.log segítéségével.

    4, A forráskódnak szépen olvashatónak, formázottnak kell
    lennie, a használt változnaknak érthető elnevezéseket
    kell adnotok.

 */

var student = {
    name: 'Marx Karcsi',
    birthYear: 1818,
    'class': 'socialist',
    scores: {}
};

student.scores.math = [];
student.scores.language = [];
student.scores.pe = [];

for (index = 0; index < 12; index += 1) {
    student.scores.math[index] = Math.floor(Math.random() * 5 +1);
    student.scores.language[index] = Math.floor(Math.random() * 5 +1);
    student.scores.pe[index] = Math.floor(Math.random() * 5 +1);
}

console.log(student);
