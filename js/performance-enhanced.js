/**
 * Enhanced Performance Optimizations for Simbiya Safaris Website
 * Implements lazy loading, image optimization, and rendering improvements
 */

(function() {
    "use strict";

    // ============== IMAGE LAZY LOADING ==============
    function initLazyLoading() {
        // Check if browser supports Intersection Observer
        if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window) {
            // Create Intersection Observer for lazy loading images
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        
                        // Handle data-src for lazy loading
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.add('lazy-loaded');
                        }
                        
                        // Handle data-srcset for responsive images
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                        }
                        
                        // Stop observing this image
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px' // Start loading 50px before entering viewport
            });

            // Apply observer to all lazy images
            document.querySelectorAll('img[data-src], img.lazy').forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without Intersection Observer
            document.querySelectorAll('img[data-src], img.lazy').forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                }
            });
        }
    }

    // ============== RESOURCE HINTS ==============
    function addResourceHints() {
        // Prefetch important assets
        const resourcePrefetches = [
            'js/main.js',
            'css/style.css',
            'images/logo.png'
        ];

        resourcePrefetches.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = resource;
            document.head.appendChild(link);
        });
    }

    // ============== OPTIMIZE EVENT LISTENERS ==============
    function optimizeEventListeners() {
        // Check if browser supports passive event listeners
        let supportsPassive = false;
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get: function() {
                    supportsPassive = true;
                }
            });
            window.addEventListener("test", null, opts);
            window.removeEventListener("test", null, opts);
        } catch (err) {
            supportsPassive = false;
        }

        // Apply passive listeners for scroll events to improve performance
        if (supportsPassive) {
            window.addEventListener('scroll', function() {}, { passive: true });
            window.addEventListener('wheel', function() {}, { passive: true });
            window.addEventListener('touchmove', function() {}, { passive: true });
        }
    }

    // ============== DOCUMENT READY ==============
    function initializeOnReady() {
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                initLazyLoading();
                optimizeEventListeners();
            });
        } else {
            initLazyLoading();
            optimizeEventListeners();
        }
    }

    // ============== PERFORMANCE MONITORING ==============
    function monitorPerformance() {
        if (window.performance && window.performance.timing) {
            window.addEventListener('load', function() {
                setTimeout(function() {
                    const perfData = window.performance.timing;
                    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                    
                    // Log performance metrics to console (optional)
                    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                        console.log('Page Load Time:', pageLoadTime, 'ms');
                    }
                }, 0);
            });
        }
    }

    // ============== CRITICAL IMAGE OPTIMIZATION ==============
    function optimizeCriticalImages() {
        // Mark critical above-the-fold images with fetchpriority
        const heroImages = document.querySelectorAll('img.hero-image, .banner img, .trending-topic-content img:first-of-type');
        heroImages.forEach(img => {
            if (img.complete) return; // Skip if already loaded
            img.loading = 'eager';
            img.fetchPriority = 'high';
        });
    }

    // ============== INITIALIZATION ==============
    function init() {
        initializeOnReady();
        optimizeCriticalImages();
        monitorPerformance();
    }

    // Start when document is ready or immediately if already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Re-initialize on dynamic content loads
    window.addEventListener('load', function() {
        // Ensure lazy loading is applied to any dynamically loaded images
        setTimeout(initLazyLoading, 1000);
    });
})();
