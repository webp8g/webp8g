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

  event.preventDefault();
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


svgMap.addEventListener('touchstart', startPan);
document.addEventListener('touchmove',pan);
document.addEventListener('touchend', endPan);








const locations = [
  {
    name: "Smreková 5",
  },
  {
    name: "Ružová 42",
  },
  {
    name: "J.Bánika 2",
  },
  {
    name: "M.R.Štefánika 7",
  },
  {
    name: "M.R.Štefánika 10",
  },
  {
    name: "Námestie slobody 20",
  },
  {
    name: "Námestie SNP 36 (city cafe)",
  },
  {
    name: "V.P Tótha 14",
  },
  {
    name: "P.O.Hviezdoslava 7",
  },
  {
    name: "T. G. Masaryka 24 ( Technická univerzita)",
  },
  {
    name: "Ľ. Štúra 62",
  },
  {
    name: "Imatra 1",
  },
  {
    name: "Alexandra Nográdyho 31",
  },
  {
    name: "Kuzmányho nábrežie 28 (nemocnica)",
  },
  {
    name: "9.Mája 7",
  },
  {
    name: "A.Hlinku 4",
  },
  {
    name: "A.Hlinku 27",
  },
  {
    name: "J. Jesenského 49",
  },
  {
    name: "Lučenecká cesta 15",
  },
  {
    name: "Okružná 117",
  },
  {
    name: "Obrancov mieru 46",
  },
  {
    name: "Generála svobodu 19",
  },
  {
    name: "Javorová 8",
  }
];



document.addEventListener("DOMContentLoaded", function () {
const locationInfo = document.getElementById("location-info");
const locationName = document.getElementById("location-name");
const locationImages = document.querySelectorAll(".location-image");
let isInfoVisible = false;

function showLocationInfo(locationIndex) {
  const location = locations[locationIndex];
  locationName.textContent = location.name;
  locationInfo.style.display = "block";
  locationInfo.style.padding = "5px";
  isInfoVisible = true;
}

function hideLocationInfo() {
  locationInfo.style.display = "none";
  isInfoVisible = false;
}


locationImages.forEach((image) => {
  image.addEventListener("mouseenter", function () {
    showLocationInfo(this.getAttribute("data-location-index"));
  });

  image.addEventListener("mouseleave", function () {
    hideLocationInfo();
  });

  image.addEventListener("click", function (event) {
    event.stopPropagation();
    const locationIndex = this.getAttribute("data-location-index");
    showLocationInfo(locationIndex);
  });
});

document.addEventListener("click", function () {
  hideLocationInfo();
});

locationInfo.addEventListener("click", function (event) {
  event.stopPropagation();
});


locationImages.forEach((image) => {
  image.addEventListener("touchstart", function (event) {
    event.preventDefault();
    const locationIndex = this.getAttribute("data-location-index");
    showLocationInfo(locationIndex);
  });
});


document.addEventListener("touchstart", function (event) {
  if (!locationInfo.contains(event.target) && isInfoVisible) {
    hideLocationInfo();
  }
});
});
