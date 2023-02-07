//DOM
const $body = document.querySelector('#body');
const $wrapper = document.getElementById('main-wrapper');
const $contactModal = document.getElementById('modal');
const $closeModal = document.querySelector('.modal__close-btn');
const $validationFormBtn = document.querySelector(".contact-form__validation-button");
const $form = document.querySelector('#contact-form');



function displayModal() {
	$contactModal.style.display = 'block';
  $wrapper.setAttribute("aria-hidden", "true");
  $contactModal.setAttribute("aria-hidden", "false");
  $contactModal.setAttribute("aria-modal", "true");
  $body.classList.add('no-scroll');

  $form.querySelector('input').focus();

}

function closeModal() {
  $contactModal.style.display = "none";
  $wrapper.setAttribute("aria-hidden", "false");
  $contactModal.setAttribute("aria-hidden", "true");
  $contactModal.setAttribute("aria-modal", "false");
  $body.classList.remove('no-scroll')
}

/////////////////////////////////////////////////////
// FOCUS + TAB
/////////////////////////////////////////////////////

// éléments focusables dans la modale:
const $focusableElements = Array.from($contactModal.querySelectorAll('button, input, textarea'));

// piège le focus dans la modale
// permet de naviguer avec shift+tab
const focusInModal = function (e) {
  e.preventDefault()
  let index = $focusableElements.findIndex(element => element === $contactModal.querySelector(':focus'));
  if (e.shiftKey === true) {
    index--
  } else {
    index++
  }
  // si j'ai focus le dernier élemnt, je reviens sur le 1er
  if (index >= $focusableElements.length) {
    index = 0
  }
  // si l'index est négatif, ca veut dire que j'étais sur le 1er élémnt alors je resélectionne le dernier élémnt du tableau
  if (index < 0) {
    index = $focusableElements.length - 1
  }
  $focusableElements[index].focus();
}

document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') {
    closeModal(e);
  }
  if (e.key === 'Tab' && $contactModal.getAttribute('aria-hidden') == 'false') {
    focusInModal(e)
  }
})

document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
      validate();
    };
})(), true);
// init in the file pages/photographer.js
function displayPhotographerName(photographerToDisplay) {
  const photographerName = photographerToDisplay.name;
  const $formTitle = document.querySelector('#form__title');
  $formTitle.insertAdjacentHTML('beforeend', `<br> ${photographerName}`);
};

///////////////////////////////////////////
// VALIDATION CHECKING
///////////////////////////////////////////

const $firstName = document.getElementById('first-name');
const $lastName = document.getElementById('last-name');
const $email = document.getElementById('email');
const $contactMsg = document.getElementById('contact-msg');

// The button ENVOYER execute function validate()
// $validationFormBtn.addEventListener('click', validate);


//function validate() is called on form onsubmit
function validate() {

  let isSuccessful = true;

  // Checking first then last name inputs
  const resultFirstName = $firstName.value.trim();
  if(resultFirstName.length < 2) {
    isSuccessful = false;

    toggleError($firstName, true);
  } else {
    toggleError($firstName, false);

  }
  //last name
  const resultLastName = $lastName.value.trim();
  if (resultLastName.length < 2) {
    isSuccessful = false;
    toggleError($lastName, true);
  } else {
    toggleError($lastName, false);
  }

  //email
  const resultEmail = $email.value.trim();
  const regexEmail = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
  if (resultEmail == "") {
    isSuccessful = false;
    toggleError($email, true);
  }
  else if (regexEmail.exec(resultEmail) == null) {
    isSuccessful = false;
    toggleError($email, true);
  }
  else {
    toggleError($email, false);
  }

  //contact msg
  const resultMsg = $contactMsg.value;
  if (resultMsg.length < 10) {
    isSuccessful = false;
    toggleError($contactMsg, true);
  } else {
    toggleError($contactMsg, false);
  }
  // if all the inputs are corrects, variable isSuccessful is true and the form closed with sending btn
  if (isSuccessful === true) {
    console.log(resultFirstName, resultLastName, resultEmail, resultMsg);
    closeModal();
  }
  return false;
};

// function toggleError(input, show) {
//   if (input.getAttribute("data-error-visible") !== null) {
//     input.setAttribute("data-error-visible", show);
//   } else {
//     input.parentElement.setAttribute("data-error-visible", show);
//   }
// }
function toggleError(textarea, show) {
  if (textarea.getAttribute("data-error-visible") !== null) {
    textarea.setAttribute("data-error-visible", show);
  } else {
    textarea.parentElement.setAttribute("data-error-visible", show);
  }
}
