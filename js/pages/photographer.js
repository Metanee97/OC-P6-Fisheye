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



// fonction qui filtre les résultats JSON pour trouver l'id du photographe choisi
// OK
async function getOnePhotographer() {
  //je récupère l'ID dans l'url:
  const urlParams = new URLSearchParams(window.location.search);
  const id_param = urlParams.get('id');
  //console.log(id_param);

//je place les datas photographes ds 1 constante:
 const { photographers } = await getAllDatas();
 //console.log(photographers);

 // Je cherche l'ID dans tous les photographes
 let currentPhotographer = photographers.find(element => element.id == id_param);
 console.log(currentPhotographer);

 return currentPhotographer;
};
//getOnePhotographer()
//console.log(getOnePhotographer());



// fonction pour afficher infos du photographe
// OK
async function createPhotographerHeader(currentPhotographer) {

  // je place le résultat attendu dans datas
  const datas = await currentPhotographer;
  //console.log(datas)

  //je cible la section photographer-header dans le DOM
  const $header = document.querySelector('.photographer-header');

  //je crée ma structure HTML
  const photographerHeaderInfos = `
    <div class="photographer-header-infos">
      <h1>${datas.name}</h1>
      <p class="location">${datas.city}, ${datas.country}</p>
      <p>${datas.tagline}</p>
    </div>
    <div class="photographer-header__contact-btn">
      <button class="contact_button"></button>
    </div>
    <div class="photographer-header__avatar">
      <img src="/assets/photographers/${datas.portrait}" alt="avatar du photographe ${datas.name}">
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



init();
