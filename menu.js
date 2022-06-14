const mobileMenu = document.getElementById('mobile-menu');
const btn = document.getElementById('menu-btn');
const myLogo = document.getElementById('logo');
const quit =document.querySelectorAll('#menu')


function preventScroll(e) {
  e.tpreventDefault();
  e.stopPropagaion();
  return false;
}

function openMenu() {
  btn.style.display = 'none';
  mobileMenu.style.display = 'flex';
  myLogo.style.display = 'none';
  document.querySelector('.scrollable').addEventListener('wheel', preventScroll, { passive: false });
}

btn.addEventListener('click', openMenu);
function closeMenu() {
  mobileMenu.style.display = 'none';
  btn.style.display = 'block';
  myLogo.style.display = 'block';
  document.querySelector('.scrollable').removeEventListener('wheel', preventScroll, { passive: false });
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'close-menu') {
    closeMenu();
  } else if (event.target.id === 'logo') {
    closeMenu();
  }
});

for (let i= 0; i<quit.length;i ++){
  quit[i].addEventListener('click',()=>{
      closeMenu();
  });
}
