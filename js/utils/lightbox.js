const $mainWrapper = document.getElementById('main-wrapper');

class Lightbox {

  static currentMedia = null;

  static openLightbox(target) {
    const media = target.dataset.href;
    const mediaType = target.dataset.type;
    this.currentMedia = target;
    new Lightbox(media, mediaType);
  }

  constructor(media, type) {
    this.element = this.buildDom(media)
    this.load(media, type);
    this.onKeyDown = this.onKeyDown.bind(this);

    $mainWrapper.insertAdjacentElement('afterend', this.element)
    document.addEventListener('keydown', this.onKeyDown);
    this.focusablesElmts = Array.from(document.querySelectorAll('.lightbox-focus'));
  }

  // sort type of media to build
  load(media, type) {
    const lightboxTitle = this.element.querySelector('.media__title');
    const title = lightboxTitle.innerText = Lightbox.currentMedia.parentElement.querySelector('.title-media').innerText;

    if(type === 'image') {
      this.loadMediaImg(media, title)
    } else {
      this.loadMediaVideo(media)
    }
  }

  // structure for images
  loadMediaImg(media, title) {
    const image = new Image();
    const lightboxContainer = this.element.querySelector('.lightbox__container');
    lightboxContainer.innerHTML = "";
    lightboxContainer.appendChild(image);
    image.src = media;
    image.setAttribute('alt', title)
  }

  // structure for videos
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

    next = next.nextElementSibling;

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

  // HTML structure of the lightbox
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
