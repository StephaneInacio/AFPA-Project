// Variables :
var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var sex = "";
var dateNaissance = document.getElementById("date").value;
var CP = document.getElementById("CP").value;
var adres = document.getElementById("adresse").value;
var ville = document.getElementById("ville").value;
var email = document.getElementById("email").value;
var sujet = document.getElementById("sujet").value;
var question = document.getElementById("question").value;
var agree = document.getElementById("agree").checked;
var formulaire = new Array();
var confirmationEnvoi = true;

// Variables pour les <span>
var erreurNom = document.getElementById("erreurNom");
var erreurPrenom = document.getElementById("erreurPrenom");
var erreurSexe = document.getElementById("erreurSexe");
var erreurDate = document.getElementById("erreurDate");
var erreurCP = document.getElementById("erreurCP");
var erreurEmail = document.getElementById("erreurEmail");
var erreurDemande = document.getElementById("erreurDemande");
var erreurQuestion = document.getElementById("erreurQuestion");
var erreurTraitement = document.getElementById("erreurTraitement");

// Variables pouyr les boutons :
var formValid = document.getElementById("envoyer");
formValid.addEventListener("click", validation);
var reset = document.getElementById("annuler");
reset.addEventListener("click", reeinitialisation);

// Regex :
var nomValid = new RegExp(/^[A-Za-z-ïÏîÎêÊâÂèÈéÉëËàÀòÒôÔöÖñÑçüÜùÙ ]+$/);
var prenomValid = new RegExp(/^[A-Za-z-ïÏîÎêÊâÂèÈéÉëËàÀòÒôÔöÖñÑçüÜùÙ ]+$/);
var nomValid = new RegExp(/^[A-Z][A-Za-z\é\è\ê\-]+$/);
var prenomValid = new RegExp(/^[A-Z][A-Za-z\é\è\ê\-]+$/);
var emailValid = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

// Réinitialisation :
function reeinitialisation() {
    erreurNom.textContent = "";
    erreurPrenom.textContent = "";
    erreurSexe.textContent = "";
    erreurDate.textContent = "";
    erreurCP.textContent = "";
    erreurEmail.textContent = "";
    erreurDemande.textContent = "";
    erreurQuestion.textContent = "";
    erreurTraitement.textContent = "";
}

// Fonction mère :
function validation() {
  confirmationEnvoi = true;
  prenomVerif();
  nomVerif();
  sexeVerif();
  dateVerif();
  cpVerif();
  adresseVerif();
  villeVerif();
  emailVerif();
  sujetVerif();
  questionVerif();
  agreeVerif();
  envoiFormulaire();
  envoi();
}

// Fonctions pour chaque vérification de ligne formulaire :
function prenomVerif() {
  prenom = document.getElementById("prenom").value;
  if (prenom == "") {
    erreurPrenom.textContent = "Prénom manquant";
    erreurPrenom.style.color = "red";
  } else {
    if (prenomValid.test(prenom) == false) {
        erreurPrenom.textContent = "Prénom incorrect";
        erreurPrenom.style.color = "red";
    } else {
        erreurPrenom.textContent = "";
    }
  }
}

function nomVerif() {
  nom = document.getElementById("nom").value;
  if (nom == "") {
    erreurNom.textContent = "Nom manquant";
    erreurNom.style.color = "red";
    confirmationEnvoi = false;
  } else {
    if (nomValid.test(nom) == false) {
        erreurNom.textContent = "Nom incorrect";
        erreurNom.style.color = "red";
      confirmationEnvoi = false;
    } else {
        erreurNom.textContent = "";
    }
  }
}

function sexeVerif() {
  var homme = document.getElementById("masculin").checked;
  var femme = document.getElementById("feminin").checked;
  var neutre = document.getElementById("neutre").checked;
  if (homme == true) {
    erreurSexe.textContent = "";
    sex = "Homme";
  } else {
    if (femme == true) {
      SerreurSexe.textContent = "";
      sex = "Femme";
    } else {
      if (neutre == true) {
        erreurSexe.textContent = "";
        sex = "Neutre";
      } else {
        erreurSexe.textContent = "<---- Sélectionnez un sexe";
        erreurSexe.style.color = "red";
        confirmationEnvoi = false;
      }
    }
  }
}

function dateVerif() {
  dateNaissance = document.getElementById("date").value;
  var today = Date.now();
  var dateEntree = new Date(dateNaissance);
  if (!isNaN(dateNaissance)) {
    erreurDate.textContent = "Rentrez une date";
    erreurDate.style.color = "red";
    confirmationEnvoi = false;
  } else {
    if (dateEntree > today) {
        erreurDate.textContent = "Rentrez une date valide";
        erreurDate.style.color = "red";
      confirmationEnvoi = false;
    } else {
        erreurDate.textContent = "";
      dateNaissance = document.getElementById("date").value;
    }
  }
}

function cpVerif() {
  CP = document.getElementById("CP").value;
  var CPVerif = document.getElementById("CP").value.length;
  if (CP == "") {
    erreurCP.textContent = "Rentrez un code postal";
    erreurCP.style.color = "red";
    confirmationEnvoi = false;
  } else {
    if (5 < CPVerif) {
        erreurCP.textContent = "Rentrez un code postal valide (5 chiffres)";
        erreurCP.style.color = "red";
      confirmationEnvoi = false;
    } else {
      if (5 > CPVerif) {
        erreurCP.textContent = "Rentrez un code postal valide (5 chiffres)";
        erreurCP.style.color = "red";
        confirmationEnvoi = false;
      } else {
        erreurCP.textContent = "";
        CP = CP;
      }
    }
  }
}

function adresseVerif() {
  adres = document.getElementById("adresse").value;
  if (adres == "") {
    adres = "Non renseignée";
  }
}

function villeVerif() {
  ville = document.getElementById("ville").value;
  if (ville == "") {
    ville = "Non renseignée";
  }
}

function emailVerif() {
  email = document.getElementById("email").value;
  if (email == "") {
    erreurEmail.textContent = "Indiquez un email";
    erreurEmail.style.color = "red";
    confirmationEnvoi = false;
  } else {
    if (emailValid.test(email) == false) {
        erreurEmail.textContent = "Indiquez un email valide (exemple@domaine.fr)";
      erreurEmail.style.color = "red";
      confirmationEnvoi = false;
    } else {
        erreurEmail.textContent = "";
    }
  }
}

function sujetVerif() {
  sujet = document.getElementById("sujet").value;
  if (sujet == "") {
    erreurDemande.textContent =
      "Veuillez sélectionner un sujet ci-dessus dans le menu déroulant";
      erreurDemande.style.color = "red";
    confirmationEnvoi = false;
  } else {
    erreurDemande.textContent = "";
  }
}

function questionVerif() {
  question = document.getElementById("question").value;
  if (question == "") {
    erreurQuestion.textContent = "Veuillez écrire votre question";
    erreurQuestion.style.color = "red";
    confirmationEnvoi = false;
  } else {
    if (question.length < 20) {
        erreurQuestion.textContent = "Pas assez de caractères (minimum 20)";
        erreurQuestion.style.color = "red";
      confirmationEnvoi = false;
    } else {
        erreurQuestion.textContent = "";
    }
  }
}

function agreeVerif() {
  agree = document.getElementById("agree").checked;
  if (agree == false) {
    erreurTraitement.textContent = "Cochez la case pour accepter le traitement";
    erreurTraitement.style.color = "red";
    confirmationEnvoi = false;
  } else {
    erreurTraitement.textContent = "";
    agree = "Formulaire valide.";
  }
}

function envoiFormulaire() {
  if (confirmationEnvoi == true) {
    alert("Récapitulatif du formulaire : \n\n" + "Nom : " + nom + 
        "\nPrénom : " + prenom + 
        "\nSexe : " + sex + 
        "\nDate de naissance : " + dateNaissance + 
        "\nCode postal : " + CP + 
        "\nAdresse : " + adres + 
        "\nVille : " + ville + 
        "\nEmail : " + email + 
        "\nSujet : " + sujet + 
        "\nQuestion : " + question + 
        "\n\n" + agree);

    console.log(formulaire);
    
    alert("Cliquez sur 'OK' pour valider.");
  }
}

function envoi() {
  if (confirmationEnvoi == false) {
    return false;
  }
  return true;
}