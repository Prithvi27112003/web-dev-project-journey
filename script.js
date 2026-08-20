let counter = document.querySelector('#Counter');
let increase = document.querySelector('#Increase');
let decrease = document.querySelector('#Decrease');

let count = 0;
increase.addEventListener('click',function(){
  count++;
  counter.innerHTML = count;
})


decrease.addEventListener('click',function(){
  count--;
  counter.innerHTML = count;
})