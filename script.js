let main = document.querySelector('main');
let cursor = document.getElementById('Cursor');

main.addEventListener('mousemove',function(det){
  cursor.style.left = det.x + 'px';
  cursor.style.top =  det.y + 'px';
});