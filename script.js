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





const paths = {
  path1: document.getElementById('path2'),
  path2: document.getElementById('path3'),
  path3: document.getElementById('path4'),
  path4: document.getElementById('path5'),
};
const image = document.querySelector('.img-r');

function updateFillPaths() {
const rotationText = document.getElementById('info-text');


  const computedStyle = window.getComputedStyle(image, null);
  const transform = computedStyle.getPropertyValue('transform');
  const matrix = new DOMMatrix(transform);
  const currentRotation = matrix.rotate(2); 

  const currentRotationRadians = Math.atan2(matrix.b, matrix.a);
  const currentRotationDegrees = (currentRotationRadians * 180) / Math.PI;


  if (currentRotationDegrees >= 20 && currentRotationDegrees < 32.5) {
    paths.path4.style.fill= 'none';
    paths.path3.style.fill= 'none';
    paths.path2.style.fill= 'none';
    paths.path1.style.fill= '#00ff36';
    rotationText.textContent = 'montáž a zariadenie zadarmo';
  } else if (currentRotationDegrees >= 32.5 && currentRotationDegrees < 45) {
    paths.path1.style.fill= 'none';
    paths.path2.style.fill= '#00ff36';
    paths.path3.style.fill= 'none';
    paths.path4.style.fill= 'none';
    rotationText.textContent = 'pripojenie do 24hodín';
  } else if (currentRotationDegrees >= 45 && currentRotationDegrees < 52.5) {
    paths.path2.style.fill= 'none';
    paths.path1.style.fill= 'none';
    paths.path4.style.fill= 'none';
    paths.path3.style.fill= '#00ff36';
    rotationText.textContent = 'služby bez viazanosti';
  } else {
    paths.path3.style.fill= 'none';
    paths.path4.style.fill= '#00ff36';
    paths.path1.style.fill= 'none';
    paths.path2.style.fill= 'none';
    rotationText.textContent = 'bezplatný servis do 24 hodín od nahlásenia poruchy';
  }
}

if(image){
setInterval(updateFillPaths, 400);
};




var buttons = document.querySelectorAll(".connect");

if(buttons){
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    var link = button.querySelector('a');

    if (link) {
      link.click();
    }
  });
});
}

function toggleAnswer(questionElement) {
  var answerElement = questionElement.nextElementSibling;
  if (answerElement.style.display === 'none'|| answerElement.style.display === '') {
      answerElement.style.display = 'block';
  } else {
      answerElement.style.display = 'none';
  }
}


const svgMap = document.getElementById('svg-m');
const svg = document.querySelector('#svg1');

let isDragging = false;
let startPoint = { x: 0, y: 0 };
let panX = 0;
let panY = 0;
let zoomLevel = 1.0;
const maxZoom = 6.0;
const minZoom = 1.0;

if(svgMap){
function zoom(direction) {
  if (direction === 'in' && zoomLevel < maxZoom) {
    zoomLevel *= 1.2;
  } else if (direction === 'out' && zoomLevel > minZoom) {
    zoomLevel /= 1.2;
  }

  svg.style.transform = `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`;
}

function startPan(event) {
  isDragging = true;
  startPoint = getEventPoint(event);

  if (!event.target.classList.contains('location-image')) {
    event.preventDefault(); 
  }
}

function pan(event) {
  if (!isDragging) return;

  const currentPoint = getEventPoint(event);
  const deltaX = currentPoint.x - startPoint.x;
  const deltaY = currentPoint.y - startPoint.y;
  panX += deltaX / zoomLevel;
  panY += deltaY / zoomLevel;
  
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
    name: "Imatra 1",
  },
  {
    name: "Ľ  . Štúra 62",
  },
  {
    name: "Alexandra Nográdyho 31",
  },
  {
    name: "T. G. Masaryka 24 ( Technická univerzita)",
  },
  {
    name: "M.R.Štefánika 7",
  },
  {
    name: "Námestie slobody 20",
  },
  {
    name: "Námestie SNP 36 (city caffe)",
  },
  {
    name: "P.O.Hviezdoslava 7",
  },
  {
    name: "Kuzmányho nábrežie 28 (nemocnica)",
  },
  {
    name: "9.Mája 7",
  },
  {
    name: "J.Bánika 2",
  },
  {
    name: "Smreková 5",
  },
  {
    name: "Ružová 42",
  },
  {
    name: "A.Hlinku 27",
  },
  {
    name: "A.Hlinku 4",
  },
  {
    name: "J. Jesenského 49",
  },
  {
    name: "Lučenecká cesta 15",
  },
  {
    name: "Obrancov mieru 46",
  },
  {
    name: "Okružná 117",
  },
  {
    name: "Generála svobodu 19",
  },
  {
    name: "Javorová 8",
  },
  {
    name: "V.P Tótha 14",
  },
  {
    name: "M.R.Štefánika 10",
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

    if (window.matchMedia("(max-width: 880px)").matches) {
      
      locationInfo.style.fontSize = "0.9rem";
      locationInfo.style.maxWidth = "80%";
    } else {
      
      locationInfo.style.fontSize = "1.2rem";
    }
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
      if (!isInfoVisible) {
        hideLocationInfo();
      }
    });

    image.addEventListener("touchstart", function (event) {
      event.preventDefault();
      const locationIndex = this.getAttribute("data-location-index");
      showLocationInfo(locationIndex);
    });
  });

  document.addEventListener("click", function () {
    if (isInfoVisible) {
      hideLocationInfo();
    }
  });


});
}
