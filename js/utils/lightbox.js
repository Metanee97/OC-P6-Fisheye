
class Lightbox {

  static openLightbox() {
     new Lightbox();
  }

  constructor(media) {
    this.element = this.buildDom(media)
  }

  loadMedia() {
    const image = new Image();
    const lightboxContainer = this.element.querySelector('.lightbox__container');
    image.src = `/assets/images/${media.photographerId}/${media.image}`
  }

  // retourne HTMLElement
  buildDom (media) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
      <button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Next</button>
      <button class="lightbox__prev">Prev</button>
      <div class="lightbox__container">
      </div>
    `
    return lightbox
  }
}

Lightbox.openLightbox();


/**
 * Structure HTML de la lightbox
 *
 * <div class="lightbox">
        <button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Precedent</button>
        <div class="lightbox__container">
          <img src="https://picsum.photos/id/27/300/300" alt="">
        </div>
      </div>
 */
