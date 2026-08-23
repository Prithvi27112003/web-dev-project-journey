let btn = document.querySelector('button');
let percentage = document.querySelector('h1');
let track = document.querySelector('.inner');
let grow = 0;


btn.addEventListener('click',function(){
  btn.style.pointerEvents = 'none';
  btn.style.opacity = '50%';

  let speed = 50 + Math.floor(Math.random()*100);

  let downloading = setInterval(function(){
    grow++;
    track.style.width = grow+'%';
    percentage.innerHTML = grow+'%';

  },speed);

  setTimeout(function(){
    clearInterval(downloading);
  },speed*100);


});
