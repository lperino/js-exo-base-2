var myImage1 = document.getElementById("image1");
var myImage2 = document.getElementById("image2");
var myImage3 = document.getElementById("image3");
var myImage4 = document.getElementById("image4");
var myImage5 = document.getElementById("image5");


var allImages = document.getElementsByTagName("img")



for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener("mouseover", function () {
        for (let j = 0; j < allImages.length; j++){
            allImages[j].src = "images/image" + (j+1) + "_2.jpg";
        }
    })
};
for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener("mouseleave", function () {
        for (let j = 0; j < allImages.length; j++) {
        allImages[j].src = "images/image" + (j+1) + ".jpg";
        }
    });
};