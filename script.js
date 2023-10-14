let isMenuOpen = false;
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    navMenu.classList.add('active');
    overlay.classList.add('active');
    hamburger.classList.add('active');
  } else {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active')
  }
}

hamburger.addEventListener('click', toggleMenu);

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

 
  setTimeout(() => {
    if (scrollTop > lastScrollTop && isMenuOpen) {
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
      hamburger.classList.remove('active');
      isMenuOpen = false;
    }
  }, 150); // Delay of 300 milliseconds (adjust as needed)
});

