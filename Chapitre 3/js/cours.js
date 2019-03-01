var nombre = Number(prompt("Entrez un nombre : "));

if ((nombre > 0) && (nombre <= 100))
{
    console.log(nombre + " est positif et compris entre 0 et 100");
}

    else
    {
        if ((nombre < 0) && (nombre >= -100))
        {
            console.log(nombre + " est négatif et compris entre 0 et -100");
        }
            else
                {
                 if (nombre === 0){
                     console.log(nombre + " est égal à 0");
                 }
                 else {
                     console.log(nombre + " est hors de l'intervalle [-100,100]")
                 }
                }
    }
