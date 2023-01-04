//fonction media factory pour créer les médias

function mediaFactory(media) {

  if (media.image !== undefined) return templateImage(media);
  else return templateVideo(media);
};

// fonction card DOM image
function templateImage(media) {
  return `
    <div class="media__item">
      <a href="">
        <img class="media__item-image" src="/assets/images/${media.photographerId}/${media.image}">
      </a>
      <p class="title-medias">${media.title}</p>
    </div>
  `;
};

function templateVideo(media) {
  return `
    <div class="media__item">
      <video class="media__item-video" src="/assets/images/${media.photographerId}/${media.video}"></video>
      <p class="title-medias" >${media.title}</p>
    </div>
  `;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//function mediaFactory(datas) {

//   const { photographerId, title, image  } = datas;
//   console.log(photographerId); //OK affiche l'id de l'url
//   const media = `assets/images/${photographerId}/${image}`;

//   function createMediaDOM() {
//     // récupérer données à afficher
//     // cibler DOM
//     const $mediaSection = document.querySelector('.photographer-media');
//     // créer structure
//     const oneMedia = `
//       <article class="media__item">
//         <div>
//           <img class="one-media" src="/assets/images/${media}" alt="">
//         </div>
//         <p>${title}</p>
//       </article>
//     `;

//     // insérer structure
//     $mediaSection.innerHTML = oneMedia;//

//     return $mediaSection;
//    };

//  return createMediaDOM ;
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////





// récupérer tous les médias d'un seul ID
// récupérer les médias dont la propriété est image


// async function mediaFactory(data) {

// 	const { photographerId } = data;
// 	const photographerId_ = `${photographerId}`;
// 	const $mediaSection = document.querySelector("photographer-media");

// 	if (photographerId_ == id_param) {

//     const { photographers } =  await getPhotographers();

//     photographers.forEach((photographer) => {
//       if (photographerId_ == photographer.id) {
//         let name_photographer = photographer.name;
//         let name_split = name_photographer.split(" ");
//         // name_split[0], contient la première partie du name
//         if (name_split[0].includes("-")) {
//           let name_space= name_split[0].replace("-"," ");

//           if (data.image != null) {
//             // On recupere les champs image, title, date et price
//             // de tableau media dans les  données json
//             const { image, title, date, price } = data;
//             const picture = `assets/images/${name_space}/${image}`;
//             const article = document.createElement( 'article' );
//             const img = document.createElement('img');
//             img.classList.add("media");
//             img.setAttribute("src", picture);
//             const quote = document.createElement( 'p' ); //je crée une balise pour la citation
//             const euro="€";
//             quote.innerHTML = `${title}, ${date}, ${price} ${euro} ` ;
//             article.appendChild(img);
//             article.appendChild(quote);
//             $mediaSection.appendChild(article);

//             console.log(picture);

//           } else {
//             const { video, title, date, price } = data;
//             const picture = `assets/images/${name_space}/${video}`;
//             const article = document.createElement( 'article' );
//             const quote = document.createElement( 'p' ); //je crée une balise pour la citation
//             const euro="€";
//             quote.innerHTML = `${title}, ${date}, ${price} ${euro} ` ;

//             // CREATION DE LA BALISE VIDEO HTML
//             const videos = document.createElement( 'video' );
//             videos.src =picture;
//             videos.controls = true;
//             videos.height = 240; // in px
//             videos.width = 320; // in px

//             article.appendChild(videos);
//             article.appendChild(quote);

//             $mediaSection.appendChild(article);
//             }

//           //console.log(name_tiret_split[0]);
//         } else {

//           if (data.image != null) {

//             // On recupere les champs image, title, date et price
//             // de tableau media dans les  données json
//             const { image, title, date, price } = data;
//             let nom = name_split[0];
//             const picture = `assets/images/${nom}/${image}`;
//             const article = document.createElement( 'article' );
//             const img = document.createElement('img');
//             img.setAttribute("src", picture);
//             img.setAttribute("style","width:300px;height:300px");
//             const quote = document.createElement( 'p' ); //je crée une balise pour la citation
//             const euro="€";
//             quote.innerHTML = `${title}, ${date}, ${price} ${euro} ` ;
//             article.appendChild(img);
//             article.appendChild(quote);
//             $mediaSection.appendChild(article);

//             // console.log(picture);
//           } else {
//             const { video, title, date, price } = data;
//             let nom = name_split[0];
//             const picture = `assets/images/${nom}/${video}`;
//             const article = document.createElement( 'article' );
//             const quote = document.createElement( 'p' );
//             const euro="€";
//             quote.innerHTML = `${title}, ${date}, ${price} ${euro} ` ;

//             // CREATION DE LA BALISE VIDEO HTML
//             const videos = document.createElement( 'video' );
//             videos.src = picture;
//             videos.controls = true;
//             videos.height = 240; // in px
//             videos.width = 320; // in px
//             article.appendChild(videos);
//             article.appendChild(quote);
//             $mediaSection.appendChild(article);
//           };
//         };
//       };
//     });
//   };
// };
