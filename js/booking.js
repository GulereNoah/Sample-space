$(document).ready(function() {
    // Function to get URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    const serviceType = getUrlParameter('service');
    const packageName = getUrlParameter('package');
    const destinations = getUrlParameter('destinations');
    const duration = getUrlParameter('duration');
    const price = getUrlParameter('price');

    if (serviceType) {
        // 1. Pre-select Service Type
        $('#service-type').val(serviceType).niceSelect('update');
        $('#service-type').trigger('change');

        // 2. Handle Package Details if present
        if (packageName) {
            // Show Sidebar Package Card
            $('#sidebar-package-card').show();
            $('#sidebar-package-name').text(packageName);
            
            if (duration) $('#sidebar-package-duration').text(duration + ' Days');
            if (price) $('#sidebar-package-price').text('$' + price);

            // Add to Notes as context
            const packageContext = "SELECTED PACKAGE: " + packageName + " (" + duration + " Days)\n" + 
                                 "ESTIMATED PRICE: $" + price + "\n" +
                                 "-------------------------------------------\n";
            $('textarea[name="notes"]').val(packageContext);
            
            // Optional: Make service type read-only for this specific inquiry
            // $('#service-type').attr('disabled', true).niceSelect('update');
        }

        // 3. Pre-check Destinations
        if (destinations) {
            const destList = destinations.split(',');
            destList.forEach(dest => {
                const checkbox = $(`input[name="destinations"][value="${dest}"]`);
                if (checkbox.length) {
                    checkbox.prop('checked', true);
                }
            });
        }
    }

    // Hide package card if user changes service type away from what was pre-filled
    $('#service-type').on('change', function() {
        if ($(this).val() === '') {
            $('#sidebar-package-card').fadeOut();
        }
    });
});