// var myInputs = document.getElementsByTagName("input");
// var btnElement = document.getElementsByTagName("button")[0]

// btnElement.addEventListener("click", function() {
//     document.getElementsByTagName("input")[0].value = "";
// });

var myInputs = document.getElementsByTagName("input");
var btnElement = document.getElementsByTagName("button")[0]

btnElement.addEventListener("click", function() {
    for (let i=0; i < myInputs.length; i++){   
        myInputs[i].value = ""};
});
