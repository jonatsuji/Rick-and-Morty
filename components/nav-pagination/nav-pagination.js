export function createPagination(page, maxPage) {
  const pagination = document.createElement("span");
  pagination.classList.add("navigation__pagination");
  pagination.textContent = `${page} / ${maxPage}`;
  pagination.setAttribute("data-js", "pagination");
  return pagination;
}
