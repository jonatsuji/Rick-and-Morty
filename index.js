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
const maxPage = 42;
let page = 1;
const searchQuery = "";

//fetch

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

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

  pagination.innerHTML = `${page} / ${maxPage}`;

  console.log(url);
}
fetchCharacters();

//Buttons

nextButton.addEventListener("click", () => {
  page++;
  fetchCharacters();

  if (page > 1) {
    prevButton.disabled = false;
  }
  if (page === 42) {
    nextButton.disabled = true;
  }
});

prevButton.addEventListener("click", () => {
  if (page === 1) {
    prevButton.disabled = true;
    return;
  }
  if (page < 42) {
    nextButton.disabled = false;
  }
  page--;
  fetchCharacters();
});
