// Exercice 4 : total d'une commande :
// A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité
// commandée QTECOM, afficher le prix à payer PAP, en détaillant la remise REM et
// le port PORT, sachant que :

// - TOT = ( PU * QTECOM )
// - la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà
// - le port est gratuit si le prix des produits ( le total remisé ) est supérieur
//   à 500 €. Dans le cas contraire, le port est de 2%
// - la valeur minimale du port à payer est de 6 €

// Testez tous les cas possibles afin de vous assurez que votre script fonctionne.

// Ci-dessous, un jeu de tests :

// - Saisir 600 € et quantité = 1 : remise 10% (-60 €) soit 540,00
//   et frais port = 0; à payer : 540 €
// - Saisir 501 € et quantité = 1 : remise 10% (-50,1 €) soit 450,90
//   et frais port 2% (de 450,90 €) soit +9,01 € ; à payer : 450,90+9.01 = 459,91 €.
// - Saisir 100 € et quantité = 2 : 200 € donc remise 5% soit 190 €
//   et frais de port 2% soit 3,8 € mini 6 €; à payer : 190+6 = 196 €
// - Saisir 3 € et quantité = 1 : remise 0, frais de port 2% soit 0.06 €
//   donc le minimum de 6 € s'applique; à payer : 3+6 = 9 €

// - 100   - 6€ fpd - pas de remise
// 100-200 - 6€ fdp - 5% remise
// 200-300 - 6€ fdp - 10% remise
// 300-500 - 2% fdp - 10% remise
// + 500   - 0 fdp  - 10% remise

// let PU = Number(prompt("Veuillez entrer le prix unitaire :"));
// let QTECOM = Number(prompt("Veuillez entrer la quantité commandée :"));
// let REM;
// let PORT;
// let TOT = (PU * QTECOM);

// if ((TOT >= 100) && (TOT < 200)) {
//     REM = 0.95;
//     PORT = 6;
//     alert("Le prix avant remise : " + TOT + "€" + "\nLe prix après remise de 5% : " + (TOT*REM) + "€" + "\nLe prix après ajout des fdp de 6€ : " + ((TOT*REM)+PORT) + "€")
// } else if ((TOT >= 200) && (TOT < 300)){
//     REM = 0.90;
//     PORT = 6;
//     alert("Le prix avant remise : " + TOT + "€" + "\nLe prix après remise de 10% : " + (TOT*REM) + "€" + "\nLe prix après ajout des fdp de 6€ : " + ((TOT*REM)+PORT) + "€")
// } else if ((TOT >= 300) && (TOT < 500)) {
//     REM = 0.90;
//     PORT = 1.02;
//     alert("Le prix avant remise : " + TOT + "€" + "\nLe prix après remise de 10% : " + (TOT*REM) + "€" + "\nLe prix après ajout des fdp de 2% : " + ((TOT*REM)*PORT) + "€")
// } else if (TOT >= 500) {
//     REM = 0.90;
//     alert("Le prix avant remise : " + TOT + "€" + "\nLe prix après remise de 10% : " + (TOT*REM) + "€" + " (FDP offerts)")
// } else {
//     PORT = 6;
//     alert("Le prix avant ajout des FDP : (aucune remise valable) " + TOT + "€" + "\nLe prix après ajout des fdp de 6€ : " + (TOT+PORT) + "€")
// }



// CI-DESSOUS TEST INTÉGRATION OBLIGATION DE DONNÉES VALIDES :
// # Blocage sur l'ajout des fdp (+6) car JS le prends comme une string et pas un number. Le reste OK

let REM;
let FDP;

let PU = Number(prompt("Entrez le prix unitaire"));

    while (isNaN(PU)) {
        alert("Prix unitaire invalide, merci d'entrer une valeur correcte.")
        PU = Number(prompt("Entrez le prix unitaire"));
    };

let QTECOM = Number(prompt("Entrez la quantité commandée"));

    while (isNaN(QTECOM)) {
        alert("Quantité commandée invalide, merci d'entrer une valeur correcte.")
        QTECOM = Number(prompt("Entrez la quantité commandée"));
    };

let TOT = Number((PU * QTECOM).toFixed(2));
let PAP = Number((TOT*REM).toFixed(2));

if ((TOT >= 100) && (TOT < 200)) {
    REM = 0.95;
    let PAP = Number((TOT*REM).toFixed(2));
    FDP = Number(6);
    alert("Le prix avant remise : " + TOT + "€" + "\nLe prix après remise de 5% : " + PAP + "€" + "\nLe prix après ajout des FDP de 6€ : " + (PAP+FDP) + "€")
}
else if ((TOT >= 200) && (TOT < 300)){
    REM = 0.90;
    let PAP = Number((TOT*REM).toFixed(2));
    FDP = Number(6);
    alert("Le prix avant remise : " + TOT + "€" + "\nLe prix après remise de 10% : " + PAP + "€" + "\nLe prix après ajout des FDP de 6€ : " + (PAP+FDP) + "€")
}
else if ((TOT >= 300) && (TOT < 500)) {
    REM = 0.90;
    let PAP = Number((TOT*REM).toFixed(2));
    FDP = 1.02;
    alert("Le prix avant remise : " + TOT + "€" + "\nLe prix après remise de 10% : " + PAP + "€" + "\nLe prix après ajout des FDP de 2% : " + (PAP*FDP).toFixed(2) + "€")
}
else if (TOT >= 500) {
    REM = 0.90;
    let PAP = Number((TOT*REM).toFixed(2));
    alert("Le prix avant remise : " + TOT + "€" + "\nLe prix après remise de 10% : " + PAP + "€" + " (FDP offerts)")
}
else {
    FDP = Number(6);
    alert("Le prix avant ajout des FDP : (aucune remise valable) " + TOT + "€" + "\nLe prix après ajout des FDP de 6€ : " + (TOT+FDP) + "€")
}
