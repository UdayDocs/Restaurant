import './style.css';

import createHomePage from './home';
import createMenuPage from './menu';
import createAboutPage from './about';

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

homeBtn.addEventListener('click', createHomePage);
menuBtn.addEventListener('click', createMenuPage);
aboutBtn.addEventListener('click', createAboutPage);

window.onload = () => {
  createHomePage();
};
