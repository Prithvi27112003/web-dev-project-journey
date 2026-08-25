let title = document.querySelector('h4');
let button = document.querySelector('button');

let friend = false;
button.addEventListener('click',function(){
  if(friend === false){
    friend = true;
    setTimeout(function(){
      button.innerHTML = 'Unfollow';
      title.innerHTML = 'Friend';
      title.style.color = 'pink';
      button.style.backgroundColor = 'red';
    },300);
  }else{
    friend = false;
    setTimeout(function(){
      button.innerHTML = 'Follow';
      title.innerHTML = 'Stranger';
      title.style.color = 'red';
      button.style.backgroundColor = 'green';
    },300);
  }
})