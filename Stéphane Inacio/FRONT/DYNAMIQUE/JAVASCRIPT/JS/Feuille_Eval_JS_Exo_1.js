// Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux :

// Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans,
// les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est
// compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).

// Le programme doit demander les âges successifs.

// Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.

// Donnez le programme Javascript correspondant qui affiche les résultats.


let jeunes = []
let adultes = []
let vieux = []
let valeurs;

while (true) {  
    valeurs = parseInt(prompt("Veuillez saisir autant d'âges que vous souhaitez :")); 
    if (valeurs >= 100) {
        break;
    } else if (valeurs < 20) {
        jeunes.push(valeurs);
       
    } else if (valeurs >= 20 && valeurs <= 40) {
        adultes.push(valeurs);
       
    } else if (valeurs > 40) {
        vieux.push(valeurs);
        
    }
    
}

alert("Il y a :\n\n" + (jeunes.length) + " jeune(s).\n" + (adultes.length) + " adulte(s).\n" + (vieux.length) + " vieux.\n" + "1 centenaire.");
