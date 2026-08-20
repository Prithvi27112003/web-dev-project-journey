let bulb = document.querySelector('.bulb');
let onbutton = document.querySelector('#on');
let offbutton = document.querySelector('#off');


onbutton.addEventListener('click',function(){
  bulb.style.backgroundColor = 'Gold';
});

offbutton.addEventListener('click',function(){
  bulb.style.backgroundColor = 'white';
});