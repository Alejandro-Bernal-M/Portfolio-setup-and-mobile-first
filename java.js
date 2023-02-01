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

// Popup

const popup = document.getElementById('popup');
const buttonGrid = document.querySelectorAll('.button-flex');
const divPopup = document.querySelector('.div-popup');
const myArr = [];
function showAll() {
  const all1 = document.querySelectorAll('.hide');
  all1.forEach((section) => {
    section.classList.remove('desktop');
  });
}
function constructPopup(arr, ini) {
  let counter = ini;
  if (window.matchMedia('(min-width: 768px)').matches) {
    arr.forEach((item) => {
      const newClose = document.createElement('img');
      newClose.id = 'enabled3';
      newClose.src = 'Icons/Disabled-desktop.svg';
      item.appendChild(newClose);
      const popupClose = document.getElementById('enabled3');
      popupClose.addEventListener('click', () => {
        popup.classList.remove('popup-show');
        divPopup.innerHTML = '';
        showAll();
        window.scrollTo(0, 720);
      });
      const newimg2 = document.createElement('img');
      newimg2.classList.add('img-holder2');
      newimg2.src = arrayProjects[counter].featuredImageDesktop;
      item.appendChild(newimg2);
      const divTextAndButtons = document.createElement('div');
      const newH3 = document.createElement('h3');
      newH3.classList.add('text3p');
      newH3.innerHTML = arrayProjects[counter].name;
      divTextAndButtons.appendChild(newH3);
      const newDiv2 = document.createElement('div');
      const newButton = document.createElement('button');
      newButton.classList.add('button-flex2', 'button-h');
      newButton.textContent = 'See live';
      const logo1 = document.createElement('img');
      logo1.src = 'Icons/Icon-Export.svg';
      newButton.appendChild(logo1);
      newDiv2.appendChild(newButton);
      const newButton2 = document.createElement('button');
      newButton2.classList.add('button-flex2', 'button-h');
      newButton2.textContent = 'See source';
      const logo2 = document.createElement('img');
      logo2.src = 'Icons/github-white.svg';
      newButton2.appendChild(logo2);
      newDiv2.appendChild(newButton2);
      newDiv2.classList.add('div-buttons-popup');
      divTextAndButtons.appendChild(newDiv2);
      divTextAndButtons.classList.add('div-text-and-buttons');
      item.appendChild(divTextAndButtons);
      const newUl = document.createElement('ul');
      newUl.classList.add('cate2');
      for (let i = 0; i < arrayProjects[counter].technologies.length; i += 1) {
        const newIl = document.createElement('li');
        newIl.textContent = arrayProjects[counter].technologies[i];
        newUl.appendChild(newIl);
      }
      item.appendChild(newUl);
      const newP = document.createElement('p');
      newP.textContent = arrayProjects[counter].description;
      newP.classList.add('popup-p');
      item.appendChild(newP);
    });
  } else {
    arr.forEach((item) => {
      const newClose = document.createElement('img');
      newClose.id = 'enabled2';
      newClose.src = 'Icons/Enabled2.svg';
      item.appendChild(newClose);
      const popupClose = document.getElementById('enabled2');
      popupClose.addEventListener('click', () => {
        popup.classList.remove('popup-show');
        divPopup.innerHTML = '';
        showAll();
        window.scrollTo(0, 720);
      });
      const newimg = document.createElement('img');
      newimg.classList.add('img-holder2');
      newimg.src = arrayProjects[counter].featuredImage;
      item.appendChild(newimg);
      const newH3 = document.createElement('h3');
      newH3.classList.add('text3p');
      newH3.innerHTML = arrayProjects[counter].name;
      item.appendChild(newH3);
      const newUl = document.createElement('ul');
      newUl.classList.add('cate');
      for (let i = 0; i < arrayProjects[counter].technologies.length; i += 1) {
        const newIl = document.createElement('li');
        newIl.textContent = arrayProjects[counter].technologies[i];
        newUl.appendChild(newIl);
      }
      item.appendChild(newUl);
      const newP = document.createElement('p');
      newP.textContent = arrayProjects[counter].description;
      newP.classList.add('popup-p');
      item.appendChild(newP);
      const newDiv2 = document.createElement('div');
      const newButton = document.createElement('button');
      newButton.classList.add('button-flex2', 'button-h');
      newButton.textContent = 'See live';
      const logo1 = document.createElement('img');
      logo1.src = 'Icons/Icon-Export.svg';
      newButton.appendChild(logo1);
      newDiv2.appendChild(newButton);
      const newButton2 = document.createElement('button');
      newButton2.classList.add('button-flex2', 'button-h');
      newButton2.textContent = 'See source';
      const logo2 = document.createElement('img');
      logo2.src = 'Icons/github-white.svg';
      newButton2.appendChild(logo2);
      newDiv2.appendChild(newButton2);
      newDiv2.classList.add('div-buttons');
      item.appendChild(newDiv2);
      counter += 1;
    });
  }
}
function hideAll() {
  const all = document.querySelectorAll('.hide');
  all.forEach((section) => {
    section.classList.add('desktop');
  });
}
myArr.push(divPopup);
buttonGrid.forEach((button) => {
  button.addEventListener('click', (e) => {
    popup.classList.toggle('popup-show');
    const buttonCounter = e.target.id;
    constructPopup(myArr, buttonCounter);
    hideAll();
    window.scrollTo(0, 0);
  });
});
