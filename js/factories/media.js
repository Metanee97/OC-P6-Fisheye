//function factory for medias
function mediaFactory(media) {
  const { image } = media;

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
    <article class="media-item"  >
      <a class="media-item__link" id="${media.id}" data-type="image" href="#" data-href="./assets/images/${media.photographerId}/${media.image}" onclick="Lightbox.openLightbox(this)" aria-label="${media.title} Closeup View">
        <img class="media-item__img" src="./assets/images/${media.photographerId}/${media.image}" alt="${media.title}">
      </a>
      <div class="media-item__footer">
        <p class="title-media">${media.title}</p>
        <div class="media-item__likes-section">
          <p class="nbLikes">${media.likes}</p>
          <button class="btnLikes" onclick="addLikes(this)" aria-label="likes">
            <i class="fas fa-heart likes-icon likes-clicked" aria-hidden="true"></i>
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
    <article class="media-item" >
      <a class="media-item__link" id="${media.id}" data-type="video" data-href="./assets/images/${media.photographerId}/${media.video}" onclick="Lightbox.openLightbox(this)" onclick="openLightbox()">
        <video class="media-item__video" preload="auto" controls width="250">
        <source src="./assets/images/${media.photographerId}/${media.video}" type="video/mp4">
        </video>
      </a>
      <div class="media-item__footer">
        <p class="title-media" >${media.title}</p>
        <div class="media-item__likes-section">
          <p id="nbLikes">${media.likes}</p>
          <button class="btnLikes" onclick="addLikes(this)" aria-label="likes">
            <i class="fas fa-heart likes-icon" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </article>
  `;
  }
  return { createHTMLCard }
}
