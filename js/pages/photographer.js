//Mettre le code JavaScript lié à la page photographer.html

//HEADER

function getPhotographerHeader(data) {
  const { name, city, country, tagline, portrait } = data;
  const $header = document.querySelector('photograph-header');
  console.log($header);

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

async function display(medias) {

	const $mediaSection = document.querySelector("photographer-media");

    medias.forEach((media) => {
      const mediaModel = mediaFactory(media);
		  mediaFactory(media);
      //const userCardDOM = mediaModel.getUserCardDOM();
       $mediaSection.appendChild(mediaModel);
    });
};


//Paramètres de l'url
// function getPhotographerHeader(data) {

//   const { name, city, country, picture, tagline } = data;

//   const urlParams = new URLSearchParams(window.location.search);
//   console.log(urlParams);

//   const namePhotographer = urlParams.get('name');
//   console.log(namePhotographer);

  //je récupère toutes les données url
  // const city = urlParams.get('city');
  // const country = urlParams.get('country');
  // const picture = urlParams.get('picture');
  // const quote = urlParams.get('tagline');
  // console.log(city);

  // je cible l'élément du DOM
  // const $photographerPart = document.querySelector("photograph-header");

  // je crée une balise <article> pour les infos du photographe et je lui donne une classe
  // const article = document.createElement( 'article' );
  // article.classList.add('photographer-infos');

  //je crée le nom
  // const nameP = document.createElement("h1");
  // nameP.innerHTML = namePhotographer;

  // je crée la ville
  // const location = document.createElement("h2");
  // location.innerHTML = '${city}, ${country}';

  //je crée la quote
  // const tagline = document.createElement("p");
  // tagline.innerHTML = quote;

  // je crée un avatar et complète les attributs
  // const avatar = document.createElement('img'); //je crée l'avatar
  // img.classList.add('avatar');
  // img.setAttribute("src", picture);
  // img.setAttribute("alt", `Portrait de ${namePhotographer}`);
  // img.setAttribute("role", "button");
  // img.setAttribute("aria-label", `Accéder à la page de ${namePhotographer}`);

  //j'insère les nouveaux éléments dans la page
  // $photographerPart.appendChild(article);

  // article.appendChild(avatar);
  // article.appendChild(location);

//   return (article);
// };
