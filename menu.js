


const mobileMenu = document.getElementById('mobile-menu');
const btn = document.getElementById('menu-btn');

function openMenu() {
  btn.style.display = 'none';
  mobileMenu.style.display = 'flex';
}

btn.addEventListener('click', openMenu); 
function closeMenu() { 
  mobileMenu.style.display = 'none';                
  btn.style.display = 'block';                 
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'close-menu') {
    closeMenu();
  }
});

