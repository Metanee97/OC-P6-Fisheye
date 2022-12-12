
async function getPhotographers() {
    return fetch('../data/photographers.json')
        .then(res => {
            return res.json();
        })
        .then(dataJSON => {
            return dataJSON;
        })
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

// Récupère les datas des photographes
async function init() {

    console.log(getPhotographers())
    console.log(await getPhotographers())

    const { photographers } = await getPhotographers();

    console.log(photographers)
    displayData(photographers);
};

init();
