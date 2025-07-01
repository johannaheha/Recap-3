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
let searchQuery = "";

//Task 1 create function fetchCharacters

async function fetchCharacters() {
  cardContainer.innerHTML = "";

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );

    // if (!response.ok) {
    //   cardContainer.innerHTML = "<p>No characters found!</p>";
    //   return;
    // }
    const data = await response.json();

    maxPage = data.info.pages;

    navigation.classList.remove("navigation--hidden");

    data.results.forEach((result) => {
      const newCharacterCard = createCharacterCard(result);
      cardContainer.append(newCharacterCard);
    });
    pagination.textContent = `${page} / ${maxPage}`;
  } catch (error) {
    cardContainer.innerHTML = "<p>Error loading characters</p>";
    navigation.classList.add("navigation--hidden");
  }
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

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  searchQuery = event.target.query.value;
  page = 1;
  // console.log(searchQuery);
  fetchCharacters();
});
