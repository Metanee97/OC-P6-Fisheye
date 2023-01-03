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
const id_paramNumb = parseInt(id_param);
//console.log(id_paramNumb); // OK
//console.log(id_param);
//je cible la section photographer-header dans le DOM
  const $header = document.querySelector('.photographer-header');


// fonction qui filtre les résultats JSON pour trouver l'id du photographe choisi
// OK
async function getOnePhotographer() {

//je place les photographes ds 1 constante
 const { photographers } = await getAllDatas();
 //console.log(photographers);

 // Je cherche l'ID dans tous les photographes
 let currentPhotographer = photographers.find(element => element.id == id_param);
 //console.log(currentPhotographer); //OK

 return currentPhotographer;
};
//getOnePhotographer()
//console.log(getOnePhotographer());


// fonction pour afficher infos du photographe
// OK
async function displayPhotographerHeader(currentPhotographer) {

  // je place le résultat de fonction getONePhotographer dans datas
  const actualPhotographer = await currentPhotographer;
  // console.log(actualPhotographer)// OK



  //je crée ma structure HTML
  const photographerHeaderInfos = `
    <div class="photographer-header-infos">
      <h1 class="photographer-header-name">${actualPhotographer.name}</h1>
      <p class="photographer-header-location">${actualPhotographer.city}, ${actualPhotographer.country}</p>
      <p>${actualPhotographer.tagline}</p>
    </div>
    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <div>
      <img class="photographer__avatar" src="/assets/photographers/${actualPhotographer.portrait}" alt="avatar du photographe ${actualPhotographer.name}">
    </div>
  `;
  //j'insére ma structure dans le HTML
  $header.innerHTML = photographerHeaderInfos;

  return $header
};

//displayPhotographerHeader(getOnePhotographer());


// fonction qui exécute toutes les fonctions
// OK
 async function init() {

  const photographerToDisplay = await getOnePhotographer();
  //console.log(photographerToDisplay);
  displayPhotographerHeader(photographerToDisplay);


 };

// fonction qui exécute l'ensemble des fonctions d'affichage du photographe - OK
init();



// SECTION MEDIAS //

const $mediaSection = document.querySelector('.photographer-media');

async function displayMedias() {

  const { media } = await getAllDatas();
  const mediasToDisplay = media.filter(media => media.photographerId === id_paramNumb);
  let DOM = "";

  mediasToDisplay.forEach(media => DOM += mediaFactory(media));
  $mediaSection.innerHTML = DOM;
}

displayMedias();


/////////////////////////////////////////////

// async function displayMedias() {
//   // récupère uniquement les médias du fichier JSON:
//   const { media } = await getAllDatas();
//   //console.log(media); //OK affiche tous les médias


//   //parcourt les médias et affiche uniquement ceux de l'id de l'url de la page
//   let DOMToDisplay = "";

//   media.forEach((element) => {
//     if (element.photographerId == id_param) {

//       DOMToDisplay += createMediaDOM(element);
//       //console.log(DOMToDisplay);
//       $mediaSection.innerHTML = DOMToDisplay;
//     }
//   });
// };

// displayMedias();
/////////////////////////////////////////////////////:
// async function getCurrentMedias() {

//   const mediasOfCurrentPhotographer = [];
//   //console.log(mediasOfCurrentPhotographer);

//   const { media } = await getAllDatas();
//   //console.log(media);
//   media.forEach(element => {
//     if (element.photographerId == id_param) {
//      console.log(mediasOfCurrentPhotographer.push(element ++));
//      //console.log(element);

//     }
//   });
// };

//getCurrentMedias();
// async function displayMedia() {
// const $mediaSection = document.querySelector(".photographer-media");

// };
