let img = document.getElementById('roll-dice');
let displayNumber = document.getElementById('display');

function getRndInteger() {
    img.src = "./img/dice-0.png";
    displayNumber.innerText = "";
    img.style.animation = 'animate 1.5s linear'

    setTimeout(function(){
      const num = Math.floor(Math.random() * 6) + 1;
      img.src = `./img/dice-${num}.png`;
      displayNumber.innerHTML = num;
      console.log(num);
    }, 1700);

    img.addEventListener('animationend', function(e){
      img.style.animation = '';
    })
  }
  

// setInterval(anim, 5000);

//   function anim(){
//       img.classList.remove("rotate");
//       img.src = "./img/dice-0.png";
//       displayNumber.innerHTML = "";
//   }

function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }