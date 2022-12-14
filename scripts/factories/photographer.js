// Design pattern factory for photographers

function photographerFactory(data) {
    const { name, city, country, portrait, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

      const article = document.createElement( 'article' ); // je crée un article avec les infos photographes

      const link = document.createElement('a');  //je crée un lien
      // link.setAttribute("href", `photographer.html?${id}`)
      link.classList.add("photographerPage__link")  // j'ajoute la classe "photographerPage__link"

      const img = document.createElement('img'); //je crée l'avatar
      img.setAttribute("src", picture);
      img.setAttribute("alt", `Portrait de ${name}`);

      const photographerName = document.createElement( 'h2' ); //je crée le nom/prénom
      photographerName.classList.add('photographer-name');
      photographerName.innerHTML = name;

      const location = document.createElement('p'); //je crée une balise pour la ville
      location.classList.add('location');
      location.innerHTML = `${city}, ${country}`;


      const quote = document.createElement( 'p' ); //je crée une balise pour la citation
      quote.innerHTML = tagline;

      const pricePerDay = document.createElement('p');  //je crée un emplacement pour le tarif
      pricePerDay.classList.add('pricePerDay');
      pricePerDay.innerHTML = `${price}€/jour`;

      link.appendChild(img); //j'insère mes éléments créés dans leur emplacement
      link.appendChild(photographerName);

      article.appendChild(link)
      article.appendChild(location);
      article.appendChild(quote);
      article.appendChild(pricePerDay);

      return (article);
    }
    return { name, picture, getUserCardDOM }
}
