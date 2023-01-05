// Code de la lightbox


// DOM
const $mediaBtn = document.querySelectorAll('.media__item');
console.log($mediaBtn)

//Evènement
$mediaBtn.forEach((btn) => btn.addEventListener("click", displayLightbox));
//$mediaBtn

// Ouverture lightbox
function displayLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display= "block";
};


//cibler tous les élément media queryselectorall
//gestionnaire pour click et ouverture lightbox
