var nombreA = 5;
var nombreB = 3;

var nombreBprime = nombreA

var nombreA = nombreB;
var nombreB = nombreBprime;

console.log(nombreA); //doit afficher 3
console.log(nombreB); //doit afficher 5



/*
Exercice : inverser les valeurs des variables nombre1 et nombre2.
*/

var nombre1 = 5;
var nombre2 = 3;

/* Solution utilisant l'addition et la soustraction
(ne fonctionne qu'avec des nombres) */
nombre1 = nombre1 + nombre2;
nombre2 = nombre1 - nombre2;
nombre1 = nombre1 - nombre2;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5