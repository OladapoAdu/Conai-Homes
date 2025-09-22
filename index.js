// PAGE PRELOADER
window.addEventListener("load", function(){
    let loader = document.getElementById("preloader");
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";
    setTimeout(() => loader.style.display = "none", 500);
});




// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});



// AGENTS PAGE
// ====================================================================================================================================================================================================================
// AGENTS DATA
const agents = [
  { 
    name: "John Doe", 
    role: "Lagos Specialist", 
    email: "john@example.com", 
    image: "images/agent1.jpg" 
  },
  { 
    name: "Jane Smith", 
    role: "Abuja Specialist", 
    email: "jane@example.com", 
    image: "images/agent2.jpg" 
  },
  {
    name: "Ikpeba Victor",
    role: "Port Hacourt Specialist",
    email: "vic@example.com",
    image: "images/agent3.jpg"

  },
  {
    name: "Owen Michael",
    role: "Port Hacourt Specialist",
    email: "vic@example.com",
    image: "images/agent3.jpg"

  }
];




// AGENTS UPDATE FUNCTION
const agentsRow = document.getElementById("agentsRow");

agents.forEach(agent => {
  agentsRow.innerHTML += `
    <div class="col-md-4">
      <div class="card h-100 shadow">
        <img src="${agent.image}" class="card-img-top" alt="${agent.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${agent.name}</h5>
          <p class="card-text">${agent.role}</p>
          <a href="mailto:${agent.email}" class="btn btn-primary">Contact</a>
        </div>
      </div>
    </div>
  `;
});
// ====================================================================================================================================================================================================================
