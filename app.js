const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");
const navbar = document.getElementById("top-nav");
const navLinks = navMenu ? navMenu.querySelectorAll("a") : [];
const revealElements = document.querySelectorAll(".section-reveal");
const isPeoplePage = document.body.classList.contains("page-people");

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

const updateNavbarState = () => {
  if (!navbar) {
    return;
  }

  navbar.classList.toggle("scrolled", window.scrollY > 8);
};

window.addEventListener("scroll", updateNavbarState);
updateNavbarState();

if (isPeoplePage) {
  // The People page is dense and heavily anchor-linked, so disabling
  // reveal-on-scroll avoids perceived "stalls" while scrolling.
  document.documentElement.style.scrollBehavior = "auto";
  revealElements.forEach((element) => {
    element.classList.remove("reveal-pending");
    element.classList.add("is-visible");
  });
} else if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isInitiallyVisible = rect.top < window.innerHeight * 0.92;

    if (isInitiallyVisible) {
      element.classList.add("is-visible");
      return;
    }

    element.classList.add("reveal-pending");
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
