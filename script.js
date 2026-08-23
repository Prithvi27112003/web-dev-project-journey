
let btn = document.querySelector('button');
let h1 = document.querySelector('h1');

btn.addEventListener('click',function(){
  h1.innerHTML = 'CHANGING WAIT FOR A WHILE';
  let name = prompt("Please enter your name");

  setTimeout(function(){
    h1.innerHTML = `Hello, I am ${name}.`;
  },3000);
})