document.forms["SAV"].addEventListener("submit", function(e) {
    
  // Variables + Regex
  let erreurGlobale; erreurNom; erreurPrenom; erreurSexe; erreurDate; erreurCP;
  erreurAdresse; erreurVille; erreurEmail; erreurDemande; erreurQuestion;
  erreurTraitement;
  
  let carValid   = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;  
  let regDate    = /(19|20)[0-9][0-9]/;
  let regMail    = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let regGlobale = /^([0-9a-z'àâéèêôùûçÀÂÉÈÔÙÛÇ\s-]{1,50})$/;
  let regChiffre = /^[0-9]{5}$/;
  let inputs     = this;

  
  // Erreurs par ligne :
  
  // Nom
  if (carValid.test(inputs["nom"].value)== false) {
      erreurNom = "Champ obligatoire";
      document.getElementById("erreurNom").innerHTML = erreurNom;
  }
  
  // Prénom
  if (carValid.test(inputs["prenom"].value)== false) {
    erreurPrenom = "Champ obligatoire";
      document.getElementById("erreurPrenom").innerHTML = erreurPrenom;
  }
  
  // Sexe 
  radiocheck = false;
  for (let i= 2; i < 5; i++) {
      if (inputs[i].checked) {
      radiocheck = true;
      }
  }
  if (radiocheck == false) {
    erreurSexe = "Veuillez selectionner votre genre";
  document.getElementById("erreurSexe").innerHTML = erreurSexe;
  }  
  
  // Date
  if (regDate.test(inputs["date"].value)== false) {
    erreurDate = "Veuillez saisir une date valide";
      document.getElementById("erreurDate").innerHTML = erreurDate;
  }
  
  // Code postal
  if (regChiffre.test(inputs["poste"].value)== false) {
    erreurCP = "Veuillez saisir des chiffres";
      document.getElementById("erreurCP").innerHTML = erreurCP;
  }
  
  // Adresse
  if (regGlobale.test(inputs["adresse"].value)== false) {
    erreurAdresse = "Veuillez saisir des caractères valides";
      document.getElementById("erreurAdresse").innerHTML = erreurAdresse;
  }
  
  // Ville
  if(carValid.test(inputs["ville"].value)== false) {
    erreurVille = "Veuillez saisir des caractères valides";
      document.getElementById("erreurVille").innerHTML = erreurVille;
  }
  
  // Email
  if (regMail.test(inputs["email"].value)== false) {
    erreurEmail = "Veuillez saisir une adresse email valide";
      document.getElementById("erreurEmail").innerHTML = erreurEmail;
  }
  
  // Sujet
  if (inputs["sujet"].value == "") {
    erreurDemande = "Veuillez sélectionnez le sujet de votre demande";
      document.getElementById("erreurDemande").innerHTML = erreurDemande;
  }
  
  // Question
  if(regGlobale.test(inputs["question"].value)== false) {
    erreurQuestion = "Veuillez entrez des caractères valides";
      document.getElementById("erreurQuestion").innerHTML = erreurQuestion;
  }
  
  // Validation du formulaire
  if (inputs["traitement"].checked) {
  } else {
    erreurTraitement = "Veuillez cocher la case, s'il vous plaît";
      document.getElementById("erreurTraitement").innerHTML = erreurTraitement;
  }
  
  // Traitement générique
  for (let i = 0; i < inputs.length; i++) {
      inputs[i];
  if (!inputs[i].value) {
      e.preventDefault();
      erreurGlobale = "Veuillez renseigner tous les champs";
      document.getElementById("erreurGlobale").innerHTML = erreurGlobale;
  }
  }
  });
  
  document.forms["SAV"].addEventListener("reset", function() {
  
      inputs["nom"].value = "";
      inputs["prenom"].value = "";
      inputs["feminin"].value = "";
      inputs["masculin"].value = "";
      inputs["neutre"].value = "";
      inputs["date"].value = "";
      inputs["poste"].value = "";
      inputs["adresse"].value = "";
      inputs["ville"].value = "";
      inputs["email"].value = "";
      inputs["sujet"].value = "";
      inputs["question"].value = "";
      inputs["traitement"].value = "";
  });