// Fonction pour additionner
function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

// Fonction pour multiplier
function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}

// Fonction pour soustraire
function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}

// Fonction pour diviser
function division(nombreA, nombreB) {
    if(nombreB == 0) {
        throw new Error("Impossible de diviser par 0.");
    }
    return nombreA / nombreB;
}

// Demande de choix :
do {
    
    var choix = Number(prompt("Que souhaitez-vous faire ? \n\n1- Addition \n2- Multiplication \n3- Soustraction \n4- Division"));

} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

// Demandes des nombres :
do {
    var premierNombre = Number(prompt("Veuillez choisir le premier nombre : "));
    var deuxiemeNombre = Number(prompt("Veuillez choisir le deuxième nombre : "));
}
while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

// Calcule à faire en fonction du choix :
try {
    switch (choix) {
        case 1:
            var resultat = addition(premierNombre, deuxiemeNombre);
            break;
        
        case 2:
            var resultat = multiplication(premierNombre, deuxiemeNombre);
            break;
        
        case 3:
            var resultat = soustraction(premierNombre, deuxiemeNombre);
            break;

        case 4:
            var resultat = division(premierNombre, deuxiemeNombre);
            break;
    
        default:
            throw new Error("Une erreur est survenue.");
    }
      // Affiche le résultat
      alert("Voici le résultat : " + resultat);
}

catch(error) {
         // Si une erreur est survenue, on affiche l'erreur
        alert(error);
    }









