let box = document.querySelector('#box');
let button = document.querySelector('button');



button.addEventListener('click',function(){
  let red = Math.floor(Math.random()*100);
  let green = Math.floor(Math.random()*100);
  let blue = Math.floor(Math.random()*100);

  box.style.backgroundColor = `rgb(${red},${green},${blue})`;
})