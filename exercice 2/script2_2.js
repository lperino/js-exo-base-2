//var name = document.getElementById("nom");
//getElementById("nom").onfocusout = alert("Merci de votre participation")


var nameInput = document.getElementById("nom")
nameInput.addEventListener("focusout", function(){
    alert("Merci de votre participation")
});



