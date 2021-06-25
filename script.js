let slideIndex = 1;
const totalSlide = 3;
const slideName = "slide";
displaySlide(slideIndex);

function displaySlide (n) {
    let dots = document.getElementsByClassName("dot");

    //Reassign slideIndex value
    if(n>totalSlide){
        slideIndex = 1;
    } else if(n == 0){
        slideIndex =totalSlide;
    } else{
        slideIndex = n;
    } 

    for( let i = 0; i<totalSlide; i++){
        if(i==slideIndex-1){
            dots[i].classList.add("active");
  
        }else{
            dots[i].classList.remove("active");
        }
    }

    document.getElementById("display-img").src = "images/"+ slideName + slideIndex + ".jpg";
}


function changeSlide (n) {
    displaySlide(slideIndex +=n);   
}
