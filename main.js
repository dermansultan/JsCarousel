const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let slideList = document.querySelectorAll('.imgSlide');
let currentSlideIndex = 0;
console.log(currentSlideIndex);



const setCurrentSlide = function (index) {
    currentSlideIndex+= index;
    console.log('SlideListLength', slideList.length)
    if (currentSlideIndex < 0){
        currentSlideIndex = slideList.length;
    } 
    if (currentSlideIndex > slideList.length){
        currentSlideIndex = 0;
    }
    
    console.log(currentSlideIndex); 

}

const getCurrentSlide = function () {
    console.log(currentSlideIndex);
    return currentSlideIndex;
}

const setCurrentSlideDOM = function (index){
    // Using the Index Display that one, Hide the Rest;
    console.log(index);
    console.log(slideList[index]);
    // slideList[index].classList.toggle('imgSlideNone');
}

// const getSlideList = function () {
//     let slideList = document.querySelectorAll('.imgSlide');
//     console.log(slideList);
//     return slideList
// }

leftArrow.addEventListener('click', () => {
    setCurrentSlide(-1);
    setCurrentSlideDOM(currentSlideIndex);
});

rightArrow.addEventListener('click', () => {
   setCurrentSlide(1);
   setCurrentSlideDOM(currentSlideIndex);
});