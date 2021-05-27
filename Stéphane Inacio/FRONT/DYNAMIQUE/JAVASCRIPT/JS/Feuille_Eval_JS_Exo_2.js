// Exercice 2 : Table de multiplication :

// Ecrivez une fonction qui affiche une table de multiplication.
// Votre fonction doit prendre un paramètre qui permet d'indiquer quelle table afficher.

// Par exemple, TableMultiplication(7) doit afficher :
// 1 x 7 = 7
// 2 x 7 = 14
// 3 x 7 = 21 ...

let i;
nombre = prompt("Quelle table de multiplication voulez-vous réaliser ?");

for (i = 1; i <= 10; i++) {
    
    if ((nombre == 0) || (nombre == null) || isNaN(nombre)) {
        alert("Erreur veuillez actualiser avec F5 et entrer un nombre entier.");
        break;
    
    } else {
        alert(nombre + " x " + i + "=" + nombre *i);
   
    }
    
}