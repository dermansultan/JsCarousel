const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let slideList = document.querySelectorAll('.imgSlide');
let currentSlideIndex = 0;
console.log(currentSlideIndex);
console.log(slideList);
console.log(slideList[currentSlideIndex]);


const setCurrentSlide = function (index) {
    currentSlideIndex+= index;
    console.log('SlideListLength', slideList.length)
    if (currentSlideIndex < 0){
        currentSlideIndex = slideList.length - 1;
    } 
    if (currentSlideIndex > slideList.length - 1){
        currentSlideIndex = 0;
    }
    
    console.log(currentSlideIndex); 

}

const getCurrentSlide = function () {
    console.log(currentSlideIndex);
    return currentSlideIndex;
}

const renderCurrentSlide = function (index){
    // Using the Index Display that one, Hide the Rest;
    console.log(index);
    console.log(slideList[index]);
    slideList.forEach(function (value, index){
        if (index == currentSlideIndex){
            value.style.display = 'flex'
        } else {
            value.style.display = 'none';
        }

    })
    // slideList[index].classList.toggle('imgSlideNone');
}

// const getSlideList = function () {
//     let slideList = document.querySelectorAll('.imgSlide');
//     console.log(slideList);
//     return slideList
// }

leftArrow.addEventListener('click', () => {
    setCurrentSlide(-1);
    renderCurrentSlide(currentSlideIndex);
});

rightArrow.addEventListener('click', () => {
   setCurrentSlide(1);
   renderCurrentSlide(currentSlideIndex);
});