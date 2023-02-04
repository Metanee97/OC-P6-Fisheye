
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
const id_param = urlParams.get('id');   //string 243
const id_paramNumb = parseInt(id_param);   //number

//DOM
const $header = document.querySelector('.photographer-header');


// trouve le photographe courant
async function getOnePhotographer() {
 const { photographers } = await getAllDatas();

 let currentPhotographer = photographers.find(element => element.id === id_paramNumb);
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


////////////////////////  SECTION MEDIAS  ///////////////////////////////////////

// DOM
const $mediaSection = document.querySelector('.photographer-media');

const sortOrder = Object.freeze({
  favorite: 'likes',
  title: 'title',
  date: 'date'
});

// Afficher les médias : img, nom, likes
async function displayMedias(sortOrder, desc = false) {

  const { media } = await getAllDatas(); // renvoie un array des médias tous photographes confondus
  const mediasToDisplay = media.filter(media => media.photographerId === id_paramNumb); //renvoie un array des médias du photographe en cours

  mediasToDisplay.sort(function(a, b) {
    if (a[sortOrder] < b[sortOrder]) {
      return -1;
    }
    if (a[sortOrder] > b[sortOrder]) {
      return 1;
    }
    return 0;
  })

  if (desc) mediasToDisplay.reverse();

  let DOM = "";

  mediasToDisplay.forEach(media => {
    const mediaCard = mediaFactory(media);
    DOM += mediaCard.sortMedias().createHTMLCard();
  });

    $mediaSection.innerHTML = DOM;
};

function changeSort(value) {
  if (value == 'title') displayMedias(sortOrder.title);
  if (value == 'popularity') displayMedias(sortOrder.favorite, true);

}


///////////////////////////////////////////////////////////////////////


//  fonction affichage prix photographe sur photographe.html
async function displayPhotographerPrice(currentPhotographer) {

  const $photographerPrice = document.getElementById('photographer-likes-price');
  const actualPhotographer = await currentPhotographer;

  const price = document.createElement('p');
  price.classList.add('photographer-price');
  price.innerHTML = `${actualPhotographer.price}€/jour`;

  return $photographerPrice.appendChild(price);
}




///////////////////////////////////////////////////////////////////////
//      LIKES
//////////////////////////////////////////////////////////////////////
async function getAllLikes() {

  const { media } = await getAllDatas();
  const mediasToDisplay = media.filter(media => media.photographerId === id_paramNumb);

  let likes = [];

  mediasToDisplay.forEach(element => {
    likes.push(element.likes)
  });
  return likes
}


async function sumOfLikes() {
  let allLikes = await getAllLikes();

  let sumOfLikes = 0;

  for (let like of allLikes) {
    sumOfLikes += like;
  }
  return sumOfLikes;
}



async function displayTotalLikes() {
  let likesMedia = await sumOfLikes();
  const $photographerPrice = document.getElementById('photographer-likes-price');

  const totalLikes = `
    <p class="photographer-likes"><span>${likesMedia}</span>
      <i class="fas fa-heart"></i>
    </p>
  `
   totalLikes.innerHTML = likesMedia;
  return $photographerPrice.insertAdjacentHTML('afterbegin', totalLikes);
}


function addLikes(target) {
  let nbLikes = parseInt(target.previousElementSibling.innerText);
  nbLikes = nbLikes+1;
  target.previousElementSibling.innerText = nbLikes;
  // target.classList.add('likes-clicked')

  let totalLikes = parseInt(document.querySelector('.photographer-likes span').innerText);
  totalLikes = totalLikes+1;

  document.querySelector('.photographer-likes span').innerText = totalLikes;

  target.removeAttribute('onclick')

}

///////////////////////////////////////////////////////////////////////
// Focus

// function trapFocus(element) {


// const focusableElements = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');

// console.log(focusableElements);


// const firstFocusableElement = focusableElements[0];
// const lastFocusableElement = focusableElements[focusableElements.length - 1];
// const KEYCODE_TAB = 9;

// }

// console.log(firstFocusableElement, lastFocusableElement );



// element.addEventListener('keydown', function(e) {
//   if (e.key === 'Tab' || e.keyCode === KEYCODE_TAB) {
//     if ( e.shiftKey ) /* shift + tab */ {
//       if (document.activeElement === firstFocusableElement) {
//         lastFocusableElement.focus();
//         e.preventDefault();
//       }
//     } else /* tab */ {
//       if (document.activeElement === lastFocusableElement) {
//         firstFocusableElement.focus();
//         e.preventDefault();
//       }
//     }
//   }
// });
///////////////////////////////////////////////////////////////////////

async function init() {

  const photographerToDisplay = await getOnePhotographer();

  displayPhotographerHeader(photographerToDisplay);
  displayPhotographerName(photographerToDisplay);  //pour le contact form
  displayMedias(sortOrder.favorite, true);
  displayPhotographerPrice(photographerToDisplay)
  displayTotalLikes();
 };


init();
