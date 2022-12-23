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

 const currentPhotographer = photographers.find(element => element.id == id_param);

 return currentPhotographer;
 //console.log(currentPhotographer);
};

getOnePhotographer();

// // function createPhotographerHeader(data) {
// //   const { name, city, country, tagline, portrait } = data;
// //   const $header = document.querySelector('photograph-header');

// //   const photographHeaderInfos = `
// //     <div class="photograph-header-infos">
// //       <h1>${name}</h1>
// //       <p class="location">${city}, ${country}</p>
// //       <p>${tagline}</p>
// //     </div>
// //     <div class="photograph-header__contact-btn">
// //       <button class="contact_button"></button>
// //     </div>
// //     <div class="photograph-header__avatar">
// //       <img src="/assets/photographers/${portrait}" alt="avatar du photographe ${name}">
// //     </div>
// //   `;

// //   $header.innerHTML(photographHeaderInfos);

// //   return $header
// // }

// // fonction asynchrone pour exécuter les deux précédentes fonctions
//  async function init() {
// // 1) Récupérer ID de l'url pour savoir quel photographe afficher

// // 2) Charger tous les photographes JSON
// // getOnePhotographer(id_param)
// // 2) a - filtrer le photographe grâce à l'id (fonction find ou forEach avec if si idurl == idphotographer.id)
// // 3) fonction display photographerHeader
//     const { photographers } = await getPhotographers();

//     displayData(photographers);
//     console.log(getOnePhotographer);
// };

// init();


// async function displayMedias(medias) {

// 	const $mediaSection = document.querySelector("photographer-media");

//     medias.forEach((media) => {
//       const mediaModel = mediaFactory(media);
// 		  mediaFactory(media);
//       //const userCardDOM = mediaModel.getUserCardDOM();
//        $mediaSection.appendChild(mediaModel);
//     });
// };
