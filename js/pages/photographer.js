
////////////////////////  PHOTOGRAPHER HEADER  ///////////////////////////////////////

// Récupérer toutes les données JSON
async function getAllDatas() {
  return fetch('../data/photographers.json')
      .then(res => {
          return res.json();
      })
      .then(dataJSON => {
          return dataJSON;
      })
};


//récupération de l'Id dans l'url du photographe cliqué
const urlParams = new URLSearchParams(window.location.search);
const id_param = urlParams.get('id');
const id_paramNumb = parseInt(id_param);

// Section photographer-header sur page photographer.html
const $header = document.querySelector('.photographer-header');

// trouve le photographe courant parmi tous les photographes
async function getOnePhotographer() {
 const { photographers } = await getAllDatas();
 let currentPhotographer = photographers.find(element => element.id == id_param);
 return currentPhotographer;
};


// afficher infos du photographe courant dans le photographer-header
async function displayPhotographerHeader(currentPhotographer) {
  const actualPhotographer = await currentPhotographer;

  const photographerHeaderInfos = `
    <div class="photographer-header-infos">
      <h1 class="photographer-header-name">${actualPhotographer.name}</h1>
      <p class="photographer-location">${actualPhotographer.city}, ${actualPhotographer.country}</p>
      <p>${actualPhotographer.tagline}</p>
    </div>
    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <div>
      <img class="photographer__avatar" src="/assets/photographers/${actualPhotographer.portrait}" alt="avatar du photographe ${actualPhotographer.name}">
    </div>
  `;
  $header.innerHTML = photographerHeaderInfos;
  return $header
};







////////////////////////  SECCTION MEDIAS  ///////////////////////////////////////

// cible la section médias
const $mediaSection = document.querySelector('.photographer-media');

// Afficher les médias : img, nom, likes
async function displayMedias() {

  const { media } = await getAllDatas(); // renvoie un array des médias tous photographes confondus

  const mediasToDisplay = media.filter(media => media.photographerId === id_paramNumb); //renvoie un array des médias du photographe en cours

  let DOM = "";

  mediasToDisplay.forEach(media => {
    const mediaModel = mediaFactory(media);
    DOM += mediaModel.sortMedias().createHTMLCard();
  });

    $mediaSection.innerHTML = DOM;
};



// fonction d'exécution
 async function init() {

  const photographerToDisplay = await getOnePhotographer();
  displayPhotographerHeader(photographerToDisplay);
  displayPhotographerName(photographerToDisplay);
  displayMedias();
 };


init();
