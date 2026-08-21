let score = document.querySelector('h1');
let incButton = document.querySelector('#increase');
let decButton = document.querySelector('#decrease');
let resetButton = document.querySelector('#reset');

let count = 0;

incButton.addEventListener('click',function(){
  count++;
  score.innerHTML = count;
});

decButton.addEventListener('click',function(){
  count--;
  score.innerHTML = count;
});

resetButton.addEventListener('click',function(){
  count = 0;
  score.innerHTML = count;
})