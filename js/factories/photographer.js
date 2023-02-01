// Design pattern factory for photographers

function photographerFactory(data) {
    const { name, city, country, portrait, tagline, price, id } = data;
    //console.log({data} );
    const picture = `assets/photographers/${portrait}`;


    function createPhotographerCardDOM() {
      const article = document.createElement( 'article' );
      article.classList.add('photographer-card') // je crée un article avec les infos photographes

      const link = document.createElement('a');  //je crée un lien
      link.setAttribute("href", `photographer.html?id=${id}` );
      link.classList.add("photographer-card__link");  // j'ajoute la classe "photographerPage__link"

      const img = document.createElement('img'); //je crée l'avatar
      img.classList.add('photographer__avatar');
      img.setAttribute("src", picture);
      img.setAttribute("alt", ` `);
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", `Accéder à la page de ${name}`);

      const photographerName = document.createElement( 'h2' ); //je crée le nom/prénom
      photographerName.classList.add('photographer-name');
      photographerName.innerHTML = name;

      const location = document.createElement('p'); //je crée une balise pour la ville
      location.classList.add('photographer-location');
      location.innerHTML = `${city}, ${country}`;

      const quote = document.createElement( 'p' ); //je crée une balise pour la citation
      quote.innerHTML = tagline;

      const pricePerDay = document.createElement('p');  //je crée un emplacement pour le tarif
      pricePerDay.classList.add('pricePerDay');
      pricePerDay.innerHTML = `${price}€/jour`;

      link.appendChild(img); //j'insère mes éléments créés dans leur emplacement
      link.appendChild(photographerName);

      article.appendChild(link);
      article.appendChild(location);
      article.appendChild(quote);
      article.appendChild(pricePerDay);
      //console.log( {article});
      return article;
    }

    // function createPhotographerHeader() {
    //     const photographerHeader = document.createElement('div');
    //     photographerHeader.classList.add('photographer-header-infos');
    //     photographerHeader.innerHTML = `${actualPhotographer.name}`;

    //     return photographerHeader;

    // }

    function createPhotographerPriceDOM() {

      //const $photographerPrice = document.getElementById('photographer-likes-price');
      //console.log($photographerPrice);

      const price = document.createElement('p');
      price.classList.add('photographer-price');
      price.innerHTML = `${price}€/jour`;

      return price
    }

  //   function displayPhotographerHeader(currentPhotographer) {
  //     const actualPhotographer = currentPhotographer;

  //     const photographerHeaderInfos = `
  //   <div class="photographer-header-infos">
  //     <h1 class="photographer-header-name">${actualPhotographer.name}</h1>
  //     <p class="photographer-location">${actualPhotographer.city}, ${actualPhotographer.country}</p>
  //     <p>${actualPhotographer.tagline}</p>
  //   </div>
  //   <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
  //   <div>
  //     <img class="photographer__avatar" src="/assets/photographers/${actualPhotographer.portrait}" alt="avatar du photographe ${actualPhotographer.name}">
  //   </div>
  // `;
  // $header.innerHTML = photographerHeaderInfos;
  // return $header
  //   }

    return { name, createPhotographerCardDOM, createPhotographerPriceDOM }
};
//createPhotographerPriceDOM
