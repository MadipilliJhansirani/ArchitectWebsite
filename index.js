const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); //stop form refresh
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const comment = document.getElementById("comment").value.trim();
  if (!name || !email || !subject || !comment) {
    alert("Please enter all fields❗");
  } else {
    alert("message sent successfully! ✅");
    form.reset();
  }
});

const sections = document.querySelectorAll(
  "#mj, #projects, #about, #contact"
);
const navLinks = document.querySelectorAll(".nav-link");

//Highlight Nav bar
const observer = new IntersectionObserver((entries) => {

  
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;

      // first remove all highlights
      navLinks.forEach(link => link.classList.remove("active"));

      // only add active if NOT home
      if (id !== "mj") {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    }
  });
}, 

  {
    root: null,//used as desfualt viewport for checking visibility and section entering and leaving visible area of browser window
    threshold: 0.6, // 60% section visible
  }
);
const brandLink = document.querySelector(".brand");
brandLink.addEventListener("click", () => {
  navLinks.forEach(link => link.classList.remove("active"));
});

sections.forEach((section) => observer.observe(section));
