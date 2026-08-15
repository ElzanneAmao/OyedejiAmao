(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".nav-mobile");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.classList.toggle("open");
    });
  }

  // Mobile accordion for Case Studies
  var accordionToggle = document.querySelector(".nav-accordion-toggle");
  if (accordionToggle) {
    accordionToggle.addEventListener("click", function () {
      var sub = accordionToggle.nextElementSibling;
      var expanded = accordionToggle.getAttribute("aria-expanded") === "true";
      accordionToggle.setAttribute("aria-expanded", String(!expanded));
      if (sub) sub.classList.toggle("open");
    });
  }

  // Mark active nav link
  var path = window.location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll("[data-nav-link]").forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var normalized = href.replace(/\/index\.html$/, "/");
    if (normalized === path || (normalized !== "/" && path.indexOf(normalized) === 0)) {
      link.classList.add("active");
    }
  });

})();
