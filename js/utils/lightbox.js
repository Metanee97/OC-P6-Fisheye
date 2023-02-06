// import { enableBodyScroll, disableBodyScroll } from "./body-scroll-lock";
const $mainWrapper = document.getElementById('main-wrapper');


class Lightbox {

  static currentMedia = null;

  static openLightbox(target) {
    const media = target.dataset.href;  //récupère chemin img
    const mediaType = target.dataset.type;  //récupère type du média
    this.currentMedia = target;  // média cliqué
    // const id = target.id;
    new Lightbox(media, mediaType); //crée une lightbox avec chemin img et type média
    document.querySelector('.lightbox__close').focus();
  }

  constructor(media, type) {
    this.element = this.buildDom(media)
    this.load(media, type);
    this.onKeyUp = this.onKeyUp.bind(this);
    // document.body.appendChild(this.element);
    // disableBodyScroll(this.element)
    $mainWrapper.insertAdjacentElement('afterend', this.element)
    // document.body.appendChild(this.element);
    document.addEventListener('keyup', this.onKeyUp);
  }

  load(media, type) {
    if(type === 'image') {
      this.loadMediaImg(media)
    } else {
      this.loadMediaVideo(media)
    }
    const lightboxTitle = this.element.querySelector('.media__title');
    lightboxTitle.innerText = Lightbox.currentMedia.parentElement.querySelector('.title-media').innerText;

  }

  loadMediaImg(media) {
    const image = new Image();
    const lightboxContainer = this.element.querySelector('.lightbox__container');
    lightboxContainer.innerHTML = "";
    lightboxContainer.appendChild(image);
    image.src = media;
  }

  // fonction pour afficher vidéo

  loadMediaVideo(media) {
    const video = document.createElement('video');
    video.setAttribute('preload', 'auto')
    video.setAttribute('autoplay', '')
    video.setAttribute('controls', '')

    const lightboxContainer = this.element.querySelector('.lightbox__container');
    lightboxContainer.innerHTML = "";
    lightboxContainer.appendChild(video)
    video.src = media;
  }

  close(e) {
    e.preventDefault()
    this.element.classList.add('fadeOut');
    // enableBodyScroll(this.element)
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element);
    }, 500)
    document.removeEventListener('keyup', this.onKeyUp)
    $mainWrapper.setAttribute('aria-hidden', 'false')
  };

  next (e) {
    e.preventDefault()
    let next = Lightbox.currentMedia.closest('.media-item');

    next = next.nextElementSibling; //article suivant si non nul

    if(next == null) {
      next = Lightbox.currentMedia.closest('.photographer-media').firstElementChild;
    }
    next = next.querySelector('.media-item__link');
    Lightbox.currentMedia = next;
    this.load(next.dataset.href, next.dataset.type);
  }

  prev (e) {
    e.preventDefault()
    let prev = Lightbox.currentMedia.closest('.media-item');

    prev = prev.previousElementSibling; //article précédent si non nul

    if(prev == null) {
      prev = Lightbox.currentMedia.closest('.photographer-media').lastElementChild;
    }
    prev = prev.querySelector('.media-item__link');
    Lightbox.currentMedia = prev;
    this.load(prev.dataset.href, prev.dataset.type);
  }

  // retourne HTMLElement
  buildDom (media) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.setAttribute('aria-hidden', 'false')
    lightbox.setAttribute('role', 'dialog');
    $mainWrapper.setAttribute('aria-hidden', 'true')

    lightbox.innerHTML = `
      <button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Next</button>
      <button class="lightbox__prev">Prev</button>
      <div class="lightbox__container"></div>
      <p class="media__title"></p>
    `
    lightbox.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this));

    lightbox.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))

    lightbox.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))

    return lightbox
  }

  /**
   *
   * @param {KeyboardEvent} e
   */
  onKeyUp (e) {
    const $buttonsFocused = Lightbox.querySelectorAll('button');
    console.log($buttonsFocused);
    if (e.key === 'Escape'){
    this.close(e)
    } else if (e.key === 'ArrowLeft'){
    this.prev(e)
    } else if (e.key === 'ArrowRight'){
    this.next(e)
    }
    // else if (e.key === 'Tab') {
    //   this.focusInLightbox(e)
    // }
  }

  // focusInLightbox(e) {
  //   e.preventDefault();
  //   $buttonsFocused = Lightbox.querySelectorAll('button');
  //   console.log($buttonsFocused);

  // }

}



// Lightbox.openLightbox();
