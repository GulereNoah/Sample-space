// Debounce helper
function debounce(func, wait) {
    var timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Combined scroll handler - fixes header on scroll
$(window).on('scroll', debounce(function(event) {
    var scrollValue = $(window).scrollTop();
    
    // Add fixed-top class when scrolled
    if (scrollValue > 70) {
         $('.header_menu').addClass('fixed-top');
    } else {
      $('.header_menu').removeClass('fixed-top');
    }
    
    // Sticky navbar effect
    if (scrollValue > 10) {
        $('.navbar').addClass('navbar-sticky-in');
    } else {
        $('.navbar').removeClass('navbar-sticky-in');
    }
}, 50));
    
"use strict";

/*======== Consolidated Document Ready Function =========*/
jQuery(document).ready(function () {

    /* SlickNav disabled: slide-in mobile nav (mobile-nav.js + mobile-nav.css) */

    /**
     * Main Menu Slide Down Effect
     */
     
    var selected = $('#navbar li');
    // Mouse-enter dropdown - simplified for better performance
    selected.on("mouseenter", function() {
        $(this).find('ul').first().stop(true, true).slideDown(300);
    });

    // Mouse-leave dropdown
    selected.on("mouseleave", function() {
        $(this).find('ul').first().stop(true, true).slideUp(150);
    });

    /**
     *  Arrow for Menu has sub-menu (deferred to prevent layout thrashing)
     */
    if ($(window).width() > 992) {
      setTimeout(function() {
        $(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
      }, 100);
    }

    /**
     * Set Active Menu Item Based on Current Page
     */
    function setActiveMenuItemByPage() {
      // Get the current page filename
      var currentPage = window.location.pathname.split('/').pop() || 'index.html';
      
      // If the page is empty, it's the home page
      if (currentPage === '' || currentPage === '/') {
        currentPage = 'index.html';
      }

      // Remove active class from all menu items
      $('#responsive-menu li').removeClass('active');
      $('#responsive-menu li.dropdown').removeClass('active');
      $('#responsive-menu li.submenu').removeClass('active');

      // Find and highlight the appropriate menu item
      $('#responsive-menu a').each(function() {
        var href = $(this).attr('href');
        
        // Check if the href matches the current page
        if (href && (href === currentPage || href.endsWith(currentPage))) {
          // Add active class to the parent li and its parents
          $(this).closest('li').addClass('active');
          $(this).closest('li.submenu').addClass('active');
          $(this).closest('li.dropdown').addClass('active');
        }
      });

      // Special handling for pages with parameters or fragments
      if (currentPage === 'destination-detail.html' || currentPage === 'services-detail.html') {
        // Find the parent menu item for destination or services
        var destLink = $('#responsive-menu a[href="destination-detail.html"]').closest('li');
        var servLink = $('#responsive-menu a[href="services.html"]').closest('li');
        
        if (currentPage === 'destination-detail.html') {
          destLink.addClass('active');
        } else if (currentPage === 'services-detail.html') {
          servLink.addClass('active');
        }
      }
    }

    // Call the function when page loads
    setActiveMenuItemByPage();

});

// Optimized header visibility toggle on scroll (consolidated and debounced)
(function() {
    "use strict";
    
    var doc = document.documentElement;
    var w = window;
    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;
    var header = document.getElementById('header_menu');
    var toggled;
    var threshold = 200;

    function debounce(func, wait) {
        var timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(func, wait);
        };
    }

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll > prevScroll) {
            curDirection = 2;
        } else {
            curDirection = 1;
        }

        if(curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
        }
    };

    var toggleHeader = function() { 
        toggled = true;
        if(curDirection === 2 && curScroll > threshold) {
            if (header) header.classList.add('hide');
            jQuery('.sticky1').addClass('tab-sticky');
        }
        else if (curDirection === 1) {
            if (header) header.classList.remove('hide');
            jQuery('.sticky1').removeClass('tab-sticky');
        }
        else {
            toggled = false;
        }
        return toggled;
    };

    // Debounced scroll listener
    window.addEventListener('scroll', debounce(checkScroll, 50), false);

})();



