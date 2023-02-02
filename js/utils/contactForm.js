//DOM
const $wrapper = document.getElementById('main-wrapper');
const $contactModal = document.getElementById('contact_modal');
const $modal = document.getElementById("contact_modal");
const $closeModal = document.querySelector('.modal__close-btn');
console.log($closeModal);

function displayModal() {

	$modal.style.display = "block";
  $contactModal.focus();

  $wrapper.setAttribute("aria-hidden", "true");
  $contactModal.setAttribute("aria-hidden", "false");
  $modal.setAttribute("aria-modal", "true");



}

function closeModal() {
  // const modal = document.getElementById("contact_modal");
  $modal.style.display = "none";
  $wrapper.setAttribute("aria-hidden", "false");
  $contactModal.setAttribute("aria-hidden", "true");
}

// fonction affichage nom du photographe dans la modale de contact
// est initialisée dans fonction init de photographer.js
function displayPhotographerName(photographerToDisplay) {

  const photographerName = photographerToDisplay.name;
  const $formTitle = document.querySelector('#form-title');
  $formTitle.insertAdjacentHTML('beforeend', `<br> ${photographerName}`);
};
