(function() {
  var tabList = document.querySelector('#tourTab');
  if (!tabList) return;
  
  tabList.addEventListener('shown.bs.tab', function(e) {
    var targetId = e.target.getAttribute('data-bs-target');
    if (targetId) {
      var pane = document.querySelector(targetId);
      if (pane) pane.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  function activateTabById(targetId) {
    var tabTrigger = document.querySelector('[data-bs-target="#' + targetId + '"]');
    if (tabTrigger) {
      var tab = new bootstrap.Tab(tabTrigger);
      tab.show();
      setTimeout(function() {
        var pane = document.getElementById(targetId);
        if (pane) pane.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }

  var hash = window.location.hash.slice(1);
  if (hash) {
    if (document.getElementById(hash)) {
      setTimeout(function() {
        activateTabById(hash);
      }, 300);
    }
  }
})();
