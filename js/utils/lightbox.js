
// lightbox factory
// dedans fonction avec if qui redirige vers template img ou template video

//fonction qui crée template img

//fonction qui crée le template video

//fonction display qui utilise la fonction lightbox factory

displayMedias();

function lightboxFactory(media) {
  const { image } = media;

  function sortlightbox() {
    if (image) return templateImage(media);
      else return templateVideo(media);
  }
  return { sortLightbox }
}


/*function templateImage(media) {
  function createHTMLimg() {
    return `
      <button class="lightbox-close"  onclick="closeLightbox()">
            <img src="assets/icons/close-lightbox.svg" alt="croix pour fermer la lightbox" width="100%">
          </button>

        <p>ça fonctionne</p>

        <button class="lightbox-prev ">
            <img src="assets/icons/next.svg" alt="chevron d'affichage image précédente" width="100%">
          </button>

          <div class="lightbox-content">
            <img src="/assets/images/${media.photographerId}/${media.image}" alt="" width="500px" >
          </div>

          <button class="lightbox-next">
            <img src="assets/icons/next.svg" alt="chevron d'affichage image suivante" width="100%">
          </button>
          `
  }
  return { createHTMLimg }
}*/




// function displayLightbox(event) {
  // event.preventDefault();
  // const $lightbox = document.getElementById('lightbox-container');
  // $lightbox.innerHTML = templateLightbox();
  // console.log($lightbox);

// };






// function createLightbox(media) {

//   console.log( "createLightbox()" );
//   console.log(media);
//   console.log( "end createLightbox()" );


//   const $lightboxContainer = document.querySelector('#lightbox-container');
//   console.log($lightboxContainer);

//   const lightbox = document.createElement('div')
//   lightbox.classList.add('lightbox')
//   lightbox.innerHTML = `
//   <button class="lightbox-close"  onclick="closeLightbox()">
//           <img src="assets/icons/close-lightbox.svg" alt="croix pour fermer la lightbox" width="100%">
//         </button>
//       <p>ça fonctionne</p>
//       <button class="lightbox-prev ">
//           <img src="assets/icons/next.svg" alt="chevron d'affichage image précédente" width="100%">
//         </button>
//         <div class="lightbox-content">
//            <img src="assets/images/${media.photographerId}/${media.image}" alt="" width="500px" >
//         </div>
//         <button class="lightbox-next">
//           <img src="assets/icons/next.svg" alt="chevron d'affichage image suivante" width="100%">
//         </button>
//         `
//          $lightboxContainer.innerHTML = lightbox

//          return $lightboxContainer
// }

//createLightbox();




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
