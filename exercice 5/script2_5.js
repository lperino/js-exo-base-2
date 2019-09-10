
var myImage1 = document.getElementById("image1");
var myImage2 = document.getElementById("image2");
var myImage3 = document.getElementById("image3");
var myImage4 = document.getElementById("image4");
var myImage5 = document.getElementById("image5");


var allImages = document.getElementsByTagName("img")


allImages[0].addEventListener("mouseover", function () {
    for (let i = 0; i < allImages.length; i++) {
        
        allImages[i].src = "images/image" + (i+1) + "_2.jpg";

    };

});