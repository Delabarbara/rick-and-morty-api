const CHARACTER_URL = "https://rickandmortyapi.com/api/character";
const character = document.querySelector('#character');
const characterTemplate = document.querySelector('#character-template');
const getUrl = new URLSearchParams(window.location.search)
let id = getUrl.get('id');

const fetchDataCharacter = async () => {
  try {
    const response = await fetch(`${CHARACTER_URL}/${id}`);
    const data = await response.json();

    character.textContent = '';
    const clone = characterTemplate.content.cloneNode(true);
    clone.querySelector('#image').setAttribute('src', data.image);
    clone.querySelector('#title').textContent = `${data.id}. ${data.name}`;
    clone.querySelector('#species').textContent = data.species;
    clone.querySelector('#status').textContent = data.status;
    clone.querySelector('#gender').textContent = data.gender;
    clone.querySelector('#location').textContent = data.location.name;
    clone.querySelector('#origin').textContent = data.origin.name;
    character.appendChild(clone);
  } catch(e) {
    console.log(e);
  }
};
fetchDataCharacter();