/*// Exercice 1 : chiffre pair ou impair :
function pairOuImpair() {
    var aNumber = prompt("Veuillez entrer un chiffre :");
    if (aNumber % 2 == 0) {
        alert("Pair");
    } else {
        alert("Impair");
    }
}

pairOuImpair();


// Exercice 2 : majeur ou mineur :
function majeurOuMineur() {
    var age = prompt("Veuillez entrer votre âge :");
    if (age >17) {
        alert("Vous êtes majeur.");
    } else {
        alert("Vous êtes mineur.");
    }
}

majeurOuMineur();*/


// Exercice 3 : calculette :

function calcul() {

    let nombre1 = Number(prompt("Veuillez entrer un premier nombre :"));
    let nombre2 = Number(prompt("Veuillez entrer un deuxième nombre :"));
    let operateur = prompt("Veuillez entrer l'opérateur de votre calcul (+, -, * ou /)");
    const operateurValide = ["+", "-", "*", "/"]
    let resultat = 0

    while (isNaN(nombre1) || isNaN(nombre2)) {
        alert("Erreur, un nombre est invalide !");
        nombre1 = Number(prompt("Veuillez entrer un premier nombre :"));
        nombre2 = Number(prompt("Veuillez entrer un deuxième nombre :"));
        operateur = prompt("Veuillez entrer l'opérateur de votre calcul (+, -, * ou /)");
    }

    while (!operateurValide.includes(operateur)) {
        alert("Erreur, un opérateur est invalide !");
        nombre1 = Number(prompt("Veuillez entrer un premier nombre :"));
        nombre2 = Number(prompt("Veuillez entrer un deuxième nombre :"));
        operateur = prompt("Veuillez entrer l'opérateur de votre calcul (+, -, * ou /)");
    }


    switch(operateur) {

        case "+":
            resultat = nombre1 + nombre2
            break;
          
        case "-":
            resultat = nombre1 - nombre2
            break;

        case "*":
            resultat = nombre1 * nombre2
            break;
            
        case "/":
            resultat = nombre1 / nombre2
            break;

    }

    alert("Le résultat de votre calcul est : " + resultat +  "\nF5 pour refaire un calcul." )
}

calcul();