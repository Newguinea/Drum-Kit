var numofbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numofbuttons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var bottonInnerHTML = this.innerHTML;
    MakeSound(bottonInnerHTML);
    buttonAnimation(bottonInnerHTML);
  });
}

document.addEventListener("keypress", function(event){
  MakeSound(event.key);
  buttonAnimation(event.key);
});


function MakeSound(key){
  switch(key){
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log();
}};


function buttonAnimation(currentKey) {
  var activeBuotton = document.querySelector("." + currentKey);
  activeBuotton.classList.add("pressed");
  setTimeout(function() {
    activeBuotton.classList.remove("pressed");
  },100)
}
