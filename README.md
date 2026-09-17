# 👋 Portfolio — Orhan CICEK

**Développeur Full Stack** — PHP • HTML • CSS • MySQL • JAVA • LARAVEL • Symfony

Bienvenue sur mon portfolio ! Ce site présente mon CV ainsi qu'une sélection de projets front-end réalisés en **HTML, CSS et JavaScript**.

🔗 **Portfolio en ligne :** [orhan54.github.io/portfolio](https://orhan54.github.io/portfolio/)
💻 **Code source :** [github.com/orhan54](https://github.com/orhan54)

> ℹ️ Les 4 projets présentés ici sont **100 % front-end** (aucun back-end, aucune base de données). Ils ne nécessitent donc aucun serveur applicatif — un simple hébergement statique (GitHub Pages) suffit.

---

## 🧭 Sommaire

- [À propos](#-à-propos)
- [Aperçu du portfolio](#-aperçu-du-portfolio)
- [Projets](#-projets)
  - [1. Mon CV](#1-mon-cv)
  - [2. Site pizzeria](#2-site-pizzeria)
  - [3. Calculatrice](#3-calculatrice)
  - [4. Site de supercar](#4-site-de-supercar)
- [Technologies utilisées](#-technologies-utilisées)
- [Structure du dépôt](#-structure-du-dépôt)
- [Lancer le projet en local](#-lancer-le-projet-en-local)
- [Contact](#-contact)

---

## 🎯 À propos

Je m'appelle Orhan CICEK et je code depuis 2023. Passionné par le développement web et logiciel, j'ai appris à utiliser plusieurs langages tels que HTML, CSS, JavaScript, SQL, PHP et Java. J'aime concevoir des projets concrets qui allient design, logique et utilité. Mon objectif est de continuer à progresser, à élargir mes compétences techniques et à créer des applications toujours plus performantes et intuitives.

Depuis la page d'accueil du portfolio, on accède à **4 projets**, chacun présenté sous forme de carte avec sa description et ses technologies.

---

## 🖼️ Aperçu du portfolio

<!-- Ajoute ici une capture d'écran de la page d'accueil de ton portfolio -->
<!-- ![Aperçu du portfolio](./images/portfolio-preview.png) -->

---

## 📂 Projets

### 1. Mon CV

Mon CV interactif a été réalisé en HTML et CSS, avec un design clair et moderne. Il présente mon parcours, mes compétences et est entièrement responsive pour s'adapter à tous les écrans.

**Technologies :** `HTML` `CSS`

---

### 2. Site pizzeria

Un site vitrine moderne pour une pizzeria, réalisé en HTML, CSS et JavaScript, avec un menu interactif, un design responsive et une expérience utilisateur fluide sur tous les écrans.

**Technologies :** `HTML` `CSS` `JavaScript`

---

### 3. Calculatrice

Une calculatrice simple réalisée en HTML, CSS et JavaScript, permettant d'effectuer les opérations de base (addition, soustraction, multiplication, division).

**Technologies :** `HTML` `CSS` `JavaScript`

---

### 4. Site de supercar

Une plateforme web dédiée aux passionnés d'automobiles d'exception, présentant une collection de supercars avec leurs caractéristiques techniques, performances et galeries photos. Le site permet aux utilisateurs de découvrir l'univers des voitures de sport haut de gamme.

**Technologies :** `HTML` `CSS`

---

## 🛠️ Technologies utilisées

| Technologie    | Usage                                       |
| -------------- | ------------------------------------------- |
| **HTML5**      | Structure de toutes les pages               |
| **CSS3**       | Mise en page, responsive design, animations |
| **JavaScript** | Interactivité (pizzeria, calculatrice)      |

Aucun framework, aucune dépendance back-end pour ces 4 projets : l'ensemble du portfolio est statique et peut être hébergé sur n'importe quel service d'hébergement de fichiers statiques (GitHub Pages, Netlify, Vercel, etc.).

> Ma stack plus large (PHP, MySQL, Java, Laravel, Symfony) est mise en pratique sur d'autres projets full-stack, non présentés ici puisqu'ils nécessitent un hébergement serveur.

---

## 📁 Structure du dépôt

```
portfolio/
├── public/
│   ├── index.html          # Page d'accueil du portfolio (présentation + 4 projets)
│   ├── css/
│   │   ├── style.css       # Styles globaux du portfolio
│   │   ├── cv.css          # Styles du projet Mon CV
│   │   ├── pizza.css       # Styles du projet Site pizzeria
│   │   ├── calculatrice.css # Styles du projet Calculatrice
│   │   ├── corvette.css    # Styles du projet Site de supercar
│   │   └── voiture.css     # Styles du projet Site de supercar
│   ├── js/
│   │   └── ...             # Scripts JavaScript (pizzeria, calculatrice)
│   ├── json/
│   │   └── *.json          # Données du menu de la pizzeria (une entrée par pizza)
│   ├── images/
│   │   └── ...             # Images et assets visuels
│   └── view/
│       ├── cv/
│       │   └── cv.html     # Projet 1 : Mon CV
│       ├── pizza/          # Projet 2 : Site pizzeria
│       ├── calculatrice/   # Projet 3 : Calculatrice
│       └── voiture/        # Projet 4 : Site de supercar
└── README.md
```

---

## ⚙️ Lancer le projet en local

Ce portfolio étant 100 % statique, aucune installation n'est nécessaire :

1. Clone le dépôt :
   ```bash
   git clone https://github.com/orhan54/portfolio.git
   ```
2. Ouvre le fichier `public/index.html` directement dans ton navigateur,
   _ou_ lance un petit serveur local (recommandé pour éviter certains soucis de chemins relatifs, notamment pour le chargement des fichiers JSON du menu pizzeria) :
   ```bash
   # avec l'extension "Live Server" de VS Code
   # ou avec Python :
   python -m http.server
   ```
3. Rends-toi sur `http://localhost:8000` (ou l'URL indiquée par ton outil).

---

## 📬 Contact

- **Email :** orhancicek1985@gmail.com
- **GitHub :** [github.com/orhan54](https://github.com/orhan54)
- **Portfolio :** [orhan54.github.io/portfolio](https://orhan54.github.io/portfolio/)

---

<p align="center">Fait avec ❤️ par Orhan CICEK</p>
