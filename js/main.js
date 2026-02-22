(function () {
  var MOBILE_BREAKPOINT = 760;

  // Replace this constant with your exact address when available.
  var ADDRESS = "Tallinn, Estonia";

  function setCurrentYear() {
    var yearNodes = document.querySelectorAll("[data-current-year]");
    var currentYear = String(new Date().getFullYear());
    yearNodes.forEach(function (node) {
      node.textContent = currentYear;
    });
  }

  function closeMenu(nav, toggle) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function setupMenu() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var nav = document.querySelector("[data-site-nav]");

    if (!toggle || !nav) {
      return;
    }

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu(nav, toggle);
      });
    });

    document.addEventListener("click", function (event) {
      var clickedInside = nav.contains(event.target) || toggle.contains(event.target);
      if (!clickedInside) {
        closeMenu(nav, toggle);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu(nav, toggle);
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        closeMenu(nav, toggle);
      }
    });
  }

  function setupHeroFallback() {
    var heroImage = document.querySelector("[data-hero-image]");
    var mediaWrap = document.querySelector("[data-hero-media]");

    if (!heroImage || !mediaWrap) {
      return;
    }

    function setFallback() {
      mediaWrap.classList.add("no-image");
    }

    function removeFallback() {
      mediaWrap.classList.remove("no-image");
    }

    heroImage.addEventListener("error", setFallback);
    heroImage.addEventListener("load", function () {
      if (heroImage.naturalWidth <= 10) {
        setFallback();
        return;
      }
      removeFallback();
    });

    if (heroImage.complete && heroImage.naturalWidth <= 10) {
      setFallback();
    }
  }

  function setupContactForm() {
    var form = document.querySelector("[data-contact-form]");
    var message = document.querySelector("[data-form-message]");

    if (!form || !message) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      form.reset();
      message.hidden = false;
      message.setAttribute("role", "status");
      message.setAttribute("aria-live", "polite");
    });
  }

  function setupMap() {
    var addressNode = document.getElementById("address-text");
    var mapNode = document.getElementById("map-embed");

    if (!addressNode || !mapNode) {
      return;
    }

    addressNode.textContent = ADDRESS;
    mapNode.src = "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed";
  }

  function highlightCurrentPage() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    var navLinks = document.querySelectorAll(".site-nav a, .footer-links a");

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === path) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function init() {
    setCurrentYear();
    setupMenu();
    setupHeroFallback();
    setupContactForm();
    setupMap();
    highlightCurrentPage();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
