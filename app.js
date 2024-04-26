const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "GOOD MORNING!!";
} else {
  greeting = "GOOD EVENING!!";
}

document.getElementById("demo").innerHTML = greeting;


const word = ["YATTA!", "YATTA!", "YATTA!", "YATTA!" , "YATTA!"];

let text = "";
for (let i = 0; i < word.length; i++) {
  text += word[i] + "<br>";
}

document.getElementById("demo-2").innerHTML = text;
