/**
 * Performance Optimizations for Simbiya Safaris Website
 * This file contains additional performance enhancements
 */

(function($) {
    "use strict";

    /**
     * Lazy Load Images
     * Uses native lazy loading for better performance
     */
    function initLazyLoading() {
        var images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            var imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var img = entry.target;
                        img.src = img.dataset.src;
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                        }
                        img.classList.add('lazy-loaded');
                        observer.unobserve(img);
                    }
                });
            });
            
            images.forEach(function(img) {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            images.forEach(function(img) {
                img.src = img.dataset.src;
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                }
            });
        }
    }

    /**
     * Defer non-critical JavaScript execution
     */
    function deferNonCriticalScripts() {
        // Defer initialization of heavy plugins if not visible
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initLazyLoading);
        } else {
            initLazyLoading();
        }
    }

    /**
     * Optimize event listeners with passive mode for better scroll performance
     */
    function optimizeEventListeners() {
        // Try to use passive listeners for scroll/touch events
        var supportsPassive = false;
        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function() {
                    supportsPassive = true;
                }
            });
            window.addEventListener("test", null, opts);
            window.removeEventListener("test", null, opts);
        } catch (err) {
            supportsPassive = false;
        }

        // Apply passive listeners to scroll events
        if (supportsPassive) {
            window.addEventListener('scroll', function() {}, { passive: true });
            window.addEventListener('wheel', function() {}, { passive: true });
            window.addEventListener('touchmove', function() {}, { passive: true });
        }
    }

    /**
     * Cache DOM queries
     */
    var domCache = {};

    function getCached(selector) {
        if (!domCache[selector]) {
            domCache[selector] = $(selector);
        }
        return domCache[selector];
    }

    /**
     * Request animation frame for smoother animations
     */
    function smoothScroll(target, duration) {
        var startPosition = window.pageYOffset;
        var distance = target - startPosition;
        var startTime = null;

        var ease = function(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        var animation = function(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    }

    /**
     * Reduce repaints - batch DOM updates
     */
    function batchDOMUpdates(updates) {
        // Hide element before making changes
        var target = updates.element;
        target.style.display = 'none';
        
        // Apply all updates
        updates.changes.forEach(function(change) {
            change();
        });
        
        // Show element after updates
        target.style.display = '';
    }

    // Initialize on document ready
    $(document).ready(function() {
        deferNonCriticalScripts();
        optimizeEventListeners();
    });

    // Expose utilities globally for use in other scripts
    window.PerfUtils = {
        getCached: getCached,
        smoothScroll: smoothScroll,
        batchDOMUpdates: batchDOMUpdates,
        initLazyLoading: initLazyLoading
    };

})(jQuery);
