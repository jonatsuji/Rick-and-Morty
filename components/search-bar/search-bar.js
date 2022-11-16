export function createSearchBar(callback) {
  const form = document.createElement("form");
  form.classList.add("search-bar");
  form.innerHTML = `
  <input
    name="query"
    class="search-bar__input"
    type="text"
    placeholder="search characters"
    aria-label="character name"
  />
  <button class="search-bar__button" aria-label="search for character">
    <img
      class="search-bar__icon"
      src="assets/magnifying-glass.png"
      alt=""
    />
  </button>`;
  form.addEventListener("submit", callback);
  return form;
}
