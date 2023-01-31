const menu = document.querySelector('#hambur');
const modal = document.querySelector('.modal-menu');
const modalImg = document.querySelector('.modal-img');
const modalA1 = document.querySelector('.modal-a1');
const modalA2 = document.querySelector('.modal-a2');
const modalA3 = document.querySelector('.modal-a3');
menu.addEventListener('click', () => {
  modal.classList.add('modal-show');
});
modalImg.addEventListener('click', () => {
  modal.classList.remove('modal-show');
});
modalA1.addEventListener('click', () => {
  modal.classList.remove('modal-show');
});
modalA2.addEventListener('click', () => {
  modal.classList.remove('modal-show');
});
modalA3.addEventListener('click', () => {
  modal.classList.remove('modal-show');
});
