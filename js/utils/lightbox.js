// import { enableBodyScroll, disableBodyScroll } from "./body-scroll-lock";

class Lightbox {

  static openLightbox(target) {
    const media = target.dataset.href;  //récupère chemin img
    console.log(target);
    // const id = target.id;
    // console.log(typeof media);
      new Lightbox(media); //crée une lightbox avec chemin img
  }

  constructor(media) {
    this.element = this.buildDom(media)
    this.loadMedia(media)
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.appendChild(this.element);
    // disableBodyScroll(this.element)
    document.body.appendChild(this.element);
    document.addEventListener('keyup', this.onKeyUp);

  }

  loadMedia(media) {
    const image = new Image();
    console.log(typeof image);
    const lightboxContainer = this.element.querySelector('.lightbox__container');
    lightboxContainer.appendChild(image)
    image.src = media;
  }

  // fonction pour afficher vidéo

  // loadMedia(media) {
  //   const video = document.createElement('video');
  //   video.setAttribute('preload', 'auto')
  //   video.setAttribute('autoplay', '')
  //   video.setAttribute('controls', '')

  //   const lightboxContainer = this.element.querySelector('.lightbox__container');
  //   lightboxContainer.appendChild(video)
  //   video.src = media;
  // }

  onKeyUp (e) {
    if (e.key === 'Escape'){
    this.close(e)
    } else if (e.key === 'ArrowLeft'){
    this.prev(e)
    } else if (e.key === 'ArrowRight'){
    this.next(e)
    }
  }

  close(e) {
    e.preventDefault()
    this.element.classList.add('fadeOut');
    // enableBodyScroll(this.element)
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element);
    }, 500)
    document.removeEventListener('keyup', this.onKeyUp)
  }

  next (e, target) {
    e.preventDefault()
    let nextImg = target.nextElementSibling;
  }

  // retourne HTMLElement
  buildDom (media) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
      <button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Next</button>
      <button class="lightbox__prev">Prev</button>
      <div class="lightbox__container"></div>
      <p class="media__title"></p>
    `
    lightbox.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this));
    lightbox.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))


    return lightbox
  }
}

// Lightbox.openLightbox();
