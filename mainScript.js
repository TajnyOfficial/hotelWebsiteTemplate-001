//Script for mainWebsite and for copy website in another language
//Author: Pawel Kotajny 
//Number projekt: #001
//For: ==== 

//This two funcion make print and remove text from window
function printDiv(){
    document.getElementById("dispText").style.display = "block";
}

function removeDiv(){
    document.getElementById("dispText").style.display = "none";
}


//Giving for "element" class "class" shows and removes the text with a delay of 0.5s
function showText() {
    var textElement = document.getElementById("element");
    textElement.classList.add("class");
}

function removeText() {
    var textElement = document.getElementById("element");
    textElement.classList.remove("class");
}


//Function to show menu on click
function toggleMenu(element) {
    element.classList.toggle("active");
}