$(document).ready(function(){

    $(".loader").fadeOut(700, function() {
        $(".content").fadeIn(500); 
        $(".loader").remove();
    });

    $(document).on('mouseenter', '#map path, #map polyline,#map circle,#map polygon', function () {
        let m = $(this);
        if (m.attr('title')) {
            $(m).tooltip('show');
        }
    });
    $.get('https://arthmelikyan.github.io/ca.min.svg', function(svg){
        $('#map .map_block').html(svg);
    }, 'text');

    $('.tt').tooltip();

    // $('#mainNav').on('show.bs.collapse', function () {
    //     if (!$("#mainNav").hasClass('navbar-shrink') && $("#mainNav").offset().top < 80) {
    //         $("#mainNav").addClass("navbar-shrink");
    //     }
    //   })
});