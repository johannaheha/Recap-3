import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

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
let maxPage = 1;
let page = 1;
const searchQuery = "";

//Task 1 create function fetchCharacters

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await response.json();
  maxPage = data.info.pages;
  console.log(data);
  // console.log(data);
  // console.log(maxPage);

  //Task 3 create dynamic character card
  cardContainer.innerHTML = "";

  data.results.forEach((c) => {
    const newCharacterCard = createCharacterCard(c);
    cardContainer.append(newCharacterCard);
  });
  pagination.textContent = `${page} / ${maxPage}`;
}
fetchCharacters();

// Task 2 character card create
// const card = createCharacterCard();
// cardContainer.append(card);

// Task 4

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page -= 1;
    fetchCharacters();
  }
});
