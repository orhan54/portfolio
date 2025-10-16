// Module JS
const thumbnails = document.querySelectorAll('.thumbnails img');
const mainPhoto = document.getElementById('mainPhoto');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        // Ne rien faire si c'est déjà l'image active
        if (thumb.classList.contains('active')) {
            return;
        }

        // Précharger la nouvelle image pour éviter les saccades
        const newImage = new Image();
        newImage.src = thumb.src;
        
        newImage.onload = () => {
            // Changer l'image directement
            mainPhoto.src = thumb.src;
            
            // Forcer un reflow pour assurer la synchronisation
            void mainPhoto.offsetWidth;

            // Mettre à jour les miniatures actives
            thumbnails.forEach(img => img.classList.remove('active'));
            thumb.classList.add('active');
        };
    });
});