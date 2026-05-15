(function ($) {
  function bannerSwitcher(direction) {
    var current = $('.sec-1-input').filter(':checked');
    var next;

    if (direction === 'prev') {
      next = current.prev('.sec-1-input');
      if (!next.length) {
        next = $('.sec-1-input').last();
      }
    } else {
      next = current.next('.sec-1-input');
      if (!next.length) {
        next = $('.sec-1-input').first();
      }
    }

    next.prop('checked', true);
  }

  var isPaused = false;

  function startTimer() {
    return setInterval(function () {
      bannerSwitcher('next');
    }, 5000);
  }

  var bannerTimer = startTimer();

  function pauseAuto() {
    if (!isPaused) {
      clearInterval(bannerTimer);
      isPaused = true;
    }
  }

  function resumeAuto() {
    if (isPaused) {
      bannerTimer = startTimer();
      isPaused = false;
    }
  }

  $(function () {
    // Pause on hover (desktop)
    $('#section-1 .slider')
      .on('mouseenter', function () {
        pauseAuto();
      })
      .on('mouseleave', function () {
        resumeAuto();
      });

    // Swipe support on touch devices
    var startX = null;
    var threshold = 40;

    $('#section-1 .slider').on('touchstart', function (e) {
      if (e.originalEvent.touches && e.originalEvent.touches.length === 1) {
        startX = e.originalEvent.touches[0].clientX;
      }
    });

    $('#section-1 .slider').on('touchend', function (e) {
      if (startX === null) return;
      var endX = e.originalEvent.changedTouches[0].clientX;
      var diffX = endX - startX;

      if (Math.abs(diffX) > threshold) {
        if (diffX < 0) {
          bannerSwitcher('next');
        } else {
          bannerSwitcher('prev');
        }

        if (!isPaused) {
          clearInterval(bannerTimer);
          bannerTimer = startTimer();
        }
      }

      startX = null;
    });
  });
})(jQuery);
