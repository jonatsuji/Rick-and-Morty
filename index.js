import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

//fetch

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const url = "https://rickandmortyapi.com/api/character";
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.log("Response NOT okay :(");
    } else {
      const characters = data.results;
      characters.forEach((character) => createCharacterCard(character));
    }
  } catch (error) {
    console.error("ERROR");
  }
}
fetchCharacters();
