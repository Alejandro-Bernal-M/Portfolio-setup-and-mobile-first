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

// smooth scrooling implmentation
const navLinks = document.querySelectorAll('.modala, nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(e.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
// POPUP -----
const arrayProjects = [
  {
    name: 'Multi-Post Stories<br /> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featuredImage: 'Project-1.svg',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    linktoliveversion: '',
    LinkToSource: '',
  },
  {
    name: 'Multi-Post Stories<br /> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featuredImage: 'Project-1.svg',
    technologies: ['HTML', 'CSS', 'JavaSCRIPT'],
    linktoliveversion: '',
    LinkToSource: '',
  },
  {
    name: 'Multi-Post Stories<br /> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featuredImage: 'Project-1.svg',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT3'],
    linktoliveversion: '',
    LinkToSource: '',
  },
  {
    name: 'Multi-Post Stories<br /> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featuredImage: 'Project-1.svg',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT4'],
    linktoliveversion: '',
    LinkToSource: '',
  },
  {
    name: 'Multi-Post Stories<br /> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featuredImage: 'Project-1.svg',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT5'],
    linktoliveversion: '',
    LinkToSource: '',
  },
  {
    name: 'Multi-Post Stories<br /> Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featuredImage: 'Project-1.svg',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT6'],
    linktoliveversion: '',
    LinkToSource: '',
  },
];

const gridItems = document.querySelectorAll('.grid-item');

function constructItemWork(arr) {
  let counter = 0;
  arr.forEach((item) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('img-holder');
    item.appendChild(newDiv);
    const newH3 = document.createElement('h3');
    newH3.classList.add('text3');
    newH3.innerHTML = arrayProjects[0].name;
    item.appendChild(newH3);
    const newUl = document.createElement('ul');
    newUl.classList.add('cate');
    for (let i = 0; i < arrayProjects[0].technologies.length; i += 1) {
      const newIl = document.createElement('li');
      newIl.textContent = arrayProjects[counter].technologies[i];
      newUl.appendChild(newIl);
    }
    item.appendChild(newUl);
    const newButton = document.createElement('button');
    newButton.classList.add('button-flex', 'button-h');
    newButton.textContent = 'See project';
    item.appendChild(newButton);
    counter += 1;
  });
}

constructItemWork(gridItems);
