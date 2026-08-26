let message = document.querySelector('h1 span');
let image = document.querySelector('img');
let body = document.body;

image.addEventListener('mouseenter',function(){
  message.innerHTML = 'Chuki sa dur rha tu';
  body.style.backgroundColor = 'red';

});

image.addEventListener('mouseleave',function(){
  message.innerHTML = 'Hmm good';
  body.style.backgroundColor = 'green';
})