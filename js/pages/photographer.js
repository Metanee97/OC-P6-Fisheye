
//HEADER

//fonction pour récupérer toutes les données JSON
async function getAllDatas() {
  return fetch('../data/photographers.json')
      .then(res => {
          return res.json();
      })
      .then(dataJSON => {
          return dataJSON;
      })
};

//récupération de l'ID dans l'url
const urlParams = new URLSearchParams(window.location.search);
const id_param = urlParams.get('id');
const id_paramNumb = parseInt(id_param);

//je cible la section photographer-header dans le DOM
const $header = document.querySelector('.photographer-header');

// fonction qui filtre les résultats JSON pour trouver l'id du photographe courant
async function getOnePhotographer() {

 const { photographers } = await getAllDatas();
 let currentPhotographer = photographers.find(element => element.id == id_param);

 return currentPhotographer;
};

// fonction pour afficher infos du photographe courant
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



// SECTION MEDIAS //

//je cible la section médias
const $mediaSection = document.querySelector('.photographer-media');

//fonction asynchrone pour afficher les données médias
async function displayMedias() {

  const { media } = await getAllDatas();
  const mediasToDisplay = media.filter(media => media.photographerId === id_paramNumb);

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
  //console.log(photographerToDisplay);
  displayPhotographerHeader(photographerToDisplay);
  //displayMedias();
  displayPhotographerName(photographerToDisplay);
  displayMedias();
 };

init();
