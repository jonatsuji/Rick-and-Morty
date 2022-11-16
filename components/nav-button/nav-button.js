export function createButtonPrev(callback) {
  const button = document.createElement("button");
  button.classList.add("button", "button__previous");
  button.textContent = "Previous";
  button.addEventListener("click", callback);
  return button;
}

export function createButtonNext(callback) {
  const button = document.createElement("button");
  button.classList.add("button", "button__next");
  button.textContent = "Next";
  button.addEventListener("click", callback);
  return button;
}
