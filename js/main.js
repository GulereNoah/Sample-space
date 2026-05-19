/*------------------------------------------------------------------
* Project:        Travelin - Travel Tour Booking HTML Templates
* Author:         bizberg_themes
* URL:            https://themeforest.net/user/bizberg_themes
* Created:        06/27/2022
-------------------------------------------------------------------
*/

 (function($) {
     "use strict";


     /*======== Doucument Ready Function =========*/
    jQuery(document).ready(function () {
      $("#status").fadeOut();
      $("#preloader").delay(200).fadeOut("slow");
      $("body").delay(200).css({ "overflow": "visible" });

      var dateElement = document.getElementById("current-date");
      if (dateElement) {
        var now = new Date();
        var options = { weekday: "long", month: "short", day: "2-digit", year: "numeric" };
        dateElement.textContent = now.toLocaleDateString("en-US", options);
      }

      new WOW().init();

      // Set min date for date inputs to today
      var today = new Date().toISOString().split('T')[0];
      $('input[type="date"]').attr('min', today);

    });



    jQuery(document).ready(() => {
         jQuery('.js-video-button').modalVideo({
             channel: 'vimeo'
         });
     });

     // Range sliders activation
     $(".range-slider-ui").each(function() {
         var minRangeValue = $(this).attr('data-min');
         var maxRangeValue = $(this).attr('data-max');
         var minName = $(this).attr('data-min-name');
         var maxName = $(this).attr('data-max-name');
         var unit = $(this).attr('data-unit');
         $(this).slider({
             range: true,
             min: minRangeValue,
             max: maxRangeValue,
             values: [minRangeValue, maxRangeValue],
             slide: function(event, ui) {
                 event = event;
                 var currentMin = parseInt(ui.values[0]);
                 var currentMax = parseInt(ui.values[1]);
                 $(this).children(".min-value").text(currentMin + " " + unit);
                 $(this).children(".max-value").text(currentMax + " " + unit);
                 $(this).children(".current-min").val(currentMin);
                 $(this).children(".current-max").val(currentMax);
             }
         });
     });


     /* ------------------------------------------------------------------------ */
     /* BACK TO TOP
    /* ------------------------------------------------------------------------ */
     $(document).on('click', '#back-to-top, .back-to-top', () => {
         $('html, body').animate({
             scrollTop: 0
         }, '500');
         return false;
     });
     $(window).on('scroll', () => {
         if ($(window).scrollTop() > 500) {
             $('#back-to-top').fadeIn(200);
         } else {
             $('#back-to-top').fadeOut(200);
         }
     });

     // Slick SLider
     $('.slider-store').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         direction: 'vertical',
         arrows: false,
         dots: false,
         fade: true,
         autoplay: true,
         asNavFor: '.slider-thumbs'
     });
    

     $('.slider-thumbs').slick({
         slidesToShow: 5,
         slidesToScroll: 1,
         asNavFor: '.slider-store',
         dots: false,
         arrows: false,
         autoplay: true,
         direction: 'vertical',
         centerMode: true,
         focusOnSelect: true,
         responsive: [{
             breakpoint: 800,
             settings: {
                 arrows:false,
             }
         }]

     });


     $('.review-slider').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: true,
         dots: false,
         rows:0,
         autoplay: true,
         speed: 2000,
         loop:true,
         responsive: [{
             breakpoint: 991,
             settings: {
                 slidesToShow: 1,
                 arrows: false,
             }
         }]
     });

     $('.review-slider1').slick({
         infinite: true,
         slidesToShow: 2,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         rows:0,
         autoplay: true,
         speed: 5000,
         loop:true,
         responsive: [{
             breakpoint: 1100,
             settings: {
                 slidesToShow: 1
             }
         }]
     });

     $('.about-slider').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         autoplay: true,
         rows:0,
         speed: 4000,
         loop:true,
         responsive: [{
             breakpoint: 700,
             settings: {
                 arrows:false
             }
         }]
     });

     $('.side-slider').slick({
         infinite: true,
         slidesToShow: 6,
         slidesToScroll: 1,
         arrows: false,
         rows:0,
         dots: false,
         autoplay: true,
         speed: 4000,
         loop:true,
          responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 3
             }
         }, 
         {
             breakpoint: 811,
             settings: {
                 slidesToShow: 2
            }
         }, 
         {
             breakpoint: 500,
             settings: {
                 slidesToShow: 1
             }
         }]
     });

      $('.attract-slider').slick({
         infinite: true,
         slidesToShow: 8,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         speed: 2000,
         rows:0,
         autoplay: true,
         draggable:false,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 4
             }
         }, 
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 3
            }
         }, 
         {
             breakpoint: 500,
             settings: {
                 slidesToShow: 2
             }
         }]
     });

    
    $('.team-slider').slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: false,
         dots: true,
         autoplay: true,
         speed: 1000,
         rows:0,
         loop:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 750,
             settings: {
                 slidesToShow: 1
             }
         }]
     });

     $('.item-slider').slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: true,
         dots: false,
         autoplay: true,
         speed: 2000,
         rows:0,
         loop:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 2,
                 arrows: false,
             }
         }, {
             breakpoint: 750,
             settings: {
                 slidesToShow: 1,
                 arrows: false,
             }
         }]
     });

     $('.item-slider1').slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         autoplay: true,
         speed: 2000,
         rows:0,
         loop:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 1,
                 arrows: false,
             }
         }, {
             breakpoint: 750,
             settings: {
                 slidesToShow: 1,
                 arrows: false,
             }
         }]
     });

     $('.item-slider2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        speed: 2000,
        rows:0,
        loop:true,
        customPaging: function(slider, i) {
            return '<span class="slider-dot-number">' + (i + 1) + '</span>';
        },
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
            }
        }]
    });

    function getPackageKeyFromUrl() {
        try {
            var params = new URLSearchParams(window.location.search || '');
            var key = params.get('packageKey') || params.get('package') || params.get('pkg');
            return key ? String(key).trim() : '';
        } catch (err) {
            return '';
        }
    }

    function navigateToPackageKey(key) {
        key = (key || '').trim();
        if (!key) return false;

        var selector = '[data-package-key="' + key.replace(/"/g, '\\"') + '"]';
        var $slider = $();
        var $target = $();

        $('.item-slider2').each(function() {
            var $s = $(this);
            var $candidate = $s.find(selector);
            if (!$candidate.length) return;

            var $nonCloned = $candidate.filter(function() {
                var $slide = $(this).closest('.slick-slide');
                return !$slide.length || !$slide.hasClass('slick-cloned');
            }).first();

            $target = $nonCloned.length ? $nonCloned : $candidate.first();
            $slider = $s;
            return false;
        });

        if (!$target.length) $target = $(selector).first();
        if (!$target.length) return false;

        if ($slider.length && $slider.hasClass('slick-initialized')) {
            var $slide = $target.closest('.slick-slide');
            var slideIndex = $slide.length ? $slide.data('slick-index') : null;
            if (slideIndex !== null && slideIndex !== undefined) {
                $slider.slick('slickGoTo', slideIndex);
            }
        }

        window.setTimeout(function() {
            var el = $target.get(0);
            if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 250);

        return true;
    }

    // Tours dropdown -> drive Slick to reveal the matching package card.
    // This is independent of #ids / hashes and unaffected by Slick clones.
    $(document).on('click', 'a[data-package-key]', function(e) {
        // ignore submenu toggles if they ever get a key accidentally
        if ($(this).hasClass('dropdown-toggle')) return;

        var key = ($(this).attr('data-package-key') || '').trim();
        if (!key) return;

        e.preventDefault();

        // If we're not on index (no slider/packages), redirect to index with the key
        if (!$('.item-slider2').length) {
            window.location.href = 'index.html?packageKey=' + encodeURIComponent(key);
            return;
        }

        navigateToPackageKey(key);
    });

    // Deep-link support (works from other pages redirecting to index.html?packageKey=...)
    var initialKey = getPackageKeyFromUrl();
    if (initialKey) {
        // Let Slick finish initializing before navigating
        window.setTimeout(function() {
            navigateToPackageKey(initialKey);
        }, 50);
    }

    $('.banner-slider').slick({
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 1,
         arrows: true,
         dots: false,
         autoplay: true,
         speed: 2000,
         rows:0,
         cursor: false,
         loop:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 800,
             settings: {
                 slidesToShow: 1
             }
         }]
     });

    $('.shop-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows:0,
        cursor: false,
        loop:true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.partner-slider').slick({
         infinite: true,
         slidesToShow: 5,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         autoplay: true,
         speed: 2000,
         rows:0,
         loop:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 3
             }
         }, {
             breakpoint: 800,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 500,
             settings: {
                 slidesToShow: 1
             }
         }]
     });


     $("#contactform2").validate({      
      submitHandler: function() {
        
        $.ajax({
          url : 'mail/contact.php',
          type : 'POST',
          data : {
            fname : $('input[name="first_name"]').val(),
            lname : $('input[name="last_name"]').val(),
            email : $('input[name="email"]').val(),
            phone : $('input[name="phone"]').val(),
            comments : $('textarea[name="comments"]').val(),
          },
          success : function( result ){
            $('#contactform-error-msg').html( result );
            $("#contactform2")[0].reset();
          }     
        });

      }
    });

    $('.promo-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        speed: 2000,
        rows:0,
        loop:true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        }, {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }]
    });

    
     /*-----------------------------------------------------------------------------------*/
    /*  COUNTDOWN
    /*-----------------------------------------------------------------------------------*/

     $(document).ready(() => {
         loopcounter('coming-counter');
     });

    /*-----------------------------------------------------------------------------------*/
    /*  COUNTER UP
    /*-----------------------------------------------------------------------------------*/
    $('.value').counterUp({
        delay: 50,
        time: 1000
    });
     $('.trend-box1').masonry({
         // options
         itemSelector: '.mansonry-item1',
     });

     // Nice Select JS
     $('.niceSelect').niceSelect();

     // Function to format descriptions in Nice Select
     function formatNiceSelectDescriptions() {
         $('.nice-select .option, .nice-select .current').each(function() {
             var $this = $(this);
             var text = $this.text();
             if (text.indexOf(' – ') !== -1) {
                 var parts = text.split(' – ');
                 $this.html(parts[0] + '<span class="opt-desc">' + parts[1] + '</span>');
             }
         });
     }

     // Initial format
     formatNiceSelectDescriptions();

     // Re-format on change
     $(document).on('click', '.nice-select .option', function() {
         setTimeout(formatNiceSelectDescriptions, 10);
     });

     // Toggle Package Details functionality
     $(document).on('click', '.toggle-details-btn', function() {
         var $btn = $(this);
         var targetId = $btn.data('target');
         
         // Fix for Slick Slider clones: Find the target relative to the button
         // instead of using a global ID which might be duplicated in clones.
         var $details = $btn.closest('.trend-item').find('.package-extra-info');
         
         // Fallback to ID if not found relatively (for safety)
         if ($details.length === 0) {
            $details = $('#' + targetId);
         }
         
         // Toggle visibility
         $details.slideToggle(300, function() {
             // Refresh Slick slider to adjust height if needed
             $('.item-slider2').slick('setPosition');
         });
         
         // Toggle button active class
         $btn.toggleClass('active');
         
         // Change button text
         if ($btn.hasClass('active')) {
             $btn.html('Show Less <i class="fa fa-angle-up"></i>');
         } else {
             $btn.html('Details <i class="fa fa-angle-down"></i>');
         }
     });

     // Function to validate dates in real-time
     function validateBookingDates() {
         var startDateVal = $('input[name="travel_date_start"]').val();
         var endDateVal = $('input[name="travel_date_end"]').val();
         var today = new Date();
         today.setHours(0, 0, 0, 0);

         // Clear previous errors
         $('#start-date-error, #end-date-error').text('');
         $('input[name="travel_date_start"], input[name="travel_date_end"]').removeClass('is-invalid');

         if (!startDateVal) return true; // Don't validate empty fields yet

         var startDate = new Date(startDateVal);
         var isValid = true;

         // 1. Prevent past dates
         if (startDate < today) {
             $('#start-date-error').text("Start date cannot be in the past.");
             $('input[name="travel_date_start"]').addClass('is-invalid');
             isValid = false;
         }

         if (endDateVal) {
             var endDate = new Date(endDateVal);
             // 2. End date after start date
             if (endDate < startDate) {
                 $('#end-date-error').text("End date cannot be earlier than start date.");
                 $('input[name="travel_date_end"]').addClass('is-invalid');
                 isValid = false;
             }
         }

         return isValid;
     }

     // Inquiry Form Dynamic Logic
     $('#service-type').on('change', function() {
         var selectedValue = $(this).val();
         $('.dynamic-section').hide();
         
         if (['luxury_safari', 'gorilla_trekking', 'custom_itinerary'].includes(selectedValue)) {
             $('#section-leisure').show();
             
             // Set minimum date to today only
             var today = new Date();
             today.setHours(0, 0, 0, 0);
             var startInput = $('input[name="travel_date_start"]');
             var endInput = $('input[name="travel_date_end"]');
             
             // Always set min date to today
             startInput.attr('min', today.toISOString().split('T')[0]);
             
             // Show hints/tips without enforcing rules
             if (selectedValue === 'luxury_safari') {
                 $('#start-date-hint').text('Tip: Book at least 3 days in advance for best availability').addClass('theme');
                 $('#end-date-hint').text('');
             } else if (selectedValue === 'gorilla_trekking') {
                 $('#start-date-hint').text('Tip: Book at least 2 months in advance for permit availability').addClass('theme');
                 $('#end-date-hint').text('');
             } else {
                 $('#start-date-hint').text('');
                 $('#end-date-hint').text('');
             }
             
             // Reset end date min if start date changes
             startInput.on('change input', function() {
                 if ($(this).val()) {
                     endInput.attr('min', $(this).val());
                 }
                 validateBookingDates();
             });

             endInput.on('change input', function() {
                 validateBookingDates();
             });

         } else if (selectedValue === 'mice_corporate') {
             $('#section-mice').show();
         } else if (selectedValue === 'consultation' || selectedValue === 'executive_transport') {
             $('#section-default-consult').show();
         }
         
         // Update Sidebar Service Type
         if (selectedValue) {
             $('#sidebar-service-type').text($(this).find('option:selected').text());
             validateBookingDates();
         }
     });

     // Multi-step Navigation
     $('.next-step').on('click', function() {
         var currentStep = $(this).closest('.form-step');
         var nextStep = currentStep.next('.form-step');
         
         // Clear non-date errors (date errors are handled by validateBookingDates)
         currentStep.find('.is-invalid').not('input[type="date"]').removeClass('is-invalid');
         currentStep.find('.nice-select').removeClass('is-invalid');

         // Basic validation for required fields in current step
          var isValid = true;
          currentStep.find('input[required], select[required]').each(function() {
              var input = $(this);
              var val = input.val();
              
              if (!val) {
                  input.addClass('is-invalid');
                  if (input.hasClass('niceSelect')) {
                      input.next('.nice-select').addClass('is-invalid');
                  }
                  isValid = false;
              } else if (input.attr('name') === 'country') {
                  // Validate country against datalist
                  var options = $('#country-list option').map(function() { return $(this).val(); }).get();
                  if (!options.includes(val)) {
                      input.addClass('is-invalid');
                      isValid = false;
                  } else {
                      input.removeClass('is-invalid');
                  }
              } else {
                  input.removeClass('is-invalid');
                  if (input.hasClass('niceSelect')) {
                      input.next('.nice-select').removeClass('is-invalid');
                  }
              }
          });

         if (isValid) {
             // Specific Date Validations
             if (currentStep.attr('id') === 'step-2') {
                 if (!validateBookingDates()) return;
             }

             currentStep.fadeOut(300, function() {
                 nextStep.fadeIn(300);
                 // Scroll to top of form
                 $('html, body').animate({
                     scrollTop: $(".booking-box").offset().top - 100
                 }, 500);
             });
         }
     });

     $('.prev-step').on('click', function() {
         var currentStep = $(this).closest('.form-step');
         var prevStep = currentStep.prev('.form-step');
         
         currentStep.fadeOut(300, function() {
             prevStep.fadeIn(300);
         });
     });

     // Sidebar Dynamic Updates
     $('input[name="full_name"]').on('input', function() {
         var val = $(this).val();
         $('#sidebar-guest-name').text(val || 'Guest');
         
         // Real-time validation
         if (val.length > 0 && val.length < 3) {
             $('#full-name-error').text("Name is too short (min 3 characters).");
             $(this).addClass('is-invalid');
         } else {
             $('#full-name-error').text("");
             $(this).removeClass('is-invalid');
         }
     });

     $('input[name="email"]').on('input change', function() {
         var val = $(this).val();
         var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         
         if (val.length > 0 && !emailReg.test(val)) {
             $('#email-error').text("Please enter a valid email address.");
             $(this).addClass('is-invalid');
         } else {
             $('#email-error').text("");
             $(this).removeClass('is-invalid');
         }
     });

     $('input[name="phone"]').on('input change', function() {
         var val = $(this).val();
         // Basic international phone regex: allows +, digits, spaces, hyphens, parentheses
         var phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
         
         if (val.length > 0 && !phoneReg.test(val)) {
             $('#phone-error').text("Invalid phone format (e.g. +256...)");
             $(this).addClass('is-invalid');
         } else {
             $('#phone-error').text("");
             $(this).removeClass('is-invalid');
         }
     });

     $('input[name="country"]').on('input change', function() {
         var val = $(this).val();
         var input = $(this);
         // Check if the value exists in the datalist
         var options = $('#country-list option').map(function() { return $(this).val(); }).get();
         if (options.includes(val)) {
             $('#sidebar-guest-country').text(val);
             input.removeClass('is-invalid');
         } else {
             $('#sidebar-guest-country').text('TBD');
             if (val) input.addClass('is-invalid'); // Mark as invalid only if not empty
         }
     });

     $('input[name="travel_date_start"]').on('change', function() {
         $('#sidebar-check-in').text($(this).val());
     });

     $('input[name="travel_date_end"]').on('change', function() {
         $('#sidebar-check-out').text($(this).val());
     });

     $('input[name="travelers"]').on('input', function() {
         var val = $(this).val();
         $('#sidebar-travelers-count').text(val ? val + ' travelers' : '1 traveler');
         $('#sidebar-summary-travelers').text(val || '1');
     });

     $('select[name="accommodation"]').on('change', function() {
         $('#sidebar-room-type').text($(this).find('option:selected').text());
     });

     $('input[name="destinations"]').on('change', function() {
         var selected = [];
         $('input[name="destinations"]:checked').each(function() {
             selected.push($(this).next('label').text());
         });
         $('#sidebar-destinations').text(selected.length > 0 ? selected.join(', ') : 'None selected');
     });

     // Handle form submissions with Formspree
     $('form').submit(function(event) {
         var form = $(this);
         var formData = form.serialize();
         var submitButton = form.find('button[type="submit"], input[type="submit"]');
         var originalText = submitButton.val() || submitButton.text();
         
         event.preventDefault();
         
         // Disable submit button and show loading state
         submitButton.prop('disabled', true);
         if (submitButton.is('input')) {
             submitButton.val('Sending...');
         } else {
             submitButton.text('Sending...');
         }
         
         $.ajax({
             url: form.attr('action'),
             method: 'POST',
             data: formData,
             dataType: 'json',
             headers: {
                 'Accept': 'application/json'
             },
             success: function() {
                 // Show success message
                 alert('Thank you! Your message has been sent successfully.');
                 form[0].reset();
                 // Reset button
                 submitButton.prop('disabled', false);
                 if (submitButton.is('input')) {
                     submitButton.val(originalText);
                 } else {
                     submitButton.text(originalText);
                 }
                 // If it's the booking form, reset to step 1
                 if (form.attr('id') === 'inquiry-form') {
                     $('.form-step').hide();
                     $('#step-1').show();
                 }
             },
             error: function() {
                 alert('Oops! There was an error sending your message. Please try again.');
                 // Re-enable button
                 submitButton.prop('disabled', false);
                 if (submitButton.is('input')) {
                     submitButton.val(originalText);
                 } else {
                     submitButton.text(originalText);
                 }
             }
         });
         
         return false;
     });

 })(jQuery);


 jQuery(window).on('resize load', () => {
     resize_eb_slider();
 }).resize();
 /**
  * Resize slider
  */
 function resize_eb_slider() {
     let bodyheight = jQuery(this).height();
     if (jQuery(window).width() > 1400) {
         bodyheight *= 0.90;
         jQuery('.slider').css('height', `${bodyheight}px`);
     }
 }

