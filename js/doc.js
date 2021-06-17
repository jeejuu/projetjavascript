// let formulaire= document.getElementById('formulaire');
// let myname = document.getElementById("nom");

// formulaire.addEventListener('submit',function(e){
//     e.preventDefault();
// })


function validateForm() {
    var nom = document.forms["formulaire"]["nom"].value;
    var adresse = document.forms["formulaire"]["adresse"].value;
    var mail = document.forms["formulaire"]["mail"].value;
    var pass = document.forms["formulaire"]["pass"].value;
    var telephone = document.forms["formulaire"]["telephone"].value;
    var commentaire = document.forms["formulaire"]["commenter"].value;
    if (nom == "") {
      alert("Veuillez Saisir votre Nom SVP");
      return false;
    }else if (adresse==""){
        alert("Veuillez Saisir votre Adresse SVP");
        return false;
    }else if (mail==""){
        alert("Veuillez Saisir votre Adresse Mail SVP");
        return false;
    }else if (pass==""){
        alert("Veuillez Saisir votre Mot de Passe SVP");
        return false;
    }else if (telephone==""){
        alert("Veuillez Saisir votre Numéro de téléphone SVP");
        return false;
    }else if (commentaire==""){
        alert("Veuillez Saisir votre commentaire SVP");
        return false;
    }
  }


