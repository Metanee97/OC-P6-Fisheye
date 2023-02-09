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
    // document.querySelector('.lightbox__close').focus();


  }

  constructor(media, type) {
    this.element = this.buildDom(media)
    this.load(media, type);
    this.onKeyDown = this.onKeyDown.bind(this);

    $mainWrapper.insertAdjacentElement('afterend', this.element)
    // document.body.appendChild(this.element);
    document.addEventListener('keydown', this.onKeyDown);
    this.focusablesElmts = Array.from(document.querySelectorAll('.lightbox-focus'));
    // console.log(this.focusablesElmts[0].focus());;
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
    document.removeEventListener('keydown', this.onKeyDown)
    this.element.setAttribute('aria-hidden', 'false')
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
    const lightbox = document.createElement('section');
    lightbox.classList.add('lightbox');
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.setAttribute('aria-label', 'Image Closeup View');
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-roledescription', 'carousel');
    $mainWrapper.setAttribute('aria-hidden', 'true')

    lightbox.innerHTML = `
      <button class="lightbox__close lightbox-focus" aria-label="Close Dialog"></button>
      <button class="lightbox__next lightbox-focus" aria-label="Next Image"></button>
      <button class="lightbox__prev lightbox-focus" aria-label="Previous Image"></button>
      <div class="lightbox__container"></div>
      <p class="media__title"></p>
    `
    lightbox.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this));

    lightbox.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))

    lightbox.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))

    return lightbox
  }

 focusLightbox(e) {
  e.preventDefault()
  let index = this.focusablesElmts.findIndex(element => element === this.element.querySelector(':focus'));
  if (e.shiftKey === true) {
    index--
  } else {
    index++
  }
  if (index >= this.focusablesElmts.length) {
    index = 0
  }
  if (index < 0) {
    index = this.focusablesElmts.length - 1
  }
  this.focusablesElmts[index].focus();
 }

  /**
   *
   * @param {KeyboardEvent} e
   */
  onKeyDown (e) {
    if (e.key === 'Escape'){
    this.close(e)
    } else if (e.key === 'ArrowLeft'){
    this.prev(e)
    } else if (e.key === 'ArrowRight'){
    this.next(e)
    } else if (e.key === 'Tab') {
    this.focusLightbox(e);
    }
  }

}



// Lightbox.openLightbox();
