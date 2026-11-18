/* Robert Vicencio · A Programme
   Quiet motion only: reveals on scroll, scroll-spy on the top nav. */

(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── reveal on scroll ─────────────────────────────── */
  var revealables = document.querySelectorAll("[data-reveal]");

  if (reduced || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    revealables.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ── scroll spy ───────────────────────────────────── */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".topnav a[href^='#']"));
  var targets = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      return section ? { link: link, section: section } : null;
    })
    .filter(Boolean);

  if (targets.length && "IntersectionObserver" in window) {
    var visible = new Map();

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visible.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
      });

      var best = null;
      var bestRatio = 0;
      visible.forEach(function (ratio, section) {
        if (ratio > bestRatio) { bestRatio = ratio; best = section; }
      });

      targets.forEach(function (t) {
        if (best === t.section) {
          t.link.setAttribute("aria-current", "true");
        } else {
          t.link.removeAttribute("aria-current");
        }
      });
    }, { threshold: [0.15, 0.35, 0.6], rootMargin: "-20% 0px -40% 0px" });

    targets.forEach(function (t) { spy.observe(t.section); });
  }
})();
