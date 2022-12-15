//Mettre le code JavaScript lié à la page photographer.html

// 2 parties:
// 1) header avec informations du photographes
// 2) la gallerie des médias


// fonction pour avoir UN photographe

// Header

let currentUrl = new URL(document.location)
let idPhotographer = currentUrl.searchParams.get('id');

const photographerCard = document.getElementsByClassName('photographer-card');
const photographHeader = document.querySelector('photograph-header');

photographerCard.addEventListener('click', function() {
  getOnePhotographer(photographers);
})


function getOnePhotographer(data) {
  const { name, city, country, tagline } = data;

  const picture = `assets/photographers/${portrait}`;

  const article = document.createElement( 'article' );

  //création du nom
  const photographerName = document.createElement('h1');
  photographerName.innerHTML = name;


  //création de l'avatar
  const img = document.createElement('img');
  img.setAttribute("src", picture);
  img.setAttribute("alt", `Portrait de ${name}`);

  //insertion dans le DOM
  article.appendChild(photographerName);
  article.appendChild(img);

  return (article);

}
