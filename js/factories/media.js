//fonction media factory pour créer les médias

function mediaFactory(media) {
  const { image } = media;
  //console.log({image});

  function sortMedias() {
    if (image) return templateImage(media);
      else return templateVideo(media);
  }

  return { sortMedias }
};

// fonction card DOM image
function templateImage(media) {
  function createHTMLCard() {
    return `
    <div class="media__item" onclick="displayLighthbox()">
      <a class="media__item" href="">
        <img class="media__item-image" src="/assets/images/${media.photographerId}/${media.image}">
      </a>
      <div class="media-item__footer">
        <p class="title-medias">${media.title}</p>
        <span id="nbLikes">${media.likes}</span>
        <button id="btnLikes">
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
  `;
  }
  return { createHTMLCard }
};

// fonction card DOM video
function templateVideo(media) {
  function createHTMLCard() {
    return `
    <div class="media__item">
      <a class="media__item" href="" onclick="displayLighthbox()">
        <video class="media__item-video" src="/assets/images/${media.photographerId}/${media.video}"></video>
      </a>
      <div class="media-item__footer">
        <p class="title-medias" >${media.title}</p>
        <span id="nbLikes">${media.likes}</span>
        <button id="btnLikes">
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
  `;
  }
  return { createHTMLCard }
}


/////////////////////////////////////////////////:
//////////////////////////TOTAL LIKES//////////////////
//////////////////////////////////////////:











//let numberOfLikes = 0;

// function countOfLikes() {
//   numberOfLikes++;
//   const $mediaSection = document.querySelector('.photographer-media');
//   $mediaSection.addEventListener('click', function (e) {
//     if (e.target.querySelector('#btnLikes') !== null) {
//       console.log('OK')
//     }
//   })
//   //document.getElementById("nbLikes").textContent = numberOfLikes;
// }

// const $mediaSec = document.querySelector('.photographer-media');

// console.log($mediaSec)

//   //$mediaSec.addEventListener('click', function (e) {
//     if ($mediaSec.querySelector('#btnLikes') !== null) {
//       console.log('OK');
//     }
  //})
//let boutonLikes = document.getElementById("btnLikes")
//console.log(boutonLikes);
//.addEventListener("click", countOfLikes);


// container.addEventListener('click', function (e) {
//     // But only alert for elements that have an alert-button class
//     if (e.target.classList.contains('alert-button')) {
//       alert(e.target.innerHTML);
//     }
//   });
