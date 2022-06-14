


const mobileMenu = document.getElementById('mobile-menu');
const btn = document.getElementById('menu-btn');

function openMenu() {
  btn.style.display = 'none';
  mobileMenu.style.display = 'flex';
}

btn.addEventListener('click', openMenu); 

