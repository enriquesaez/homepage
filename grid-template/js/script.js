const dropdown = document.querySelector('.dropdown');
const header = dropdown.querySelector('.dropdown-header');
const content = dropdown.querySelector('.dropdown-content');
const arrow = header.querySelector('.arrow');

header.addEventListener('click', () => {
  dropdown.classList.toggle('show');
  arrow.classList.toggle('up');
});