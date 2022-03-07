// URLS
const CHARACTERS_URL = "https://rickandmortyapi.com/api/character";
const LOCATIONS_URL = "https://rickandmortyapi.com/api/location";
const EPISODES_URL = "https://rickandmortyapi.com/api/episode";

// FRAGMENT
const fragment = document.createDocumentFragment();

// TEMPLATES
const characterTemplate = document.querySelector('#character-template');
const locationTemplate = document.querySelector('#location-template');
const episodeTemplate = document.querySelector('#episode-template');

// LISTS
const charactersList = document.querySelector('#characters-list');
const locationsList = document.querySelector('#locations-list');
const episodesList = document.querySelector('#episodes-list');

// PAGINATION
const charactersNext = document.querySelector('#characters-next');
const charactersPrev = document.querySelector('#characters-prev');
const locationsPrev = document.querySelector('#locations-prev');
const locationsNext = document.querySelector('#locations-next');
const episodesPrev = document.querySelector('#episodes-prev');
const episodesNext = document.querySelector('#episodes-next');

// FETCH CHARACTERS
let charactersPage = 1;

const fetchDataCharacters = async () => {
  try {
    const response = await fetch(`${CHARACTERS_URL}/?page=${charactersPage}`);
    const data = await response.json();
    const results = data.results;
    const info = data.info;

    results.forEach(item => {
      charactersList.textContent = '';
      const clone = characterTemplate.content.cloneNode(true);
      clone.querySelector('#image').setAttribute('src', item.image);
      clone.querySelector('#title').textContent = `${item.id}. ${item.name}`;
      clone.querySelector('#species').textContent = item.species;
      clone.querySelector('#origin').textContent = item.origin.name;
      clone.querySelector('#character-link').addEventListener('click', () => {
        window.location.href = `./character.html?id=${item.id}`;
      });
      fragment.appendChild(clone);
    });
    charactersList.appendChild(fragment);
  } catch(e) {
    console.log(e);
  }
};
fetchDataCharacters();

charactersNext.addEventListener('click', () => {
  if (charactersPage < 42) {
    charactersPage += 1;
    location.hash = '#top';
    fetchDataCharacters();
    location.hash = '#section2';
  };
});

charactersPrev.addEventListener('click', () => {
  if (charactersPage > 1) {
    charactersPage -= 1;
    location.hash = '#top';
    fetchDataCharacters();
    location.hash = '#section2';
  }
});

// FETCH LOCATIONS
let locationsPage = 1;

const fetchDataLocations = async () => {
  try {
    const response = await fetch(`${LOCATIONS_URL}/?page=${locationsPage}`);
    const data = await response.json();
    const results = data.results;
    const info = data.info;

    results.forEach(item => {
      locationsList.textContent = '';
      const clone = locationTemplate.content.cloneNode(true);
      clone.querySelector('.card-header').textContent = `${item.id}. ${item.name}`;
      clone.querySelector('.type').textContent = item.type;
      clone.querySelector('.dimension').textContent = item.dimension;
      fragment.appendChild(clone);
    });
    locationsList.appendChild(fragment);
  } catch(e) {
    console.log(e);
  }
};
fetchDataLocations();

locationsNext.addEventListener('click', () => {
  if (locationsPage < 7) {
    locationsPage += 1;
    location.hash = '#top';
    fetchDataLocations();
    location.hash = '#section3';
  };
});

locationsPrev.addEventListener('click', () => {
  if (locationsPage > 1) {
    locationsPage -= 1;
    location.hash = '#top';
    fetchDataLocations();
    location.hash = '#section3';
  }
});

// FETCH EPISODES
let episodesPage = 1;

const fetchDataEpisodes = async () => {
  try {
    const response = await fetch(`${EPISODES_URL}/?page=${episodesPage}`);
    const data = await response.json();
    const results = data.results;
    const info = data.info;

    results.forEach(item => {
      episodesList.textContent = '';
      const clone = episodeTemplate.content.cloneNode(true);
      clone.querySelector('.card-header').textContent = `${item.id}. ${item.name}`;
      clone.querySelector('.air').textContent = item.air_date;
      fragment.appendChild(clone);
    });
    episodesList.appendChild(fragment);
  } catch(e) {
    console.log(e);
  }
};
fetchDataEpisodes();

episodesNext.addEventListener('click', () => {
  if (episodesPage < 3) {
    episodesPage += 1;
    location.hash = '#top';
    fetchDataEpisodes();
    location.hash = '#section4';
  };
});

episodesPrev.addEventListener('click', () => {
  if (episodesPage > 1) {
    episodesPage -= 1;
    location.hash = '#top';
    fetchDataEpisodes();
    location.hash = '#section4';
  }
});
