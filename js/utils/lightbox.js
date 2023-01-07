// DOM
// const $lightbox = document.getElementById('lightbox-container');
//   $lightbox.innerHTML = templateLightbox();
//   console.log(lightbox)
// Ouverture lightbox
function openLightbox() {
  const $lightbox = document.getElementById('lightbox-container');
  $lightbox.innerHTML = templateLightbox();
  console.log(lightbox);
  // $lightbox.style.display= "block";

  // $wrapper.setAttribute("aria-hidden", "false");
  // $lightbox.setAttribute("aria-hidden", "true");
};
 openLightbox();

function templateLightbox() {
  return `
    <div id="lightbox">
      <button class="lightbox-close"  onclick="closeLightbox()">
          <img src="assets/icons/close-lightbox.svg" alt="croix pour fermer la lightbox" width="100%">
        </button>
      <p>ça fonctionne</p>
      <button class="lightbox-prev ">
          <img src="assets/icons/next.svg" alt="chevron d'affichage image précédente" width="100%">
        </button>
        <div class="lightbox-content">
           <img src="assets/images/243/Animals_Rainbow.jpg" alt="" width="500px" >
        </div>
        <button class="lightbox-next">
          <img src="assets/icons/next.svg" alt="chevron d'affichage image suivante" width="100%">
        </button>
    </div>
  `
};


//fermeture de la lightbox
 function closeLightbox() {
  const $lightbox = document.getElementById('lightbox-container');
     $lightbox.classList.add('hidden');
 }



// factory lightbox
//factory DOM lightbox
// function templateLightbox(media) {
//   return `
//     <img class="media__item-image" src="/assets/images/${media.photographerId}/${media.image}">

//   `
// }
