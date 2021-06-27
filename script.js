let slideIndex = 1;
const totalSlide = 3;
const slideName = "slide";
let dots = document.getElementsByClassName("dot");
window.onload=setInterval(autoRun, 2000);
window.onunload=clearInterval(autoRun);

 //Change image src to display and update the dot style
function currentSlide(){
    document.getElementById("display-img").src = "images/"+ slideName + slideIndex + ".jpg";
    for( let i = 0; i<totalSlide; i++){
        if(i === slideIndex-1){
            dots[i].classList.add("active");
  
        }else{
            dots[i].classList.remove("active");
        }
    }
}

function displaySlide (n) {
    //Reassign slideIndex value
    if( n > totalSlide){
        slideIndex = 1;
    } else if(n === 0){
        slideIndex =totalSlide;
    } else{
        slideIndex = n;
    } 

    currentSlide();
}

function changeSlide (n) {
    displaySlide(slideIndex +=n);   
}

function autoRun(){
    slideIndex++;
    if(slideIndex>totalSlide){
        slideIndex = 1;
    }
    currentSlide();
    console.log(slideIndex);
}






