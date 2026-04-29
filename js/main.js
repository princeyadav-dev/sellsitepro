// 🔹 NAVBAR TOGGLE (Mobile Ready)
const navbar = document.querySelector(".navbar");

// Create menu button dynamically
const menuBtn = document.createElement("div");
menuBtn.innerHTML = "☰";
menuBtn.style.fontSize = "24px";
menuBtn.style.cursor = "pointer";
menuBtn.style.display = "none";
menuBtn.classList.add("menu-btn");

navbar.appendChild(menuBtn);

// Show button on small screens
function handleResize() {
  if (window.innerWidth <= 768) {
    menuBtn.style.display = "block";
  } else {
    menuBtn.style.display = "none";
  }
}
window.addEventListener("resize", handleResize);
handleResize();

// Toggle menu
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});


// 🔹 CLOSE MENU WHEN LINK CLICKED
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});


// 🔹 SMOOTH SCROLL (for internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// 🔹 ACTIVE LINK HIGHLIGHT ON SCROLL
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("class");
    }
  });

  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});


// 🔹 SIMPLE FORM ALERT (FEEDBACK)
const form = document.querySelector(".feedback form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    form.reset();
  });
}


// 🔹 SCROLL SHADOW NAVBAR
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
  }
});