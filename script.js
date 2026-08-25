let title = document.querySelector('h4');
let button = document.querySelector('button');

let friend = false;
button.addEventListener('click',function(){
  if(friend === false){
    friend = true;
    button.innerHTML = 'Unfollow';
    title.innerHTML = 'Friend';
    title.style.color = 'pink';
  }else{
    friend = false;
    button.innerHTML = 'Follow';
    title.innerHTML = 'Stranger';
    title.style.color = 'red';
  }
})