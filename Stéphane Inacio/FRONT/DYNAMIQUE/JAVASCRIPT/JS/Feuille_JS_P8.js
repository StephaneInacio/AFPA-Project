// Liste de prénoms :
const listePrenom = () => {

    let position = [];
    let prenom = "";

    do {
        prenom = prompt("Veuillez saisir un prénom \nou cliquez sur Annuler pour stopper l'opération :", "");
        
        if (prenom == null) {

            alert("Vous avez décidé d'annuler.");

        } else if (prenom.length > 1) {

            position.push(prenom);

        }
    }
    
    while (prenom != "");
    return alert(`Vous avez saisi ${position.length} prénom(s) : ${position.join(", ")} `, "");

};

listePrenom();



// Entiers inférieur à N :
const compteInfN = () => {

    let arr = [];
    let userN = prompt("Veuillez saisir un nombre", "");

    while (isNaN(userN)) {
        userN = prompt("ERREUR : Valeur invalide, veuillez saisir un nombre", "");
    };
    for (let i = userN - 1; i > 0; i--) {
        arr.push(i)
    };
    return alert(arr.join(', '))
};

compteInfN();

// Moyenne :
const moyenne = () => {

    let arr = [];
    let note = Number(prompt("Veuillez saisir une note ou entrez 0 pour arreter la saisie", ""));

    while (isNaN(note)) {
        note = Number(prompt("ERREUR : Valeur invalide, Veuillez saisir une note ou entrez 0 pour arreter la saisie", ""));
    };
    while (note > 0) {
        note = Number(prompt("Veuillez saisir une nouvelle note ou entrez 0 pour arreter la saisie", ""));
        if (note == 0) {
            break
        }
        arr.push(note)
    }
    let result = arr.reduce((acc, curr) => acc + curr) / (arr.length + 1);
    console.log(result)
    return alert(`La moyenne est de ${result}`)
}

moyenne();

// Multiples :
const multiple = () => {

    let N = Number(prompt("Veuillez entrez votre multiple", ""));

    while (isNaN(N)) {
        N = Number(prompt("ERREUR : Valeur invalide, veuillez entrez votre multiple", ""));
    };
    let X = Number(prompt("Veuillez entrez le nombre d'itération désiré", ""));
    while (isNaN(X)) {
        X = Number(prompt("ERREUR : Valeur invalide, veuillez entrez le nombre d'itération désiré", ""));
    };
    for (let i = 1; i <= X; i++) {
        alert(`${i} x ${N} = ${i*N}`);
    };
}

multiple();

// Nombre de voyelles :
const voyelleCount = () => {

    let word = prompt("Veuillez entrer un mot", "");
    let letters = word.split("");
    let voyels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;

    for (let i = 0; i < letters.length; i++) {
        if (voyels.includes(letters[i])) {
            count++
        }
    };
    return alert(`"${word}" comprend ${count} voyelles`);
}

voyellecount();