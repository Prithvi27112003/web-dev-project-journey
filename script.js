const people = [
  {
    name: "Rahul Sharma",
    role: "Software Developer",
    description: "Builds scalable web applications and solves complex technical problems.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    description: "Designs simple, attractive interfaces focused on great user experiences.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Aman Gupta",
    role: "Data Analyst",
    description: "Analyzes data to discover useful insights and support business decisions.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Neha Singh",
    role: "Project Manager",
    description: "Manages teams, timelines, and projects to achieve successful results.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

let main = document.querySelector('main');
var sum = '';

people.forEach(function(element){
  sum  += `<div class="card">
      <img src="${element.image}" alt="">
      <h2>${element.name}</h2>
      <h4>${element.role}</h4>
      <p>${element.description}</p>
    </div>`
});

main.innerHTML = sum;
console.log("HEllo");