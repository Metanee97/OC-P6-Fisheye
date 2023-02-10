// Design pattern factory for photographers

function photographerFactory(data) {
    const { name, city, country, portrait, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;


    function createPhotographerCardDOM() {
      const article = document.createElement( 'article' );
      article.classList.add('photographer-card')

      const link = document.createElement('a');
      link.setAttribute("href", `photographer.html?id=${id}` );
      link.classList.add("photographer-card__link");
      link.setAttribute("aria-label", `${name}`);

      const img = document.createElement('img');
      img.classList.add('photographer__avatar');
      img.setAttribute("src", picture);
      img.setAttribute("alt", ` `);
      img.setAttribute("role", "button");


      const photographerName = document.createElement( 'h2' );
      photographerName.classList.add('photographer-name');
      photographerName.innerHTML = name;

      const location = document.createElement('p');
      location.classList.add('photographer-location');
      location.innerHTML = `${city}, ${country}`;

      const quote = document.createElement( 'p' );
      quote.innerHTML = tagline;

      const pricePerDay = document.createElement('p');
      pricePerDay.classList.add('pricePerDay');
      pricePerDay.innerHTML = `${price}€/jour`;

      link.appendChild(img);
      link.appendChild(photographerName);

      article.appendChild(link);
      article.appendChild(location);
      article.appendChild(quote);
      article.appendChild(pricePerDay);

      return article;
    }


    function createPhotographerPriceDOM() {
      const price = document.createElement('p');
      price.classList.add('photographer-price');
      price.innerHTML = `${price}€/jour`;

      return price
    }

    return { name, createPhotographerCardDOM, createPhotographerPriceDOM }
};
