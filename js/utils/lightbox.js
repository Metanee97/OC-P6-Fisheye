// DOM
const $sectionMedias = document.querySelector('.photographer-media');
const $closeButtonLightbox = document.querySelector('.lightbox-close');
console.log($closeButtonLightbox); //OK

//Evènement
$sectionMedias.addEventListener("click", function(e) {
  if (e.target.classList.contains('media__item')) {
    openLightbox();
  }
});

// Ouverture lightbox
function openLightbox() {
  const lightbox = document.getElementById('lightbox');
  //console.log(lightbox)// ok
  lightbox.style.display= "block";
};

openLightbox();

//fermeture de la lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none";
}



// factory lightbox
//factory DOM lightbox
// function templateLightbox(media) {
//   return `
//     <img class="media__item-image" src="/assets/images/${media.photographerId}/${media.image}">

//   `
// }
