////////////////////////
//PHOTOGRAPHER HEADER
///////////////////////////////////////

// get all JSON datas
async function getAllDatas() {
  return fetch('../data/photographers.json')
      .then(res => {
          return res.json();
      })
      .then(dataJSON => {
          return dataJSON;
      })
};


// get the photograoher's id in the url
const urlParams = new URLSearchParams(window.location.search);
const id_param = urlParams.get('id');
const id_paramNumb = parseInt(id_param);

//DOM
const $header = document.querySelector('.photographer-header');


// find the current photographer
async function getOnePhotographer() {
 const { photographers } = await getAllDatas();

 let currentPhotographer = photographers.find(element => element.id === id_paramNumb);
 return currentPhotographer;
};


// display photographer's infos in photographer's header section
async function displayPhotographerHeader(currentPhotographer) {
  const actualPhotographer = await currentPhotographer;

  const photographerHeaderInfos = `
    <div class="photographer-header-infos">
      <h1 class="photographer-header-name">${actualPhotographer.name}</h1>
      <p class="photographer-location">${actualPhotographer.city}, ${actualPhotographer.country}</p>
      <p>${actualPhotographer.tagline}</p>
    </div>
    <button class="contact-button" onclick="displayModal()">Contactez-moi</button>
    <div>
      <img class="photographer__avatar" src="/assets/photographers/${actualPhotographer.portrait}" alt=" ">
    </div>
  `;
  $header.innerHTML = photographerHeaderInfos;
  return $header
};

///////////////////////////////////////////////////////////////
// SECTION MEDIAS
///////////////////////////////////////////////////////////////

////////////////////////
// FILTER DROPDOWN
////////////////////////

// DOM
const $select = document.querySelector("#filter");
const $optionList = document.querySelector(".option-container");
const $options = document.querySelectorAll(".optionSpan");
const $choice = document.querySelector(".choice");
const $sortBtn = document.getElementById('sort-control');
const $sortArrow = document.querySelector('.sort-arrow');
const $wrapperPage = document.getElementById('main-wrapper');

// Functions to open the dropdown options
function openSelect() {
  $optionList.classList.toggle("option-container__open");
  $choice.focus();
  let attribute = $choice.getAttribute('aria-expanded');

  if ($optionList.classList.contains("option-container__open")) {
    $select.setAttribute('aria-expanded', 'true')
    $optionList.setAttribute('aria-hidden', 'false')
    $wrapperPage.setAttribute("aria-hidden", "true")
    $sortArrow.classList.add('up');
  } else {
    $select.setAttribute('aria-expanded', 'false')
    $optionList.setAttribute('aria-hidden', 'true')
    $wrapperPage.setAttribute("aria-hidden", "false")
    $sortArrow.classList.remove('up');
  }
}

function selectOption(element) {
  if($optionList.classList.contains("option-container__open")){
    $options.forEach(option => {
      option.classList.remove("selected")
      option.setAttribute('aria-selected', 'false')
    })
    element.classList.add("selected")
    element.setAttribute('aria-selected', 'true')
    $choice.innerHTML = element.innerHTML
    $select.setAttribute('aria-activedescendant', element.getAttribute('id'))
  }
}

$select.addEventListener("click", openSelect);

$options.forEach(option => {
    option.addEventListener("click", (e)=> {
        let element = e.target
        selectOption(element)
    })
});




// MANAGE THE FOCUS OF THE DROPDOWN FILTER
$select.addEventListener('keydown', function(e) {
  console.log($optionList.getAttribute('aria-hidden'));
  if(e.key === 'Tab' && $optionList.getAttribute('aria-hidden') == 'false') {
    sortFocus(e)
  }
})

const sortFocus = function(e) {
  e.preventDefault()
  e.stopPropagation()
  const $focusableEl = Array.from($select.querySelectorAll('a:not(.selected)'));

  let index = $focusableEl.findIndex(element => element === $select.querySelector(':focus'));
  if (e.shiftKey === true) {
    index--
  } else {
    index++
  }
  if (index >= $focusableEl.length) {
    index = 0
  }
  if (index < 0) {
    index = $focusableEl.length - 1
  }
  $focusableEl[index].focus();
}



// SETTINGS OF THE FILTER
const sortOrder = Object.freeze({
  favorite: 'likes',
  title: 'title',
  date: 'date'
});

// Display medias : popularity sorting by default
async function displayMedias(sortOrder, desc = false) {

  const $mediaSection = document.querySelector('.photographer-media');
  const { media } = await getAllDatas();
  const mediasToDisplay = media.filter(media => media.photographerId === id_paramNumb);

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

function changeSort(currentOption) {
  const currentValueOption = currentOption.getAttribute("value");
  if (currentValueOption == 'title') displayMedias(sortOrder.title);
  if (currentValueOption == 'popularity') displayMedias(sortOrder.favorite, true);
}


////////////////////////
//  PHOTOGRAPHER'S PRICE
////////////////////////


//  fonction affichage prix photographe sur photographe.html
async function displayPhotographerPrice(currentPhotographer) {

  const $photographerPrice = document.getElementById('photographer-likes-price');
  const actualPhotographer = await currentPhotographer;

  const price = document.createElement('p');
  price.classList.add('photographer-price');
  price.innerHTML = `${actualPhotographer.price}€/jour`;

  return $photographerPrice.appendChild(price);
}

////////////////////////
//      LIKES
////////////////////////

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
      <i class="fas fa-heart" aria-hidden="true"></i>
    </p>
  `
   totalLikes.innerHTML = likesMedia;
  return $photographerPrice.insertAdjacentHTML('afterbegin', totalLikes);
}

function addLikes(target) {
  let $nbLikes = parseInt(target.previousElementSibling.innerText);

  $nbLikes = $nbLikes+1;
  target.previousElementSibling.innerText = $nbLikes;

  let totalLikes = parseInt(document.querySelector('.photographer-likes span').innerText);
  totalLikes = totalLikes+1;

  document.querySelector('.photographer-likes span').innerText = totalLikes;
  target.removeAttribute('onclick')
}



async function init() {

  const photographerToDisplay = await getOnePhotographer();

  displayPhotographerHeader(photographerToDisplay);
  displayPhotographerName(photographerToDisplay);  //pour le contact form
  displayMedias(sortOrder.favorite, true);
  displayPhotographerPrice(photographerToDisplay)
  displayTotalLikes();
 };


init();
