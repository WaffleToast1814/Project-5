const nodeList = document.querySelectorAll(".Text-5");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "red";
}



let audio = document.getElementById("Veliona-Laugh");
let button = document.querySelector(".Click-Button-2")
function play(){
    let audio = document.getElementById("Veliona-Laugh");
    audio.play()
}

button.addEventListener("click", play)