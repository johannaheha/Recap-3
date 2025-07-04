export function createCharacterCard(character) {
  const li = document.createElement("li");
  //Task 3
  const picture = character.image;
  const name = character.name;
  const status = character.status;
  const type = character.type || "unknown";
  const occurrences = character.episode.length;

  li.classList.add("card");

  li.innerHTML = `

          <div class="card__image-container">
            <img
              class="card__image"
              src="${picture}"
              alt="${name}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${occurrences}</dd>
            </dl>
          </div>

    `;

  return li;
}
