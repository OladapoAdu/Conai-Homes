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

// SIGNUP PAGE
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

  // Build agent cards dynamically
  agents.forEach((agent) => {
    const card = document.createElement("div");
    card.classList.add("agent-card");

    card.innerHTML = `
      <img src="${agent.image}" alt="${agent.name}">
      <h3>${agent.name}</h3>
      <p>${agent.role}</p>
      <a href="mailto:${agent.email}" class="contact-btn">Contact</a>
    `;

    agentsRow.appendChild(card);
  });
}






// PROPERTY LISTINGS
// // Toggle nav
//     const hamburger = document.getElementById("hamburger");
//     const navLinks = document.getElementById("navLinks");
//     hamburger.addEventListener("click", () => {
//       navLinks.classList.toggle("show");
//     });

    // Property data
    const properties = [
      {
        type: "apartment",
        location: "Lagos, Nigeria",
        price: 120000000,
        description: "This luxury apartment offers modern architecture, spacious living areas, and a prime location in the heart of Lagos.",
        bedrooms: 4,
        bathrooms: 3,
        area: 350,
        parking: true,
        image: "images/card-house1.jpg"
      },
      {
        type: "house",
        location: "Abuja, Nigeria",
        price: 85000000,
        description: "A spacious family home in a quiet neighborhood with excellent security and modern amenities.",
        bedrooms: 5,
        bathrooms: 4,
        area: 420,
        parking: true,
        image: "images/card-house2.jpg"
      },
      {
        type: "duplex",
        location: "Port Harcourt, Nigeria",
        price: 200000000,
        description: "A stunning duplex with river views, modern interior designs, and large recreational spaces.",
        bedrooms: 6,
        bathrooms: 5,
        area: 500,
        parking: true,
        image: "images/card-house3.jpg"
      },
      {
        type: "land",
        location: "Ibadan, Nigeria",
        price: 45000000,
        description: "Well-situated land for residential or commercial development in a fast-growing area.",
        bedrooms: 0,
        bathrooms: 0,
        area: 800,
        parking: false,
        image: "images/land.jpg"
      }
    ];

    const propertyList = document.getElementById("propertyList");

    function renderProperties(list) {
      propertyList.innerHTML = "";
      if (list.length === 0) {
        propertyList.innerHTML = "<p>No properties match your search.</p>";
        return;
      }
      list.forEach((p) => {
        propertyList.innerHTML += `
          <div class="property-content">
            <div class="property-image">
              <img src="${p.image}" alt="${p.type}">
            </div>
            <div class="property-info">
              <h2>${p.type.charAt(0).toUpperCase() + p.type.slice(1)}</h2>
              <p class="location">📍 ${p.location}</p>
              <h4 class="price">₦${p.price.toLocaleString()} ${p.type === "land" ? "(Sale)" : "(Buy)"}</h4>
              <p>${p.description}</p>
              <ul>
                <li>🏠 ${p.bedrooms} Bedrooms</li>
                <li>🛁 ${p.bathrooms} Bathrooms</li>
                <li>📐 ${p.area} sqm</li>
                <li>🚗 ${p.parking ? "Parking Available" : "No Parking"}</li>
              </ul>
              <a href="agents.html" class="btn">Contact Agent</a>
            </div>
          </div>
        `;
      });
    }

    // Initial render
    renderProperties(properties);

    // Search functionality
    const searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const type = document.getElementById("propertyType").value;
      const price = document.getElementById("priceRange").value;

      let filtered = properties;

      if (type) {
        filtered = filtered.filter(p => p.type === type);
      }

      if (price) {
        if (price.endsWith("+")) {
          const min = parseInt(price.replace("+", ""));
          filtered = filtered.filter(p => p.price >= min);
        } else {
          const [min, max] = price.split("-").map(Number);
          filtered = filtered.filter(p => p.price >= min && p.price <= max);
        }
      }

      renderProperties(filtered);
    });