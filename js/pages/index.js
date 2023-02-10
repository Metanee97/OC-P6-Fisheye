
// get all datas
 async function getPhotographers() {
  return fetch('../data/photographers.json')
      .then(res => {
          return res.json();
      })
      .then(dataJSON => {
        //console.log({dataJSON})
          return dataJSON;
      })
}

// display photographers in index.html
async function displayphotographers(photographers) {
    const $photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        //console.log( photographerModel);
        const photographerCardDOM = photographerModel.createPhotographerCardDOM();
        $photographersSection.appendChild(photographerCardDOM);
    });
};

async function init() {
    const { photographers } = await getPhotographers();
    displayphotographers(photographers);
};

init();
