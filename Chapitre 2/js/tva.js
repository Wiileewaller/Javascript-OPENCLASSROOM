var ht = Number(prompt("Entrez le prix HT!"));
var tva = ht*10/100;
var ttc = ht + tva;
alert("Bonjour le cout TTC est de " +ttc+ " €!" );