var slideIndex = 1;
showSlides(slideIndex);
function plusSlide() {
    showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
    
}
window.addEventListener("DOMContentLoaded", function() {
    var url = document.querySelector("#tel"),
      val = str = url.defaultValue,
      flag;
    url.value = val;
    url.addEventListener("input", function(event) {
      if (url.selectionStart > val.length - 1 && !flag) str = url.value, str = str.slice(val.length), str = val + str;
      flag = false;
      url.value = str
    });
    url.addEventListener("paste", function(event) {
      if (url.selectionStart < val.length) flag = true
    })
  });
