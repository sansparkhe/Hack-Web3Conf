let userseq = [];
let gameseq = [];
 //let help = document.querySelector(".help");
let started = false;
let level = 0;
let color = ["green", "red", "blue", "yellow"];
let h2 = document.querySelector("h2");
const audio = document.getElementById('myAudio');
audio.volume = 0.5;
// Play the audio


// Pause the audio

// Get elements by class name
const startButtons = document.getElementsByClassName("start");

// Check if there is at least one button and add an event listener to the first one
if (startButtons.length > 0) {
    startButtons[0].addEventListener("click", function () {
        if (started === false) {
            console.log("game started");
            started = true;
            levelup();
        }
    });
}

function butnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}

function userflash(btn) {
    btn.classList.add("uflash");
    setTimeout(function () {
        btn.classList.remove("uflash");
    }, 100);
}

function levelup() {
    userseq =[];
    level++;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random() * 4); // Change to 4 to include all colors
    let randcolor = color[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    console.log(randbtn);
    console.log(randcolor);
    console.log(randidx);
    gameseq.push(randcolor);
    console.log("game seq "+ gameseq);
    butnflash(randbtn);
}
let score=0;
let maxValue =0;
function checkans(idx){
  //  let idx = level-1;
  
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length)
         setTimeout(levelup, 1000);
       score+=10;
       
    }
    else{
      // h2.innerText = `oops !! games over lets start over`;
      maxValue = Math.max(maxValue,score);
  
       h2.innerText = `oops !! here your overall score ${score} with higest score of all level ${maxValue} press start button`;
      document.querySelector("body").style.backgroundColor ="red";
      audio.play();
      setTimeout(() => {
        document.querySelector("body").style.backgroundColor =" rgb(238, 158, 234)";
      }, 150);
     // document.querySelector("body").style.backgroundColor ="purple";

       resetgame();
    
    }
}
function btnpress(event) {
    console.log(this);
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    console.log(usercolor);// this is printing the color
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

// Corrected function reference
let allbtns = document.querySelectorAll(".btn_1, .btn_2, .btn_3, .btn_4");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress); // Pass the function reference
}
function resetgame(){
    started = false;
    gameseq = [];
    userseq = [];
    level =0;
    score=0;
    // audio.pause();
}

const helpButton = document.querySelector('.help');
const helpInstructions = document.querySelector('.help_instructions');

helpButton.addEventListener('click', () => {
  helpInstructions.style.display = 'block';
});

// Check if the audio is playing

// Set the volume (0 to 1)
