document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.getElementById("about");

  // Timeout is used here to ensure CSS is applied
  setTimeout(() => {
    aboutSection.classList.remove("hidden");
    aboutSection.classList.add("fade-in-up");
  }, 0);
});

const skillsData = [
  // Frontend Skills
  { category: "frontend", name: "HTML5", iconClass: "fab fa-html5" },
  { category: "frontend", name: "CSS3", iconClass: "fab fa-css3-alt" },
  { category: "frontend", name: "JavaScript", iconClass: "fab fa-js-square" },
  { category: "frontend", name: "React.js", iconClass: "fab fa-react" },

  // Backend Skills
  { category: "backend", name: "Node.js", iconClass: "fab fa-node" },
  { category: "backend", name: "Express.js", iconClass: "fab fa-node-js" },

  // Database Skills
  { category: "database", name: "SQL", iconClass: "fas fa-database" },
  { category: "database", name: "MongoDB", iconClass: "fas fa-server" },

  // Other Skills
  {
    category: "other",
    name: "RESTful APIs",
    iconClass: "fas fa-network-wired",
  },
  {
    category: "other",
    name: "Responsive Web Design",
    iconClass: "fas fa-laptop-code",
  },
  {
    category: "other",
    name: "Version Control (Git)",
    iconClass: "fas fa-code-branch",
  },
  { category: "other", name: "Agile Development", iconClass: "fas fa-users" },
];

function renderSkills(skills) {
  const skillsContainer = document.getElementById("skills-list");
  skillsContainer.innerHTML = ""; // Clear existing skills

  skills.forEach((skill) => {
    const skillElement = document.createElement("li");
    skillElement.setAttribute("data-category", skill.category);
    skillElement.innerHTML = `<i class="${skill.iconClass}"></i> ${skill.name}`;
    skillsContainer.appendChild(skillElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills(skillsData);
});

function filterSkills(category) {
  // Get all skill elements
  const allSkills = document.querySelectorAll("#skills-list li");
  // Loop through all skill elements
  allSkills.forEach((skill) => {
    // Check if the skill matches the filter category or if the filter is 'all'
    if (
      category === "all" ||
      skill.getAttribute("data-category") === category
    ) {
      skill.style.display = "list-item"; // Show skill
    } else {
      skill.style.display = "none"; // Hide skill
    }
  });
}

// Add event listeners to the filter buttons
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Get the category to filter by from the button's data-filter attribute
    const category = button.getAttribute("data-filter");
    // Filter skills based on the category
    filterSkills(category);
  });
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    // Add 'active' class to the clicked button
    button.classList.add("active");
    // Filter skills
    filterSkills(button.getAttribute("data-filter"));
  });
});
