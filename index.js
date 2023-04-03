var randomNumber1 = Math.floor(Math.random()*6)+1;
var imageSource = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageSource1 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSource1);

if(imageSource == imageSource1){
    document.querySelector("h1").innerHTML = "Tie"
}
else if(imageSource > imageSource1){
    document.querySelector("h1").innerHTML = "🫡 Player 1 Win"
}else{
    document.querySelector("h1").innerHTML = "🫡 Player 2 Win"
}

