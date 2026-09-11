let p = document.querySelector("p");
let text = p.innerText;
let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let iteration = 0;

function random(){
  const str = text.split("").map((char,index) => {
    if(iteration > index){
      return char;
    }
    return character.split("")[Math.floor(Math.random()*52)]
  }).join("")

  p.innerText = str;

  iteration += 0.25;
}

setInterval(random,25);