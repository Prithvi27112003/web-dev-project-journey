let box = document.querySelector('main');
let boxText = document.querySelector('main h1');
let button = document.querySelector('button');

let arr = [
  {
    'team' : 'CSK',
    'Primary' : 'Yellow',
    'Secondary' : 'Blue'
  },
  {
    'team' : 'MI',
    'Primary' : 'Blue',
    'Secondary' : 'Gold'
  },
  {
    'team' : 'KKR',
    'Primary' : 'Purple',
    'Secondary' : 'Gold'
  }
  ,{
    'team' : 'RCB',
    'Primary' : 'Red',
    'Secondary' : 'black'
  },
  {
    'team' : 'SRH',
    'Primary' : 'Orange',
    'Secondary' : 'black'
  },
  {
    'team' : 'PBSK',
    'Primary' : 'Red',
    'Secondary' : 'Blue'
  },
  {
    'team' : 'RR',
    'Primary' : 'Pink',
    'Secondary': 'Blue'
  },
  {
    'team' : 'DD',
    'Primary': 'Blue',
    'Secondary': 'Red'
  },
  {
    'team' : 'LSG',
    'Primary':'Aqua',
    'Secondary':'orange'
  },
  {
    'team' : 'GT',
    'Primary':'Black',
    'Secondary':'Gold'
  }
];

button.addEventListener('click',function(){
  let guess = arr[Math.floor(Math.random()*10)];

  boxText.innerHTML = `${guess.team}`;
  boxText.style.color = `${guess.Secondary}`;
  box.style.backgroundColor = `${guess.Primary}`;
  console.log(guess);

})