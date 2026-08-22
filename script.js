let main = document.querySelector('main');
let button = document.querySelector('button');

button.addEventListener('click',function(){
  let line = ['Never give up','Keep moving forward','Live your dreams','You got this','Dream big','Be a giver','Count your blessings','Appreciate every moment','Turn your wounds into wisdom.'];

  let choose = line[Math.floor(Math.random()*9)];
  let p = document.createElement('p');
  p.innerHTML = choose;
  console.log(p);
  main.appendChild(p);
  let x = Math.random()*100;
  let y = Math.random()*100;
  let r = Math.random()*180;
  let s = Math.random()*3;
  let c1 = Math.floor(Math.random()*256);
  let c2 = Math.floor(Math.random()*256);
  let c3 = Math.floor(Math.random()*256);



  p.style.position = 'absolute';
  p.style.left = x+'%';
  p.style.top = y+'%';
  p.style.rotate = r+'deg';
  p.style.scale = s;
  p.style.color = `rgb(${c1},${c2},${c3})`;

})