export function createCharacterCard(character) {
  const newCard = document.createElement("li");
  const cardContainer = document.querySelector('[data-js="card-container"]');
  newCard.classList.add("card");
  newCard.innerHTML = `<div class="card__image-container">
  <img
    class="card__image"
    src= ${character.image}
    alt=${character.name}
  />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title">${character.name}</h2>
  <dl class="card__info">
    <dt class="card__info-title">Status</dt>
    <dd class="card__info-description">${character.status}</dd>
    <dt class="card__info-title">Type</dt>
    <dd class="card__info-description">${character.type}</dd>
    <dt class="card__info-title">Occurrences</dt>
    <dd class="card__info-description">${character.episode}</dd>
  </dl>
</div>`;
  cardContainer.append(newCard);
  return newCard;
}
