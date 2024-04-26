const word = ["YATTA!", "YATTA!", "YATTA!", "YATTA!" , "YATTA!" , "YATTA!", "YATTA!", "YATTA!",];

let text = "";
for (let i = 0; i < word.length; i++) {
  text += word[i] + "<br>";
}

document.getElementById("demo2").innerHTML = text;