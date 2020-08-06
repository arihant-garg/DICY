var randomDice = Math.floor(Math.random() * 6) + 1;
var random = "dice" + randomDice + ".png";
var randomDice2 = Math.floor(Math.random() * 6) + 1;
var random2 = "dice" + randomDice2 + ".png";
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
var refresh = document.querySelector(".refresh");
image1.setAttribute("src", random);
image2.setAttribute("src", random2);
refresh.addEventListener("click", function(){
    var randomDice = Math.floor(Math.random() * 6) + 1;
var random = "dice" + randomDice + ".png";
var randomDice2 = Math.floor(Math.random() * 6) + 1;
var random2 = "dice" + randomDice2 + ".png";
image1.setAttribute("src", random);
image2.setAttribute("src", random2);
if(randomDice > randomDice2)
{
    refresh.textContent ="PLAYER 1 WINS";
}
else{
    refresh.textContent = "PLAYER 2 WINS";
}

});
if(randomDice > randomDice2)
{
    refresh.textContent ="PLAYER 1 WINS";
}
else{
    refresh.textContent = "PLAYER 2 WINS";
}

