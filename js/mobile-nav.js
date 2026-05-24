/**
 * Mobile slide-in navigation with glass-morphism design
 * Clones #responsive-menu into the drawer after DOM + header scripts are ready.
 */
(function () {
  "use strict";

  var DRAWER_ID = "mobile-drawer";
  var OVERLAY_ID = "drawer-overlay";
  var TRIGGER_ID = "mobile-hamburger";
  var CLOSE_ID = "drawer-close";
  var LIST_ID = "drawer-menu";
  var SOURCE_MENU_ID = "responsive-menu";
  var BODY_OPEN_CLASS = "mobile-nav-open";
  var initialized = false;

  function byId(id) {
    return document.getElementById(id);
  }

  function openMenu() {
    document.body.classList.add(BODY_OPEN_CLASS);
    var overlay = byId(OVERLAY_ID);
    var drawer = byId(DRAWER_ID);
    var trigger = byId(TRIGGER_ID);
    
    // Close all open submenus first
    var openMenus = drawer ? drawer.querySelectorAll("li.open") : [];
    openMenus.forEach(function (li) {
      li.classList.remove("open");
      var menu = li.querySelector("ul");
      if (menu) menu.style.display = "none";
    });
    
    if (overlay) {
      overlay.classList.add("active");
      overlay.setAttribute("aria-hidden", "false");
    }
    if (drawer) {
      drawer.classList.add("active");
      drawer.setAttribute("aria-hidden", "false");
    }
    if (trigger) {
      trigger.classList.add("active");
      trigger.setAttribute("aria-expanded", "true");
    }
  }

  function closeMenu() {
    document.body.classList.remove(BODY_OPEN_CLASS);
    var overlay = byId(OVERLAY_ID);
    var drawer = byId(DRAWER_ID);
    var trigger = byId(TRIGGER_ID);
    if (overlay) {
      overlay.classList.remove("active");
      overlay.setAttribute("aria-hidden", "true");
    }
    if (drawer) {
      drawer.classList.remove("active");
      drawer.setAttribute("aria-hidden", "true");
    }
    if (trigger) {
      trigger.classList.remove("active");
      trigger.setAttribute("aria-expanded", "false");
    }
  }

  function isOpen() {
    var drawer = byId(DRAWER_ID);
    return drawer ? drawer.classList.contains("active") : false;
  }

  function hasOpenSubmenus() {
    return document.querySelectorAll("#mobile-drawer li.open").length > 0;
  }

  function cloneMenuIntoDrawer() {
    var source = byId(SOURCE_MENU_ID);
    var target = byId(LIST_ID);
    if (!source || !target) return;
    target.innerHTML = source.innerHTML;

    var drawer = byId(DRAWER_ID);
    if (!drawer) return;

    drawer.querySelectorAll("li.dropdown").forEach(function (li) {
      li.classList.remove("dropdown");
      li.classList.add("submenu");
    });

    drawer.querySelectorAll(".dropdown-menu").forEach(function (menu) {
      menu.classList.remove("show");
      menu.removeAttribute("style");
    });
  }

  function setupDrawerSubmenus() {
    var drawer = byId(DRAWER_ID);
    if (!drawer) return;

    drawer.querySelectorAll("li.submenu").forEach(function (li) {
      var toggle = li.querySelector(":scope > .dropdown-toggle");
      if (!toggle) return;

      toggle.addEventListener("click", function (e) {
        if (window.innerWidth > 1099) return;
        e.preventDefault();
        e.stopPropagation();
        li.classList.toggle("open");

        if (li.classList.contains("open")) {
          setTimeout(function () {
            li.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "nearest"
            });
          }, 100);
        }
      });
    });
  }

  function bindDrawerEvents() {
    var trigger = byId(TRIGGER_ID);
    var closeBtn = byId(CLOSE_ID);
    var overlay = byId(OVERLAY_ID);
    var drawer = byId(DRAWER_ID);
    var navContent = drawer ? drawer.querySelector(".drawer-nav-content") : null;

    if (trigger && !trigger.dataset.mobileNavBound) {
      trigger.dataset.mobileNavBound = "1";
      trigger.addEventListener("click", function () {
        if (isOpen()) closeMenu();
        else openMenu();
      });
    }

    if (closeBtn && !closeBtn.dataset.mobileNavBound) {
      closeBtn.dataset.mobileNavBound = "1";
      closeBtn.addEventListener("click", closeMenu);
    }

    if (overlay && !overlay.dataset.mobileNavBound) {
      overlay.dataset.mobileNavBound = "1";
      overlay.addEventListener("click", closeMenu);
    }

    if (drawer && !drawer.dataset.mobileNavBound) {
      drawer.dataset.mobileNavBound = "1";
      drawer.addEventListener("click", function (e) {
        var link = e.target.closest("a");
        if (link && !link.classList.contains("dropdown-toggle")) closeMenu();
      });
    }

    if (!document.documentElement.dataset.mobileNavEscapeBound) {
      document.documentElement.dataset.mobileNavEscapeBound = "1";
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && isOpen()) closeMenu();
      });
    }

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1099) closeMenu();
    });
  }

  function init() {
    if (initialized) return;
    initialized = true;

    cloneMenuIntoDrawer();
    setupDrawerSubmenus();
    bindDrawerEvents();
  }

  function scheduleInit() {
    if (window.jQuery) {
      window.jQuery(init);
    } else if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }

  scheduleInit();
})();
