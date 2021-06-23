let slideIndex = 1;
displaySlide(slideIndex);

function displaySlide (n) {
    let slides=document.getElementsByClassName("display-img");
    let dots = document.getElementsByClassName("dot");

    //Reassign slideIndex value
    if(n>slides.length){
        slideIndex = 1;
    } else if(n == 0){
        slideIndex =slides.length;
    } else{
        slideIndex = n;
    } 


    for( i = 0; i<slides.length; i++){
        if(i==slideIndex-1){
            slides[i].style.display="block";
            dots[i].classList.add("active");
  
        }else{
            slides[i].style.display="none";
            dots[i].classList.remove("active");
        }
    }
}


function changeSlide (n) {
    displaySlide(slideIndex +=n);
    console.log(slideIndex);
}