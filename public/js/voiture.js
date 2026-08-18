// Module JS
const thumbnails = document.querySelectorAll(".thumbnails img");
const mainPhoto = document.getElementById("mainPhoto");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // Ne rien faire si c'est déjà l'image active
    if (thumb.classList.contains("active")) {
      return;
    }

    // Précharger la nouvelle image pour éviter les saccades
    const newImage = new Image();
    newImage.src = thumb.src;

    newImage.onload = () => {
      // Démarrer le fondu de sortie
      mainPhoto.classList.add("fade-out");

      // Attendre la fin du fondu (doit correspondre à la durée CSS : 0.3s)
      setTimeout(() => {
        mainPhoto.src = thumb.src;

        // Forcer un reflow pour assurer la synchronisation
        void mainPhoto.offsetWidth;

        // Fondu d'entrée de la nouvelle image
        mainPhoto.classList.remove("fade-out");

        // Mettre à jour les miniatures actives
        thumbnails.forEach((img) => img.classList.remove("active"));
        thumb.classList.add("active");
      }, 300);
    };
  });
});
