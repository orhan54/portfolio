"use strict";

let tabJson = [];
let totalAPayer = 0;

// Creation des const pour mon html
const monContenu = document.getElementById('mon-contenu');//ajout des cards créer depuis mon tableau json
const monFiltre = document.getElementById('pizzaFiltreValue');
const votrePanier = document.getElementById('votrePanier');
const totalElement = document.getElementById('totalAPayer');

// Connexion
const creerCompteBtn = document.getElementById('creerCompteBtn');
const annulerBtn = document.getElementById('annulerBtn');
const creationCompte = document.getElementById('creationCompte');
const connexionBtn = document.getElementById('connexionBtn');
const connexionForm = document.getElementById('connexionForm');
let connected = false; // État de connexion

// récupération des données JSON
(async function recuperDonnees() {
    try {
        const resultats = await Promise.all([
            fetch('../../json/bpm.json'),
            fetch('../../json/chevremiel.json'),
            fetch('../../json/croqmonsieur.json'),
            fetch('../../json/fromages.json'),
            fetch('../../json/hutburger.json'),
            fetch('../../json/jamboncheese.json'),
            fetch('../../json/margherita.json'),
            fetch('../../json/orientale.json'),
            fetch('../../json/pepperonilovers.json'),
            fetch('../../json/supreme.json'),
            fetch('../../json/texanebarbecue.json'),
            fetch('../../json/vegetarienne.json'),
        ]);

        const dataJson = await Promise.all(resultats.map(res => res.json()));
        tabJson = dataJson.flat();
        afficherContenu(tabJson);

    } catch (erreur) {
        console.error(erreur);
    }
}());

// création des cards
function afficherContenu(dataJson) {
    monContenu.innerHTML = "";

    for (let i = 0; i < dataJson.length; i++) {
        const maCard = document.createElement('div');
        let monImageCard = document.createElement('img');
        monImageCard.setAttribute("src", dataJson[i].image);
        monImageCard.setAttribute("alt", "Card image cap");

        let monCardBody = document.createElement('div');
        let monH5Card = document.createElement('h5');
        monH5Card.textContent = dataJson[i].name;
        let monParaCard = document.createElement('p');
        monParaCard.textContent = dataJson[i].description;

        let monFooterCard = document.createElement('div');
        let monACard = document.createElement('a');
        monACard.setAttribute("href", "#");
        monACard.setAttribute("data-index", i);
        monACard.textContent = 'Ajouter';

        let moinsAPizza = document.createElement('a');
        let moinsCard = document.createElement('i');
        moinsAPizza.setAttribute("id", "compt-moins");
        let nombrePizza = document.createElement('span');
        nombrePizza.textContent = '0';
        nombrePizza.setAttribute("id", `compteur-${i}`);
        let plusAPizza = document.createElement('a');
        plusAPizza.setAttribute("id", "compt-plus");
        let plusCard = document.createElement('i');
        let prixCard = document.createElement('p');
        prixCard.textContent = dataJson[i].prix + dataJson[i].devise;

        // Classes CSS
        maCard.classList.add("card", "mb-3");
        monImageCard.classList.add("card-img-top");
        monCardBody.classList.add("card-body");
        monH5Card.classList.add("card-title");
        monParaCard.classList.add("card-text");
        monFooterCard.classList.add("card-footer", "row");
        monACard.classList.add("btn", "btn-secondary", "col-4");
        moinsAPizza.classList.add("col-2", "offset-3", "mb-4", "mt-3");
        moinsCard.classList.add("bi", "bi-dash-circle-fill", "col-2", "text-danger", "h4");
        nombrePizza.classList.add("col-2", "ms-3", "mt-3");
        plusAPizza.classList.add("col-2", "mb-4", "mt-3");
        plusCard.classList.add("bi", "bi-plus-circle-fill", "col-4", "mb-3", "mt-3", "text-success", "h4");
        prixCard.classList.add("col-4", "offset-4");

        // Ajout au DOM
        monContenu.appendChild(maCard);
        maCard.appendChild(monImageCard);
        maCard.appendChild(monCardBody);
        monCardBody.appendChild(monH5Card);
        monCardBody.appendChild(monParaCard);
        maCard.appendChild(monFooterCard);
        monFooterCard.appendChild(moinsAPizza);
        moinsAPizza.appendChild(moinsCard);
        monFooterCard.appendChild(nombrePizza);
        monFooterCard.appendChild(plusAPizza);
        plusAPizza.appendChild(plusCard);
        monFooterCard.appendChild(monACard);
        monFooterCard.appendChild(prixCard);

        // compteur pizza
        let count = 0;
        const counterElement = document.getElementById(`compteur-${i}`);

        moinsAPizza.addEventListener('click', () => {
            if (count > 0) {
                count--;
                updateCount(counterElement, count);
            }
        });

        plusCard.addEventListener('click', () => {
            count++;
            updateCount(counterElement, count);
        });

        monACard.addEventListener('click', (event) => {
            event.preventDefault();
            ajouterAuPanier(dataJson[i].name, count, dataJson[i].prix);
        });
    }
}

function updateCount(counterElement, count) {
    counterElement.textContent = count;
}

function ajouterAuPanier(pizzaName, quantite, prix) {
    if (quantite > 0) {
        const li = document.createElement('li');
        li.textContent = `${pizzaName} x${quantite} - ${prix * quantite}€`;
        votrePanier.appendChild(li);

        totalAPayer += prix * quantite;
        totalElement.textContent = `Montant total à régler: ${totalAPayer.toFixed(2)}€`;
    }
}

// Filtrage des pizzas
monFiltre.addEventListener('change', filtrePizza);
function filtrePizza(event) {
    let valuePizza = monFiltre.value;
    if (valuePizza === "all") {
        afficherContenu(tabJson);
    } else {
        let tabDonnees = tabJson.filter(pizza => pizza.base === valuePizza);
        afficherContenu(tabDonnees);
    }
}

// -------- Gestion Connexion / Création / Déconnexion --------

// Fonction pour afficher le formulaire de création de compte
creerCompteBtn.addEventListener('click', () => {
    // Calculer la largeur actuelle de "Créer compte"
    const width = creerCompteBtn.offsetWidth + "px";
    annulerBtn.style.width = width; // appliquer la même largeur à Annuler

    creationCompte.style.display = 'block';
    annulerBtn.style.display = 'inline-block';
    creerCompteBtn.style.display = 'none';

    // Transformer le bouton connexion en bouton vert "Enregistrer"
    connexionBtn.textContent = 'Enregistrer';
    connexionBtn.classList.remove('btn-primary');
    connexionBtn.classList.add('btn-success');
});

// Annuler la création de compte
annulerBtn.addEventListener('click', () => {
    creationCompte.style.display = 'none';
    annulerBtn.style.display = 'none';
    creerCompteBtn.style.display = 'inline-block';

    // Remettre le bouton connexion à son état normal
    connexionBtn.textContent = connected ? 'Se déconnecter' : 'Se connecter';
    connexionBtn.classList.remove('btn-success');
    connexionBtn.classList.add('btn-primary');

    connexionForm.reset();
});

// Gestion du clic sur le bouton connexion / enregistrer
connexionBtn.addEventListener('click', () => {
    if (connexionBtn.textContent === 'Enregistrer') {
        // Ici tu peux ajouter la logique pour créer le compte
        alert('Compte créé avec succès !');
        connected = true;

        // Remettre le bouton à l’état déconnecté
        connexionBtn.textContent = 'Se déconnecter';
        connexionBtn.classList.remove('btn-success');
        connexionBtn.classList.add('btn-primary');
        creationCompte.style.display = 'none';
        annulerBtn.style.display = 'none';
        creerCompteBtn.style.display = 'inline-block';
        connexionForm.reset();
    } else if (connexionBtn.textContent === 'Se connecter') {
        // Logique de connexion
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email && password) {
            alert('Connecté !');
            connected = true;
            connexionBtn.textContent = 'Se déconnecter';
            connexionForm.reset();
        } else {
            alert('Veuillez entrer email et mot de passe');
        }
    } else if (connexionBtn.textContent === 'Se déconnecter') {
        // Logique de déconnexion
        connected = false;
        connexionBtn.textContent = 'Se connecter';
        alert('Déconnecté !');
    }
});
