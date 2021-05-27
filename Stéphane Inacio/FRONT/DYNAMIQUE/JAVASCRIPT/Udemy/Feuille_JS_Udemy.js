/*
1- Boîte de dialogue avec "OK" et "Annuler"

confirm("Souhaitez-vous confirmer ?"); > boîte de dialogue avec "OK" et "Annuler"


---


2- Boîte dialogue demande âge + affichage de l'âge

const age = prompt("Entrez votre âge :");
alert("Vous avez " + age + " ans");


---


3- Créer une fonction + l'executer

function direBonjour() {
    alert("Bonjour !")
}

direBonjour();


---


4- Boîte de dialogue pour afficher le contenu d'une fonction

function direBonjour(prenom) {
    
    alert("Bonjour " + prenom)

}
direBonjour("Stéphane");


---


5- Paramètres par défaut

let nombreUn = 4, nombreDeux = 7;

function addition(nombreA, nombreB) {

    let resultat = nombreA + nombreB;
    // console.log(result;)     >   Afficher le résultat
    return resultat;

}

// addition(nombreUn, nombreDeux);  >   Afficher le resultat
console.log(addition(nombreUn, nombreDeux));


function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15) {
    
    let resultat = nombreDeGateaux * (minutesDePreparation + minutesDeCuisson);
    return resultat;
}

let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1, 20);   >   Ici, préciser 20 pour le temps de préparation du
fraisier remplace la valeur par défaut 10.
console.log(tempsDePreparationChocolat + tempsDePreparationFraisier)


Challenge : Créer fonction "demanderAge" sans paramètre, qui grâce à une fenêtre demande l'âge et affiche
son âge via une alerte.
 function demanderAge() {

    let age = prompt("Entrez votre âge :");
    alert("Vous avez " + age + " ans.");
     
 }

demanderAge();


---


6- Convertir les données

> variable à modifier = parseInt(variable à modifier)
    >> convertir un nombre de base en chaîne de caractère en numérique entier le plus proche
       ex : Si on mets "10.3" parseInt comprendra qu'on veut 10.
> varible à modifier = Number(variable à modifier)
    >> convertis en nombre précis
       ex : "10.3" sera bien convertis en 10.3

> nombre = 45;
OU
> nombreEnString = nombre.toString()
    >>  ici, nombreEnString deviendra "45" en chaine de caractère


---


7- Fonction anonyme

APPELER UNE FONCTION ANONYME GRACE A UNE VARIABLE
let fonctionAnonyme = function() {

    console.log("Je suis une fonction anonyme :)");

}
fonctionAnonyme();

AUTO-EXECUTER UNE FONCTION ANONYME
(function() { console.log("Je suis une fonction anonyme :)")})();


---


// Challenge :

// Créer une fonction abracadabra sans paramètres.
// Demander prénom, nom et âge avec boîte de dialogue.
// Stocker les informations grâce aux variables prenom nom age.
// Afficher avec boite de dialogue :
// "Sapristi ! On ne m'avait pas prévenu que c'était vous, [prenom] !
// Euh... Je veux dire... Monsieur le grand magicien [nom] !
// Cela fait déjà [age] ans que vous faites rayonner notre contrée !"."

function abracadabra() {

    let prenom = prompt("Veuillez entrer votre prénom :");
    let nom = prompt("Veuillez entrer votre nom :");
    let age = prompt("Veuillez entrer votre âge :");
    alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, "
    + prenom
    + " ! Euh... Je veux dire... Monsieur le grand magicien "
    + nom
    + " ! Cela fait déjà " + age +  " ans que vous faites rayonner notre contrée !");
    
}

abracadabra();


---


// Challenge niveau avancé :

Dans cet exercice, je vous propose de réutiliser tout ce que nous avons vu jusqu'à maintenant. Si vous le
réussissez, vous pourrez définitivement valider toutes les notions que nous avons déjà vu ensemble !

Voici ce que nous allons faire : un calculateur d'IMC !

Nous allons récupérer deux valeurs grâce à notre utilisateur : poids et taille, qui seront respectivement
associées au poids et à la taille de notre utilisateur. Vous pouvez demander à vos utilisateurs leur taille
en centimètres ou en mètres. Dans tous les cas, vous devrez convertir cette taille en mètres pour calculer
son IMC.
Il faudra ensuite passer ces valeurs à notre fonction, grâce à ses paramètres. J'insiste sur ce point.

Dans cette fonction calculerIMC nous aurons une formule mathématique, que je vais vous donner car il n'y a
pas d'intérêt à la chercher : poids/taille au carré
Notez bien que le poids doit être en kg, et la taille en mètres. Donc, par exemple : 53kg et 1.50m.

Ici, vous avez le choix : faire le grand saut et essayer d'écrire cette équation par vous-même, ou alors,
vous pouvez aller sur ce lien dans lequel je vous ai préparé quelques indices pour pouvoir mettre au carré
un nombre (ici la taille).

Enfin, l'objectif pour notre fonction sera de nous retourner ce résultat afin que nous puissions l'afficher
à notre utilisateur, directement via une boîte de dialogue en dehors de notre fonction.


function calculerIMC() {

    let poids = prompt("Veuillez entrer votre poids en kilogrammes :");
    let taille = prompt("Veuilez entrer votre taille en mètres (exemple 1.80) :");

    let tailleAuCarre = Math.pow(taille, 2);
    let resultat = poids / tailleAuCarre;

    alert("Votre IMC est d'une valeur de " + resultat);

}

calculerIMC();


---


8- Conditions : IF/ELSE

Les sigles :
== égal
!= n'est pas égal, est différent de
> plus grand que    
< plus petit que
>= plus grand ou égal que
<= plus petit ou égal que

Deux possibilités, une condition :

if (heure < 12) {
    console.log("C'est le matin.")
    
}
else {
    console.log("C'est l'après-midi.")    
}


Trois possibilités, deux conditions.

if (heure < 12) {
    console.log("C'est le matin.")
    
}
else if (heure < 18) {

    console.log("C'est l'après-midi.")

}
else {
    console.log("C'est la soirée")



// Challenge :

const age = prompt("Quel est votre âge ?");

if (age < 18) {
    alert("Vous n'êtes pas majeur.");   
}
else if (age < 21) {
    alert("Vous êtes majeur en France.");
}
else {
    alert("Vous êtes majeur partout, à vous les casinos !");
}}


---


9 - Switch :

let consommable = "carotte";

switch(consommable) {

    case "carotte":
    case "pomme de terre":
    case "concombre":
        console.log("Ceci est un légume");
    break;
    
    case "banane":
        console.log("Ceci est un fruit");

    default:
        console.log("Ceci n'est ni un fruit ni un légume.")
}


---


10- Conditions : OR/AND 



>> Execution si LES DEUX CONDITIONS sont respectées :

Ici, on dit que nos deux conditions doivent au moins avoir un caractère pour que le message s'affiche :

let gareDeDepart = "Valenciennes";
let gareDArrivee = "Gare du Nord";

if (gareDeDepart != "" && gareDArrivee = "") {
    
    console.log("Le train va démarrer.");
}


>> Execution si AU MOINS UNE CONDITION est respectées :

Ici, on dit qu'au minimum une condition doit avoir un caractère pour que le message s'affiche :

let gareDeDepart = "Valenciennes";
let gareDArrivee = "Gare du Nord";

if (gareDeDepart != "" || gareDArrivee = "") {
    
    console.log("Le train va démarrer.");
}

>> Execution si AU MOINS UNE CONDITION parmis deux conditions est respectées ET qu'une troisième l'est
aussi:

Ici, on dit qu'au minimum chauffeur + soit gareDArrivee soit gareDeDepart soivent être respectées pour que
le message s'affiche :

let gareDeDepart = "Valenciennes";
let gareDArrivee = "";
let chauffeur = "";

if((gareDeDepart != "" || gareDArrivee != "") && chauffeur != "") {
  console.log("Le train va démarrer");
}
else {
  console.log("Le train ne peut pas démarrer");

}


---


11- Conditions : Vérifier le contraire (NOT)

Il suffit de mettre un ! devant la variable dans la condition du if.

let x = 7;

if(!x < 5) {
    console.log("x est inférieur à 5.");
}
else {
    console.log("x est supérieur à 5.");
}
> Dans ce cas, la console indiquera "x est inférieur à 5" dès que sa valeur sera en vérité supérieur à 5.


---


12 - Les conditions ternaires :

[CONDITION] ? [TRUE] : [FALSE]

Challenge : Tenter de recréer l'exemple précédent sous forme de condition ternaire.

x > 5 ? console.log("x est supérieur à 5.") : console.log("x est inférieur à 5.");

**

let gareDeDepart = "Valenciennes";
let gareDArrivee = prompt("Où souhaitez vous aller ?") || "Gare du Nord" >> Grâce à || on donne une valeur
let chauffeur = "Stéphane";                                                 par défaut si l'utilisateur ne
                                                                            remplis pas le champs.
if((gareDeDepart != "" || gareDArrivee != "") && chauffeur != "") {
  alert("Le train va démarrer à destination de " + gareDArrivee + ".");
}
else {
  alert("Le train ne peut pas démarrer");

}

---


13 - La boucle WHILE :

/!\ ATTENTION : Il faut faire en sorte que la condition soit un moment ou l'autre fausse, sinon c'est
une boucle infinie qui peut détruire votre ordinateur.

let i = 1;

while ( i < 5) {
    console.log("Ligne : " + i);    >>  On affiche i, puis i++ donc i prend +1. On affiche de nouveau i,
    i++;                                puis i prend de nouveau + 1 et s'affiche.. etc jusqu'à ce que i=5
}                                       et donc sorte de la boucle


---


14 - La boucle DO WHILE :

let prenom;

do {                                                >> Tant que prenom n'est pas complété ("") ou (||) que
                                                       l'utilisateur annule, on redemandera en boucle le
    prenom = prompt("Quel est votre prénom ?");        prenom. Quand ok, on affiche "Bonjour Stéphane"

} while (prenom == "" || prenom == null);         /!\ variable (let) prenom doit être déclaré à l'extérieur
                                                      de la boucle. Si variable (var) on pourra la déclarer
alert("Bonjour " + prenom)                            dans la boucle.   


---


15 - La boucle FOR :

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for (let i = 1; i < 5; i++) {           >> Cette boucle est l'équivalent de la boucle dans la partie 13
                                           concernant la boucle WHILE.
    console.log("Ligne : " + i);

}


---


16- Casser la boucle : BREAK et CONTINUE

let i = 0;

while (i < 5) {
  
  // Break
  if (i == 3) {
    break;
  }
  
  // Continue
  if (i == 3) {
    i++;
    continue;
  }
  
  console.log('Ligne : ' + i);
  i++;
  
}
 

16 - Gérer les exceptions :
    // A - Exemple de base : 
try {
    // Y-a-t-il une erreur ?
    alert(hello);
}
catch (error) {
    // S'il y a une erreur !
    alert(error.stack);
    // On peut personnaliser :
    alert("La variable hello n'existe pas !")
    
}

    // B - Exemple plus complet :
    try {
        // Erreur ?
        let recompense = prompt("Choisissez une récompense : épée, arc, haches");
        let degats;
        
        switch(recompense) {
          case 'épée':
            degats = 40;
            break;
          case 'arc':
            degats = 30;
            break;
          case'haches':
            degats = 20;
            break;

          default:  // >> On crée une erreur au cas où aucune des possibilités du dessus ne soit entrée.
            throw new Error('Vous ne pouvez pas tricher.');
        }
        // Si l'utilisateur a bien entré un de nos 3 choix :
        alert('Vous avez choisi : ' + recompense + ' (' + degats + ' dégats).');
      }
      catch(error) {
        // Si l'utilisateur n'a pas entré un de nos 3 choix :
        alert(error);
      }
      // Petit message de clotûre qui s'affiche qu'il y ait erreur ou pas !
      finally {
        alert('Fin du programme.\nF5 pour recommencer.');
      }


---


// 17 - Fonction récursives :

function timer(secondes) { // 10    // >>> On donne la valeur de 10 à la fonction grâce au timer
                                           sous la fonction.
    if(secondes > 0) {                  
        console.log(secondes);          
        timer(secondes - 1); // 9       
                                        
            // afficher 9               
            // timer(8)                 
                                        
                // afficher 8            // >>> Va afficher 10, puis 9, puis 8... jusqu'à ce que le chiffre
                // timer(7)                  // ne soit pas plus grand que 0, donc jusqu'à 1.
                                        
                    // ...                   // On rajoute donc un console.log(0) pour dire que dès qu'on
    }                                        // sort de la condition, il faut afficher 0.
    else {                              
        console.log(0);                      // Ainsi, nous pouvons afficher 10, 9, 8... et 0.
    }                                   
                                        
}                                              
                                        
timer(10);   

function somme(nombre) { // 3 >>> Ici on donne la valeur d'arrivée de 3 grâce au console.log
    
    if(nombre == 1) {                           // >>> Si nombre est égal à 1, on retourne 1.
        return 1;
    }

    return nombre + somme(nombre - 1); // 2     // >>> Tant que nombre n'est pas égal à 1, on va faire
                                                    // nombre (3) + nombre-1 (3-1) donc  3 + 2
        // retourner 2 + somme(1)               // >>> La fonction est retournée, et là nombre égal 2,
                                                    // donc comme 2 n'est pas égal à 1, nous recommençons
            // retourner 1                          // nombre (2) + nombre-1 (2-1) donc on retourne 1
                                                    // ce qui nous donne 3 + 2 + 1 
    // 3 + 2 + 1                                // >>> La fonction recommence, comme nombre=1 on affiche
                                                    // le résulat. 
}

console.log(somme(3));


// ---


// 18 - Les Tableaux :
    // A - Tableaux simples :

let monTableau = new Array('un', 'deux', 'trois');
                    ou
let monTableau = Array('un', 'deux', 'trois');
                    ou
let monTableau = ['un', 'deux', 'trois'];            // >>> Utiliser plutôt ce style !!


    // B - Tableaux 2D (deux dimenssions) :

let monTableau2D = [
    ["Marc", "Jeff", "Bill"],
    ["Zuckerberg", "Bezos", "Gates"]
];


    // C - Tableaux associatifs :

let monTableauAssociatif = {
    'prenom' : 'Mark',                // >>> on donne un nom à chaque élément.
    'nom'    : 'Zuckerberg',              // ex : "prenom" contient "Mark"
    'poste'  : 'PDG de Facebook'
};


    // D - Récupérer un élément dans un tableau :
        // 1) dans un tableau simple :

let monTableau = new Array('un', 'deux', 'trois');
let monTableau = Array('un', 'deux', 'trois');
let monTableau = ['un', 'deux', 'trois'];        // >>> "un" = 0 / "deux" = 1 ... etc (numéro de case/index)

console.log(monTableau[0])  >>> Ici on dit, je veux que tu m'affiches l'élément 0 présent dans monTableau.

        // 2) dans un tableau 2D :

let monTableau2D = [
    ["Marc", "Jeff", "Bill"],          // >> 0
    ["Zuckerberg", "Bezos", "Gates"]   // >> 1
];

console.log(monTableau2D[0][0]);    // >>> Le premier [0] désigne le choix de la ligne, ici la première, et
                                           le deuxième [0] désigne l'élément de la ligne à afficher (Marc).

        // 3) dans un tableau associatif :

let monTableauAssociatif = {
    'prenom' : 'Mark',                  
    'nom'    : 'Zuckerberg',               
    'poste'  : 'PDG de Facebook'
};

console.log(monTableauAssociatif["poste"]);     // >> On demande à afficher l'élément qui porte le nom "poste"
                                                      donc "PDG de Facebook" sera affiché.


    // E-  La fonction LENGTH :

// Elle va permettre d'afficher le nombre d'élément d'un tableau.
    // ex : console.log(monTableau.length); va afficher par exemple 10, s'il y a 10 éléments.

// On peut par exemple afficher le dernier élément du tableau de façon dynamique :
    // ex : console.log(monTableau[monTableau.length - 1])


    // F - Ajouter/retirer un élément (push/unshift)/(pop/shift) :
            
        // 1) Dans un tableau simple :

let monTableau = ['un', 'deux', 'trois', 'quatre'];

monTableau.push('cinq');        // >> Ajout d'un élément en fin de tableau
monTableau.unshift('zero');     // >> Ajout d'un élément en début de tableau
// console.log(monTableau);

monTableau.pop();               // >> Supprime le dernier élément
monTableau.shift();             // >> Supprime le premier élément
// console.log(monTableau);

            // 2) Dans un tableau 2D :

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];

monTableau2D[1].push('test');       // >> Ajout d'un élément en fin de tableau : [1] pour la 2e ligne.
monTableau2D[1].unshift('test');    // >> Ajout d'un élément en début de tableau
// console.log(monTableau2D);

monTableau2D[0].shift();            // >> Supprime le premier élément, de mon premier élément (donc Mark)
monTableau2D[1].pop();              // >> Supprime le dernier élément, de mon dernier élément (donc Gates)
// console.log(monTableau2D);

            // 3) Dans un tableau associatif :

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};

monTableauAssociatif['nationalite'] = 'Américaine';     // >> Ajout d'un élément en fin de tableau
// console.log(monTableauAssociatif);

delete(monTableauAssociatif.poste);                     // >> Supprime un élément précis du tableau
// console.log(monTableauAssociatif);


    // G - Retrouver un élément grâce à sa valeur (indexOf) :

// /!\ Fonctionne uniquement avec les tableaux simples.

let monTableau = ['un', 'deux', 'trois', 'quatre'];
console.log(monTableau.indexOf('deux')); // retourne 1


    // H - Concaténer pour afficher (JOIN) :

let monTableau = ['un', 'deux', 'trois', 'quatre'];
console.log(monTableau.join(' / '));                 // >> Associe les valeur en une chaine de caractère.
                                                        // Ici donc, "un / deux / trois / quatre"
let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
console.log(monTableau2D.join(' / '));      // >> Ici on aura Marc,Jeff,Bill / Zuckerberg,Bezos,Gates
                                            // >> On peut appliquer sur une seule ligne : monTableau2D[0]


    // I - Ajouter, remplacer et supprimer avec SPLICE :

let monTableau = ['un', 'deux', 'trois', 'quatre'];

monTableau.splice(0, 2);   // (Ajouter à partir de l'index 0, 2 d'élément à sup
monTableau.splice(0, 0, "random", "pie"); // On ajoute "random" et "pie" au tableau AVANT l'index 0
// console.log(monTableau);                 
    

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];

monTableau2D[0].splice(0, 1);   // Dans l'index 0 (1ère ligne) on sup à partir d'index 0, un élém donc Marc
monTableau2D.splice(2, 0, ['30', '45', '70']); // Ajout d'un 3e index à la fin (ligne)
// console.log(monTableau2D);
    
// Ne fonctionne pas sur les tableaux associatif.


    // J - Boucles dans les tableaux :
        // 1) FOR...IN :

let panier = ['fraise', 'banane', 'poire'];

for (const fruit in panier) {       // Ici on créé une constante fruit en rapport avec panier
    console.log(fruit);             // Fruit va contenir 0, 1, et 2. Elle contient l'index pas les valeurs
    console.log(panier[fruit]);     // Fruit va contenir les valeurs donc fraise, banane et poire.
    panier[fruit] = "pomme";        // Fruit ne va contenir que pomme, donc pomme, pomme et pomme.
    }


        // 2) Boucles FOR...OF :

let panier = ['fraise', 'banane', 'poire'];

for (const fruit of panier) {
    console.log(fruit);                     // fruit prend directement la valeur de panier : fraise, banane et poire.
    console.log(panier.indexOf(fruit));     // fruit prend la veleur des index donc : 0, 1 et 2
}


        // 3) Boucles FOREACH :

// Pour utiliser les fonctions anonymes.

let listeDePays = ["France", "Belgique", "Japon", "Maroc"];

// for (const pouleA of listeDePays) {
//     console.log(pouleA);     
// }
                                                            // Dans les 3 cas, pouleA va prendre la valeur
            // Équivaut à :                                 // des éléments de listeDePays, donc va afficher
                                                            // France, Belgique, Japon et Maroc.
listeDePays.forEach(function (pouleA) {
    console.log(pouleA);
});

            // Équivaut à :

listeDePays.forEach(pouleA => console.log(pouleA));*/



    // K - Concaténer un tableau associatif avec FOR...IN :

let monTableauAssociatif = {
    'prenom'    : 'Mark',
    'nom'       : 'Zuckerberg',
    'poste'     : 'PDG de Facebook'
};

function concatener(tableau) {
    let chaine = '';

    for (const valeur in tableau) {
        
        chaine += (valeur + ' : ' + tableau[valeur] + '\n'); // le \n va permettre les mises à la ligne.

    }

    console.log(chaine);
}

concatener(monTableauAssociatif);