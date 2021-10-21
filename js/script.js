const navBtnEl = document.querySelector(".btn-mobile-nav");
navBtnEl.addEventListener("click", function () {
  document.body.classList.toggle("nav-open");
});

// Smooth Scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("main-nav-link")) {
      document.body.classList.toggle("nav-open");
    }
  });
});
