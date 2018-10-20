
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

	 	var requestGo=true;
	var contanctName=$("#contactname").val();
	if(contanctName==""){
		alert("No imput contactname");
		requestGo=false;
	}
		
	var email = $("#email").val();
	if(email==""){
		alert("No imput email");
		requestGo=false;
	}
	else if(email.indexOf("@")== -1)
	{
		alert("No imput email contains @");
		requestGo=false;
	}
	
	
	var message = $("#message").val();
	if(message==""){
		alert("No imput message");
		requestGo=false;
	}

	
	
	 if(requestGo){
					 var request = $.ajax({
						  url: "https://www.slicestic.com/api/v1/fe-dev",
						  type: "POST",
						  dataType: "html"
						});

						request.done(function(msg) {
						  alert( msg );
						});

						request.fail(function(jqXHR, textStatus) {
						  alert( "Request failed: " + textStatus );
						});
	 

		}
    });
	
  
});


function openNav() {
    if ( $(window).width() > 641) {
        console.log("tablet");
        document.getElementById("mySidenav").style.width = "50%";

    }
    else {
        document.getElementById("mySidenav").style.width = "100%";
        console.log("mobile");
    }
    }


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function showDivsubmenu() {
    $( "#dropdownContentMobile" ).toggle();
}



