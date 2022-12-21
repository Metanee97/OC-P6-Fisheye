
// fonction asynchrone pour récupérer données du fichier photographers.json
async function getPhotographers() {
  return fetch('../data/photographers.json')
      .then(res => {
          return res.json();

      })
      .then(dataJSON => {
          return dataJSON;
      })
}

// fonction asynchrone pour afficher les données dans la page index.html
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        // console.log(userCardDOM);
        photographersSection.appendChild(userCardDOM);
    });
};

// fonction asynchrone pour exécuter les deux précédentes fonctions
async function init() {

    //console.log(getPhotographers())
    //console.log(await getPhotographers())
    const { photographers } = await getPhotographers();

    //console.log(photographers)
    displayData(photographers);
};

init();