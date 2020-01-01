var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

if(randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}else if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

function randomCheck(n) {

  if(n === 1) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice1.png");
  }else if(n === 2) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice2.png");
  }else if(n === 3) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice3.png");
  }else if(n === 4) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice4.png");
  }else if(n === 5) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice5.png");
  }else if(n === 6) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice6.png");
  }

}

function randomChecker(n) {

  if(n === 1) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice1.png");
  }else if(n === 2) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice2.png");
  }else if(n === 3) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice3.png");
  }else if(n === 4) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice4.png");
  }else if(n === 5) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice5.png");
  }else if(n === 6) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice6.png");
  }

}

randomCheck(randomNumber1);
randomChecker(randomNumber2);
