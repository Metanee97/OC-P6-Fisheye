//fonction media factory

async function mediaFactory(data) {

	const { photographerId } = data;
	const photographerId_ = `${photographerId}`;
	const $mediaSection = document.querySelector("photograph-media");

	if(photographerId_ == id_param) {

		 const { photographers } =  await getPhotographers();

		  photographers.forEach((photographer) => {

			  if(photographerId_==photographer.id){

        let name_photographer=photographer.name;
				let name_split=name_photographer.split(" ");

				// name_split[0], contient la première partie du name
				if(name_split[0].includes("-")){

					let name_space= name_split[0].replace("-"," ");

					if(data.image != null){

						    // On recupere les champs image, title, date et price
							// de tableau media dans les  données json

						     const { image, title, date, price } = data;

						     const picture = `assets/images/${name_space}/${image}`;

							 const article = document.createElement( 'article' );


							 const img = document.createElement('img');

							 img.setAttribute("src", picture);

							 img.setAttribute("style","width:300px;height:300px");

							 const quote = document.createElement( 'p' ); //je crée une balise pour la citation

							 const euro="€";

							 quote.innerHTML = `${title}, ${date}, ${price} ${euro} ` ;

							 article.appendChild(img);

							 article.appendChild(quote);


							 mediaSection.appendChild(article);








							 console.log(picture);



					}else{


						     const { video, title, date, price } = data;



						     const picture = `assets/images/${name_space}/${video}`;

							 const article = document.createElement( 'article' );

							 const quote = document.createElement( 'p' ); //je crée une balise pour la citation


							 const euro="€";

							 quote.innerHTML = `${title}, ${date}, ${price} ${euro} ` ;


							 // CREATION DE LA BALISE VIDEO HTML

							 const videos = document.createElement( 'video' );

                             videos.src =picture;

							 videos.controls = true;

							 videos.height = 240; // in px

							 videos.width = 320; // in px

							 article.appendChild(videos);

							 article.appendChild(quote);

							 mediaSection.appendChild(article);







					}


					//console.log(name_tiret_split[0]);


				}else {


				   if(data.image != null){

						    // On recupere les champs image, title, date et price
							// de tableau media dans les  données json

						     const { image, title, date, price } = data;



							 let nom=name_split[0];



						     const picture = `assets/images/${nom}/${image}`;


							 const article = document.createElement( 'article' );


							 const img = document.createElement('img');

							 img.setAttribute("src", picture);

							 img.setAttribute("style","width:300px;height:300px");

							 const quote = document.createElement( 'p' ); //je crée une balise pour la citation

							 const euro="€";

							 quote.innerHTML = `${title}, ${date}, ${price} ${euro} ` ;

							 article.appendChild(img);

							 article.appendChild(quote);


							 mediaSection.appendChild(article);








							// console.log(picture);



					}else{


						     const { video, title, date, price } = data;

							 let nom=name_split[0];



						     const picture = `assets/images/${nom}/${video}`;

							 const article = document.createElement( 'article' );

							 const quote = document.createElement( 'p' ); //je crée une balise pour la citation


							 const euro="€";

							 quote.innerHTML = `${title}, ${date}, ${price} ${euro} ` ;

							 // CREATION DE LA BALISE VIDEO HTML

							 const videos = document.createElement( 'video' );

                             videos.src =picture;

							 videos.controls = true;

							 videos.height = 240; // in px

							 videos.width = 320; // in px

							 article.appendChild(videos);

							 article.appendChild(quote);

							 mediaSection.appendChild(article);







					}










					        // console.log(name_split[0]);



				}





	        //const picture = `assets/images/${image}`;





			  }
		  });

		/*

		if(data.image != null){

			  const { title, image } = data;




		}

		*/


	/*
    const picture = `assets/images/${image}`;
    //function getUserCardDOM() {
      const article = document.createElement( 'article' );
      article.classList.add('photographer-card') // je crée un article avec les infos photographes
      const link = document.createElement('a');  //je crée un lien
      link.setAttribute("href", `photographer.html?id=${id}&name=${name}
	  &city=${city}&country=${country}&picture=${picture}&price=${price}`); //
      console.log("window location")
      link.classList.add("photographerPage__link");  // j'ajoute la classe "photographerPage__link"
      const img = document.createElement('img'); //je crée l'avatar
      img.setAttribute("src", picture);
      img.setAttribute("alt", `Portrait de ${name}`);
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", `Accéder à la page de ${name}`);
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
      article.appendChild(link);
      article.appendChild(location);
      article.appendChild(quote);
      article.appendChild(pricePerDay);
      return (article);


	  */
	}
   // }
    //return { name, picture, getUserCardDOM }
}
