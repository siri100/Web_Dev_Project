let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let img1 = `./images/dice${randomNumber1}.png`;
const diceImage = document.querySelector('.img1');
diceImage.src = img1

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let img2 = `./images/dice${randomNumber2}.png`;
const diceImage1 = document.querySelector('.img2');
diceImage1.src = img2


if(randomNumber1>randomNumber2){
    document.querySelector('h1').textContent = `Player 1 won`
}else{
     document.querySelector('h1').textContent = `Player 2 won`
}

console.log(randomNumber1)