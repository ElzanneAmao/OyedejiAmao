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

  // Mark active nav link. Hrefs are relative, so resolve each against the
  // current URL before comparing — works whether the site is hosted at a
  // domain root or a subpath (e.g. GitHub Pages project sites).
  var path = window.location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll("[data-nav-link]").forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var resolved = new URL(href, window.location.href).pathname.replace(/\/index\.html$/, "/");
    if (resolved === path) {
      link.classList.add("active");
    }
  });

  // How I Work: highlight the rail link for the phase currently in view.
  // The links are ordinary anchors, so navigation already works without
  // this — it only adds the active state and horizontal rail tracking.
  var railLinks = document.querySelectorAll("[data-rail]");
  var phases = document.querySelectorAll("[data-phase]");
  if (railLinks.length && phases.length && "IntersectionObserver" in window) {
    var linkFor = {};
    railLinks.forEach(function (link) {
      linkFor[link.getAttribute("href").slice(1)] = link;
    });

    var setActive = function (id) {
      railLinks.forEach(function (link) {
        link.classList.toggle("active", link === linkFor[id]);
      });
      // On mobile the rail scrolls horizontally; keep the active chip visible.
      var active = linkFor[id];
      var rail = document.querySelector(".method-rail");
      if (active && rail && rail.scrollWidth > rail.clientWidth) {
        var target = active.offsetLeft - (rail.clientWidth - active.offsetWidth) / 2;
        rail.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
      }
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-120px 0px -62% 0px" });

    phases.forEach(function (phase) { observer.observe(phase); });
    setActive(phases[0].id);
  }

})();
