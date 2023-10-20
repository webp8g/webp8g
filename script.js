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
    }, 150); 
  });



const svgMap = document.getElementById('svg-m');
const svg = svgMap.querySelector('#svg1');

let isDragging = false;
let startPoint = { x: 0, y: 0 };
let panX = 0;
let panY = 0;
let zoomLevel = 1.0;

function zoom(direction) {
  if (direction === 'in') {
    zoomLevel *= 1.2;
  } else if (direction === 'out') {
    zoomLevel /= 1.2;
  }

  svg.style.transform = `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`;
}

function startPan(event) {
  isDragging = true;
  startPoint = getEventPoint(event);
}

function pan(event) {
  if (!isDragging) return;

  const currentPoint = getEventPoint(event);
  panX += currentPoint.x - startPoint.x;
  panY += currentPoint.y - startPoint.y;
  startPoint = currentPoint;

  svg.style.transform = `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`;
}

function endPan() {
  isDragging = false;
}

function getEventPoint(event) {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  } else {
    return {
      x: event.clientX,
      y: event.clientY,
    };
  }
}

svgMap.addEventListener('mousedown', startPan);
document.addEventListener('mousemove', pan);
document.addEventListener('mouseup', endPan);

// Handle touch events
svgMap.addEventListener('touchstart', startPan);
document.addEventListener('touchmove', pan);
document.addEventListener('touchend', endPan);
