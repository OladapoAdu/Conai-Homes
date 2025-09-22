// PAGE PRELOADER
window.addEventListener("load", function () {
  const loader = document.getElementById("preloader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";
    setTimeout(() => (loader.style.display = "none"), 500);
  }
});

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// SIGNUP PAGE LOGIC
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    const roleSelect = document.getElementById("role");
    const agentFields = document.getElementById("agentFields");
    const phone = document.getElementById("phone");
    const agency = document.getElementById("agency");
    const license = document.getElementById("license");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");

    // Show/hide agent fields
    function updateAgentFields() {
      if (roleSelect.value === "agent") {
        agentFields.classList.remove("hidden");
        phone.required = true;
        agency.required = true;
        license.required = true;
      } else {
        agentFields.classList.add("hidden");
        phone.required = false;
        agency.required = false;
        license.required = false;
      }
    }

    roleSelect.addEventListener("change", updateAgentFields);
    updateAgentFields();

    // Password validation
    signupForm.addEventListener("submit", function (e) {
      passwordError.classList.add("hidden");
      if (password.value !== confirmPassword.value) {
        e.preventDefault();
        passwordError.classList.remove("hidden");
        confirmPassword.focus();
        return false;
      }
      return true;
    });

    // Password toggle (using Material Icons)
    document.querySelectorAll(".toggle-password").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const input = toggle.previousElementSibling;
        if (input.type === "password") {
          input.type = "text";
          toggle.textContent = "visibility_off";
        } else {
          input.type = "password";
          toggle.textContent = "visibility";
        }
      });
    });
  }
});

// AGENTS PAGE
const agentsRow = document.getElementById("agentsRow");

if (agentsRow) {
  const agents = [
    {
      name: "John Doe",
      role: "Lagos Specialist",
      email: "john@example.com",
      image: "images/agent1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Abuja Specialist",
      email: "jane@example.com",
      image: "images/agent2.jpg",
    },
    {
      name: "Ikpeba Victor",
      role: "Port Harcourt Specialist",
      email: "vic@example.com",
      image: "images/agent3.jpg",
    },
    {
      name: "Owen Michael",
      role: "Ibadan Specialist",
      email: "owen@example.com",
      image: "images/agent4.jpg",
    },
  ];

  agents.forEach((agent) => {
    agentsRow.innerHTML += `
      <div class="agent-card">
        <img src="${agent.image}" alt="${agent.name}">
        <h5>${agent.name}</h5>
        <p>${agent.role}</p>
        <a href="mailto:${agent.email}" class="btn">Contact</a>
      </div>
    `;
  });
}
