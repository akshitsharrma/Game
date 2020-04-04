var num=Math.floor(6*Math.random()+1);
var randomDiceImage="dice"+num+".png";
var randomDiceSrc="images/"+randomDiceImage;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDiceSrc);
var num2=Math.floor(6*Math.random()+1);
var randomDiceImage2="dice"+num2+".png";
var  randomDiceImage2src="images/"+randomDiceImage2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomDiceImage2src);
if(num>num2)
{
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if(num<num2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
  
    document.querySelector("h1").innerHTML="Draw!";
}
document.querySelector("h1").remove="Draw!";
