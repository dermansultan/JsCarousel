const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const circleContainer = document.getElementById("circlesContainer");

let slideList = document.querySelectorAll(".imgSlide");
let currentSlideIndex = 0;

const setCurrentSlide = function (index) {
  currentSlideIndex += index;
  console.log("SlideListLength", slideList.length);
  if (currentSlideIndex < 0) {
    currentSlideIndex = slideList.length - 1;
  }
  if (currentSlideIndex > slideList.length - 1) {
    currentSlideIndex = 0;
  }

  console.log(currentSlideIndex);
};

const renderCurrentSlide = function (index) {
  // Using the Index Display that one, Hide the Rest;
  console.log(index);
  console.log(slideList[index]);
  slideList.forEach(function (value, index) {
    if (index == currentSlideIndex) {
      value.style.display = "flex";
    } else {
      value.style.display = "none";
    }
  });
  // slideList[index].classList.toggle('imgSlideNone');
};

const renderCurrentCircle = function (index) {
  // Using the Index Display that one, Hide the Rest;
  console.log(index);
  console.log(circleList[index]);
  circleList.forEach(function (value, index) {
    let circleIco = value.querySelector(".fa-circle");
    if (index == currentSlideIndex) {
      circleIco.className = "fas fa-circle";
    } else {
      circleIco.className = "far fa-circle";
    }
  });
  // slideList[index].classList.toggle('imgSlideNone');
};

const renderCircleIcon = function () {
  let circleBtn = document.createElement("button");
  circleBtn.className = "circleBtn";
  let circleBtnIcon = document.createElement("i");
  circleBtnIcon.className = "fas fa-circle";
  circleBtn.appendChild(circleBtnIcon);
  circleBtn.addEventListener("click", function () {
    let circleClicked = this;
    for (let i = 0; i < circleList.length; i++) {
      let item = circleList[i];
      if (item == circleClicked) {
        currentSlideIndex = i;
        renderCurrentCircle(currentSlideIndex);
        renderCurrentSlide(currentSlideIndex);
      }
    }
  });
  circleContainer.appendChild(circleBtn);
};
const renderCircleList = function () {
  for (let i = 0; i < slideList.length; i++) {
    renderCircleIcon();
  }
};
renderCircleList();
let circleList = document.querySelectorAll(".circleBtn");
console.log(circleList);
renderCurrentCircle(currentSlideIndex);

leftArrow.addEventListener("click", () => {
  setCurrentSlide(-1);
  renderCurrentSlide(currentSlideIndex);
  renderCurrentCircle(currentSlideIndex);
});

rightArrow.addEventListener("click", () => {
  setCurrentSlide(1);
  renderCurrentSlide(currentSlideIndex);
  renderCurrentCircle(currentSlideIndex);
});

console.log(currentSlideIndex);
console.log(slideList);
console.log(slideList[currentSlideIndex]);

// Changes every 5 seconds
window.setInterval(function(){
  setCurrentSlide(1);
  renderCurrentSlide(currentSlideIndex);
  renderCurrentCircle(currentSlideIndex);
}, 7000);
