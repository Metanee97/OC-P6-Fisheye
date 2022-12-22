//Mettre le code JavaScript lié à la page photographer.html


//HEADER
// récupérer les données JSON
// filtrer pour avoir les données d'UN photographe
async function getPhotographers() {
  return fetch('../data/photographers.json')
      .then(res => {
          return res.json();

      })
      .then(dataJSON => {
        //return dataJSON.find()
        // find ou for each pour chercher ID voulu
          console.log(dataJSON);
      })
}

async function getOnePhotographer() {
  const urlParams = new URLSearchParams(window.location.search);
  const id_param = urlParams.get('id');

  const currentOne = photographers.find(id == id_param);
  //return currentOne;
  console.log(currentOne)

};


function createPhotographerHeader(data) {
  const { name, city, country, tagline, portrait } = data;
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


async function displayMedias(medias) {

	const $mediaSection = document.querySelector("photographer-media");

    medias.forEach((media) => {
      const mediaModel = mediaFactory(media);
		  mediaFactory(media);
      //const userCardDOM = mediaModel.getUserCardDOM();
       $mediaSection.appendChild(mediaModel);
    });
};


// fonction asynchrone pour exécuter les deux précédentes fonctions
 async function init() {
// 1) Récupérer ID de l'url pour savoir quel photographe afficher

// 2) Charger tous les photographes JSON
// getOnePhotographer(id_param)
// 2) a - filtrer le photographe grâce à l'id (fonction find ou forEach avec if si idurl == idphotographer.id)
// 3) fonction display photographerHeader
    const { photographers } = await getPhotographers();

    displayData(photographers);
    console.log(getOnePhotographer);
};

init();
