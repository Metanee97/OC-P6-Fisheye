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
    <div class="media__item" onclick="openLightbox()">
      <a class="media__item" href="" >
        <img class="media__item-image" src="/assets/images/${media.photographerId}/${media.image}">
      </a>
      <div class="media-item__footer">
        <p class="title-medias">${media.title}</p>
        <span>0</span>
        <button>
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
    <div class="media__item" onclick="openLightbox()">
      <a href="">
        <video class="media__item-video" src="/assets/images/${media.photographerId}/${media.video}"></video>
      </a>
      <div class="media-item__footer">
        <p class="title-medias" >${media.title}</p>
        <span>0</span>
        <button>
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
  `;
  }
  return { createHTMLCard }
}
