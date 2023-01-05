function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// fonction affichage nom du photographe dans la modale de contact
// est initialisée dans fonction init de photographer.js
function displayPhotographerName(photographerToDisplay) {

  const photographerName = photographerToDisplay.name;
  const $formTitle = document.querySelector('.form-title');
  $formTitle.insertAdjacentHTML('beforeend', `<br> ${photographerName}`);
};
