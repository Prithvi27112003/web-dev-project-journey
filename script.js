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
  },
  {
    name: "Vikash Kumar",
    role: "Frontend Developer",
    description: "Creates responsive websites with modern designs and interactive user interfaces.",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    name: "Ananya Mehta",
    role: "Backend Developer",
    description: "Develops secure server-side applications and manages databases efficiently.",
    image: "https://randomuser.me/api/portraits/women/49.jpg"
  },
  {
    name: "Rohan Kapoor",
    role: "Full Stack Developer",
    description: "Builds complete web applications using frontend and backend technologies.",
    image: "https://randomuser.me/api/portraits/men/68.jpg"
  },
  {
    name: "Simran Kaur",
    role: "Product Designer",
    description: "Creates user-friendly product designs based on customer needs and research.",
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    name: "Arjun Malhotra",
    role: "DevOps Engineer",
    description: "Automates deployments and maintains reliable, scalable software infrastructure.",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  }

];

let main = document.querySelector('main');
let sum = '';

people.forEach(function(person){
  sum += `<div class="card">
      <img src="${person.image}" alt="">
      <h2>${person.name}</h2>
      <h4>${person.role}</h4>
      <p>${person.description}</p>
    </div>`
})

main.innerHTML = sum;


