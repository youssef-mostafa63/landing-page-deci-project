// Get all sections and the navigation list
const sections = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");

// Create navigation items
sections.forEach((section) => {
  const navItem = document.createElement("li");
  const navLink = document.createElement("a");

  // Get the section name
  const sectionName = section.getAttribute("data-nav");

  navLink.textContent = sectionName;
  navLink.href = `#${section.id}`;
  // Add the styling in the css file to the navbar
  navLink.classList.add("menu__link");

  navItem.appendChild(navLink);
  navbarList.appendChild(navItem);

  // Add click event for smooth scrolling
  navLink.addEventListener("click", (event) => {
    event.preventDefault();

    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Function to get section's position
function getSectionPosition(section) {
  return section.getBoundingClientRect();
}

// Function to check if section is in active window
function isSectionActive(sectionPosition) {
  // Check if section is near the top of the viewport
  return sectionPosition.top <= 150 && sectionPosition.bottom >= 150;
}

// Function to update active class
function updateActiveClass(section, isActive) {
  if (isActive) {
    section.classList.add("active");
  } else {
    section.classList.remove("active");
  }
}

// Add an event listener for scrolling
window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    // Get the position
    const position = getSectionPosition(section);
    // Check if active
    const active = isSectionActive(position);
    //Update class
    updateActiveClass(section, active);
  });
});

// Get the comment form
const commentForm = document.getElementById("comment-form");

// Comments Section Functionality
commentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const commentText = document.getElementById("comment").value;

  // validation
  if (!name || !email || !commentText) {
    alert("Please fill in all fields");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return;
  }

  // Create comment element
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");
  commentDiv.innerHTML = `
    <h3>${name}</h3>
    <h6>${email}</h6>
    <p>${commentText}</p>
  `;

  // append the comment
  document.getElementById("comments-container").appendChild(commentDiv);

  // clear the form
  this.reset();
});
