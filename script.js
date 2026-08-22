let button = document.querySelector('button');
let box = document.querySelector('main');
let boxText = document.querySelector('main h1');
let bigBox = document.querySelector('#bigBox');

let arr = [
  {
    'Team' :'CSK',
    'Primary' : 'Yellow',
    'Secondary' : 'Blue'
  },
  {
    'Team' : 'MI',
    'Primary' : 'Blue',
    'Secondary': 'Gold'
  }, 
  {
    'Team' : 'RCB',
    'Primary' : 'Red',
    'Secondary':'Black'
  },
   {
    'Team' : 'KKR',
    'Primary' : 'Purple',
    'Secondary': 'Gold'
  },
  {
    'Team' : 'RR',
    'Primary': 'Pink',
    'Secondary': 'Blue'
  }, 
  {
    'Team' : 'GT',
    'Primary' : 'Black',
    'Secondary' : 'Gold'
  },
  {
    'Team' : 'SRH',
    'Primary' : 'Orange',
    'Secondary' : 'Black'
  }, 
  {
    'Team': 'DD',
    'Primary' : 'Red',
    'Secondary' : 'Blue'
  }, 
  {
    'Team' : 'LSG',
    'Primary': 'aqua',
    'Secondary' : 'sliver'
  }, 
  {
    'Team' : 'PBSK',
    'Primary' : 'Red',
    'Secondary': 'Gold'
  }
];

button.addEventListener('click', function(){
  let guess = arr[Math.floor(Math.random()*10)];

  boxText.innerHTML = `${guess.Team}`;
  box.style.backgroundColor = `${guess.Secondary}`;
  bigBox.style.backgroundColor= `${guess.Primary}`;
});