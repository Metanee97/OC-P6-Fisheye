// //Mettre le code JavaScript lié à la page photographer.html


// //HEADER

//fonction pour récupérer les données JSON
function getAllPhotographers() {
  return fetch('../data/photographers.json')
      .then(res => {
          return res.json();
      })
      .then(dataJSON => {
          return dataJSON;
      })
}

//fonction qui filtre les résultats JSON pour trouver l'id du photographe choisi
async function getOnePhotographer() {
  const urlParams = new URLSearchParams(window.location.search);
  const id_param = urlParams.get('id');
  //console.log(id_param);

 const { photographers } = await getAllPhotographers();
 //console.log(photographers);

 return photographers.find(element => element.id == id_param);

 //return currentPhotographer;
 //console.log(test);
};

// peut être placé dans dossier JS/Templates
// fonction pour afficher infos du photographe
async function createPhotographerHeader() {
  //const { name, city, country, tagline, portrait } = data;
  const $header = document.querySelector('photograph-header');

  const photographHeaderInfos = `
    <div class="photograph-header-infos">
      <h1>${name}</h1>
      <p class="location">${city}, ${country}</p>
      <p>${tagline}</p>
    </div>
    <div class="photograph-header__contact-btn">
      <button class="contact_button"></button>
    </div>
    <div class="photograph-header__avatar">
      <img src="/assets/photographers/${portrait}" alt="avatar du photographe ${name}">
    </div>
  `;

  $header.innerHTML(photographHeaderInfos);

  return $header
}

//fonction async pour afficher données
async function displayPhotographer() {

  const currentPhotographer = await getOnePhotographer(); // j'obtiens un objet
  console.log(currentPhotographer)
  //const { name, city, country, tagline, portrait } = currentPhotographer;
  //console.log(name);
  createPhotographerHeader(currentPhotographer);

};

displayPhotographer();

// // fonction asynchrone pour exécuter les deux précédentes fonctions
 //async function init() {

// 3) fonction display photographerHeader
//console.log(getOnePhotographer());
    //const { photographers } = await getPhotographers();

    //displayPhotographer(photographers);
    //console.log(getOnePhotographer);
//};

//init();


// async function displayMedias(medias) {

// 	const $mediaSection = document.querySelector("photographer-media");

//     medias.forEach((media) => {
//       const mediaModel = mediaFactory(media);
// 		  mediaFactory(media);
//       //const userCardDOM = mediaModel.getUserCardDOM();
//        $mediaSection.appendChild(mediaModel);
//     });
// };
