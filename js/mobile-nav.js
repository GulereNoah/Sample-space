/**
 * Mobile slide-in navigation
 * Opens from left; overlay and close button close the menu. Locks body scroll when open.
 */
(function () {
  "use strict";

  var DRAWER_ID = "mobile-nav-drawer";
  var OVERLAY_ID = "mobile-nav-overlay";
  var TRIGGER_ID = "mobile-nav-trigger";
  var CLOSE_ID = "mobile-nav-close";
  var LIST_ID = "mobile-nav-list";
  var SOURCE_MENU_ID = "responsive-menu";
  var BODY_OPEN_CLASS = "mobile-nav-open";

  function byId(id) {
    return document.getElementById(id);
  }

  function openMenu() {
    document.body.classList.add(BODY_OPEN_CLASS);
    var overlay = byId(OVERLAY_ID);
    var drawer = byId(DRAWER_ID);
    var trigger = byId(TRIGGER_ID);
    if (overlay) overlay.setAttribute("aria-hidden", "false");
    if (drawer) drawer.setAttribute("aria-hidden", "false");
    if (trigger) trigger.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    document.body.classList.remove(BODY_OPEN_CLASS);
    var overlay = byId(OVERLAY_ID);
    var drawer = byId(DRAWER_ID);
    var trigger = byId(TRIGGER_ID);
    if (overlay) overlay.setAttribute("aria-hidden", "true");
    if (drawer) drawer.setAttribute("aria-hidden", "true");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
  }

  function isOpen() {
    return document.body.classList.contains(BODY_OPEN_CLASS);
  }

  function cloneMenuIntoDrawer() {
    var source = byId(SOURCE_MENU_ID);
    var target = byId(LIST_ID);
    if (!source || !target) return;
    target.innerHTML = source.innerHTML;
  }

  function setupDrawerSubmenus() {
    var drawer = byId(DRAWER_ID);
    if (!drawer) return;
    drawer.querySelectorAll("li.submenu").forEach(function (li) {
      var toggle = li.querySelector(".dropdown-toggle");
      if (!toggle) return;
      toggle.addEventListener("click", function (e) {
        if (window.innerWidth > 991) return;
        e.preventDefault();
        li.classList.toggle("open");
      });
    });
  }

  function init() {
    cloneMenuIntoDrawer();
    setupDrawerSubmenus();

    var trigger = byId(TRIGGER_ID);
    var closeBtn = byId(CLOSE_ID);
    var overlay = byId(OVERLAY_ID);

    if (trigger) {
      trigger.addEventListener("click", function () {
        if (isOpen()) closeMenu();
        else openMenu();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", closeMenu);
    }

    if (overlay) {
      overlay.addEventListener("click", closeMenu);
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) closeMenu();
    });

    var drawer = byId(DRAWER_ID);
    if (drawer) {
      drawer.addEventListener("click", function (e) {
        var link = e.target.closest("a");
        if (link && !link.classList.contains("dropdown-toggle")) closeMenu();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
