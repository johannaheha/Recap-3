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
const maxPage = 1;
const page = 1;
const searchQuery = "";
const ApiUrl = "https://rickandmortyapi.com/api/character";

//Task 1 create function fetchCharacters

async function fetchCharacters() {
  const response = await fetch(ApiUrl);
  const data = await response.json();
  console.log(data);

  //Task 3 create dynamic character card
  cardContainer.innerHTML = "";

  data.results.forEach((c) => {
    const newCharacterCard = createCharacterCard(c);
    cardContainer.append(newCharacterCard);
  });
}
fetchCharacters();

// Task 2 character card create
// const card = createCharacterCard();
// cardContainer.append(card);
