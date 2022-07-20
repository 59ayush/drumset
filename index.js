var sounds = new Map();
sounds.set('a', "sounds/tom-1.mp3");
sounds.set('s', "sounds/tom-2.mp3");
sounds.set('d', "sounds/tom-3.mp3");
sounds.set('f', "sounds/tom-4.mp3");
sounds.set('j', "sounds/crash.mp3");
sounds.set('k', "sounds/kick-bass.mp3");
sounds.set('l', "sounds/snare.mp3");


for (let i = 0; i<document.querySelectorAll(".set button").length; ++i){
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    playSound(this.textContent);
    buttonAnimation(this.textContent);
  });
}


document.addEventListener("keypress", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});


function playSound(temp){
  var audio = new Audio(sounds.get(temp));
  audio.play();
}

function buttonAnimation(temp){
  var element = document.querySelector("." + temp);
  element.classList.toggle("pressed");
  setTimeout(function(){
    element.classList.toggle("pressed");
  }, 100);
}
