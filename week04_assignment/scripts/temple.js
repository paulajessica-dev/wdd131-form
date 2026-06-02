const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();

lastModified.textContent =
    `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Fortaleza City Brazil",
    location: "Fortaleza City, Brazil",
    dedicated: "2019, June, 2",
    area: 9295,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/800x500/5-Fortaleza-Temple-Photo-2219775.jpg"
  },
  {
    templeName: "são Paulo City Brazil",
    location: "São Paulo City, Brazil",
    dedicated: "1978, October, 30",
    area: 5110,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/800x500/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake City United States",
    location: "Salt Lake City, United States",
    dedicated: "1893, April, 6",
    area: 35508,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/800x500/salt-lake-temple-37762.jpg"
  }
];


createCard(temples);

const oldTempleLink = document.querySelector("#old");

oldTempleLink.addEventListener("click", (event) => {
      event.preventDefault();
      createCard(temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year < 1900;
    }));

});

const newTempleLink = document.querySelector("#new");

newTempleLink.addEventListener("click", (event) => {
      event.preventDefault();
      createCard(temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year > 2000;
    }));

});

const largeTempleLink = document.querySelector("#large");

largeTempleLink.addEventListener("click", (event) => {
      event.preventDefault();
      createCard(temples.filter(temple => {
      const area = temple.area;
      return area > 90000;
    }));

});

const smallTempleLink = document.querySelector("#small");

smallTempleLink.addEventListener("click", (event) => {
      event.preventDefault();
      createCard(temples.filter(temple => {
      const area = temple.area;
      return area < 10000;
    }));

});

const homeTempleLink = document.querySelector("#home");

homeTempleLink.addEventListener("click", (event) => {
      event.preventDefault();
      createCard(temples);

});

function createCard(templesList){
    document.querySelector("#gallery").innerHTML = "";
    const gallery = document.querySelector("#gallery");
    //console.log(gallery);
    templesList.forEach(temple => {
      const card = document.createElement("section");
      card.classList.add("card");
      card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        gallery.appendChild(card);
    });
}

