//HEADER

//fonction pour récupérer toutes les données JSON
// OK
async function getAllDatas() {
  return fetch('../data/photographers.json')
      .then(res => {
          return res.json();
      })
      .then(dataJSON => {
          return dataJSON;
          //console.log(dataJSON);
      })
};
//getAllDatas();

//je récupère l'ID dans l'url:
const urlParams = new URLSearchParams(window.location.search);
const id_param = urlParams.get('id');
//console.log(id_param);

// fonction qui filtre les résultats JSON pour trouver l'id du photographe choisi
// OK
async function getOnePhotographer() {

//je place les datas photographes ds 1 constante:
 const { photographers } = await getAllDatas();
 //console.log(photographers);

 // Je cherche l'ID dans tous les photographes
 let currentPhotographer = photographers.find(element => element.id == id_param);
 //console.log(currentPhotographer);

 return currentPhotographer;
};
//getOnePhotographer()
//console.log(getOnePhotographer());



// fonction pour afficher infos du photographe
// OK
async function createPhotographerHeader(currentPhotographer) {

  // je place le résultat de fonction getONePhotographer dans datas
  const datas = await currentPhotographer;
  //console.log(datas)

  //je cible la section photographer-header dans le DOM
  const $header = document.querySelector('.photographer-header');

  //je crée ma structure HTML
  const photographerHeaderInfos = `
    <div class="photographer-header-infos">
      <h1 class="photographer-header-name">${datas.name}</h1>
      <p class="photographer-header-location">${datas.city}, ${datas.country}</p>
      <p>${datas.tagline}</p>
    </div>
    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <div>
      <img class="photographer__avatar" src="/assets/photographers/${datas.portrait}" alt="avatar du photographe ${datas.name}">
    </div>
  `;

  //j'insérer ma structure dans le HTML
  $header.innerHTML = photographerHeaderInfos;

  return $header
};
//createPhotographerHeader(getOnePhotographer());


// fonction qui exécute toutes les fonctions
// OK
async function init() {

  const photographerToDisplay = getOnePhotographer();
  createPhotographerHeader(photographerToDisplay);
};


// fonction qui exécute l'ensemble des fonctions d'affichage du photographe - OK
init();



// SECTION MEDIAS //


async function displayMedias() {
  // récupère uniquement les médias du fichier JSON
  const { media } = await getAllDatas();
  // console.log(media); OK affiche tous les médias
  const $mediaSection = document.querySelector(".photographer-media");
  //parcourt les médias et affiche uniquement ceux de l'id de l'url de la page
  media.forEach((element) => {
    if (element.photographerId == id_param) {
      //mettre fonction création média dans une variable
      const mediaModel = mediaFactory(element);
      const mediaCardDOM = mediaModel.createMediaGridDom();
      // console.log(element); OK affiche chaque medi avec le bon ID
      console.log(mediaModel)
      $mediaSection.appendChild(mediaCardDOM);
    }
  });
};

displayMedias()

// console.log(await getMedias());
// récupérer les objets médias du json
// dans les objets médias, chercher les medias de l'id
// filtrer uniquement les photos
