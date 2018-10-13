
currentDiv(1);
function plusDivs(n) {
    showDivs(n-1);
}

function currentDiv(n) {
    showDivs(n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-blue", "");
    }
    x[n].style.display = "block";
    dots[n].className += " w3-blue";
}

var slideIndex = 0;
showSlides();

function showSlides() {
    if(slideIndex==document.getElementsByClassName("mySlides").length)
        slideIndex=0;
   currentDiv(slideIndex)
    slideIndex+=1;

    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
$(document).ready(function(){
	
    $("#LoadMore").click(function(){
        $(".ContentPictures").append($(".ContentPictures").html());
    });
	$("#SubmitMessage").click(function(){
        $.post( "www.slicestic.com/api/v1/fe-dev", function( data ) {
		  $( ".result" ).html( data );
		});
    });
	
  
});



