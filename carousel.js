const slides= document.getElementsByClassName("carousel-content");
let slidePosition=0;
let totalSlide = slides.length;

document.getElementById("prev-button").addEventListener('click', moveToPrev);
document.getElementById("next-button").addEventListener('click', moveToNext);

function hideAllCarousel(){
    for(let slide of slides){
        slide.classList.remove("carousel-visible");
       slide.classList.add("carousel-hidden");
    }

}

function moveToPrev(){
    hideAllCarousel()
    if(slidePosition===0){
        slidePosition= totalSlide-1;
    }else{ 
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-visible");
};

function moveToNext(){
    hideAllCarousel();
    if(slidePosition=== totalSlide-1){
        slidePosition = 0;
    }else{
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-visible");
    
};