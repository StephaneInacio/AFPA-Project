// Exercice 3 : recherche d'un prénom :

// Un prénom est saisi au clavier. On le recherche dans le tableau tab donné
// ci-après.
// Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le
// suivent, et en mettant à blanc la dernière case. Si le prénom n'est pas trouvé
// un message d'erreur apparait et aucun prénom ne se supprime.

// ( ex : ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara",
// "Salem", "Samuel", " "]; )

let listePrenoms = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent",
"Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

alert("Voici la liste de prénom : " + listePrenoms);

let saisie = prompt("Saisissez un prénom de la liste :");
let idx = listePrenoms.indexOf(saisie);

if (idx > -1) {
    listePrenoms.splice(idx, 1); // note importante : 1 désigne le nombre d'idx a supprimer à partir de celui sélectionné. ex: si je met 2 et que j'entre Aurélien, alors Aurélien ET Flavien vont être sup
alert("Supression OK, nouvelle liste : " + listePrenoms);
}
else {
    alert("Loupé, le prénom tapé n'est pas dans la liste.\nVeuillez faire F5 pour recommencer.")
}