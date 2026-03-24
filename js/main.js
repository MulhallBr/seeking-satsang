// Smooth scroll for internal anchor links (same-page only)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    // Only handle valid on-page anchors
    if (targetId.length > 1 && document.querySelector(targetId)) {
      e.preventDefault();

      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Optional: highlight active nav link based on current page
const currentPath = window.location.pathname.split("/").pop();

document.querySelectorAll('.nav a').forEach(link => {
  const linkPath = link.getAttribute('href').split("/").pop();

  if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
    link.style.fontWeight = "bold";
  }
});