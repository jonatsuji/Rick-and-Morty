import { createCharacterCard } from "./components/card/card.js";
import { createButtonNext } from "./components/nav-button/nav-button.js";
import { createButtonPrev } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
//const prevButton = document.querySelector('[data-js="button-prev"]');
//const nextButton = document.querySelector('[data-js="button-next"]');

// States
let maxPage = 42;
let page = 1;
let searchQuery = "";
//let amountResults = 826;

//fetch

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    maxPage = data.info.pages;

    if (!response.ok) {
      console.log("Response NOT okay :(");
    } else {
      const characters = data.results;
      characters.forEach((character) => createCharacterCard(character));
    }
  } catch (error) {
    console.error("ERROR");
  }
  const pagination = document.querySelector('[data-js="pagination"]');
  pagination.innerHTML = `${page} / ${maxPage}`;

  console.log(url);
}
fetchCharacters();

//Buttons

navigation.append(
  createButtonPrev(() => {
    page--;
    fetchCharacters();
  })
);

navigation.append(createPagination(page, maxPage));

navigation.append(
  createButtonNext(() => {
    page++;
    fetchCharacters();
  })
);

// search bar

searchBarContainer.append(
  createSearchBar((event) => {
    event.preventDefault();
    searchQuery = event.target.query.value;
    fetchCharacters();
  })
);
