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
    <article class="media-item" data-id="${media.id}" onclick="openLightbox()">
      <a class="media-item__link" href="/assets/images/${media.photographerId}/${media.image}">
        <img class="media-item__img" src="/assets/images/${media.photographerId}/${media.image}">
      </a>
      <div class="media-item__footer">
        <p class="title-media">${media.title}</p>
        <div class="media-item__likes-section">
          <p id="nbLikes">${media.likes}</p>
          <button id="btnLikes">
            <i class="fas fa-heart likes-icon"></i>
          </button>
        </div>
      </div>
    </article>
  `;
  }
  return { createHTMLCard }
};


// fonction card DOM video
function templateVideo(media) {
  function createHTMLCard() {
    return `
    <article class="media-item" onclick="openLightbox()">
      <a class="media-item__link" href="/assets/images/${media.photographerId}/${media.video}" onclick="displayLighthbox()">
        <video class="media-item__video" preload="auto" autoplay controls>
        <source src="/assets/images/${media.photographerId}/${media.video}" type="video/mp4">
        </video>
      </a>
      <div class="media-item__footer">
        <p class="title-media" >${media.title}</p>
        <div class="media-item__likes-section">
          <p id="nbLikes">${media.likes}</p>
          <button id="btnLikes">
            <i class="fas fa-heart likes-icon"></i>
          </button>
        </div>
      </div>
    </article>
  `;
  }
  return { createHTMLCard }
}
