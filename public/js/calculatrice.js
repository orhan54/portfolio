// On récupère l'écran de la calculatrice (la zone de texte)
var ecran = document.getElementById("ecran");

// Cette fonction ajoute un chiffre ou un symbole sur l'écran
// quand on clique sur un bouton
function ajouter(valeur) {
  // on prend ce qu'il y a déjà écrit, et on rajoute la nouvelle valeur à la fin
  ecran.value = ecran.value + valeur;
}

// Cette fonction vide complètement l'écran
// (appelée quand on clique sur le bouton "C")
function effacer() {
  ecran.value = "";
}

// Cette fonction calcule le résultat
// (appelée quand on clique sur le bouton "=")
function calculer() {
  // on récupère ce qui est écrit sur l'écran
  var expression = ecran.value;

  // eval() sert à calculer le résultat d'un texte comme "3+5"
  // si le texte n'est pas un calcul valide, ça provoque une erreur
  try {
    var resultat = eval(expression);
    ecran.value = resultat;
  } catch (erreur) {
    ecran.value = "Erreur";
  }
}
