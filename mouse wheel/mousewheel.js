jQuery(document).ready(function($) {
    $('a').click(function() {
        var id = $(this).attr('href');
        $('.warp div').css('display', 'none').removeClass('mouse-on');
        $(id).fadeIn('slow', function() {
            $(id).addClass('mouse-on');
        });
    });
    $('body').mousewheel(function(event) {
        if (event.deltaY == -1) {
            var end = $('.mouse-on').next().length;
            console.log(end);
            if (end == 1) {
                $('.mouse-on').hide(function() {
                    $(this).removeClass('mouse-on');
                    $(this).next('.warp div').addClass('mouse-on').show('slow');
                });
            } else if (end == 0) {
                $('.mouse-on').hide(function() {
                    $(this).removeClass('mouse-on');
                    $('.warp div:first-child').addClass('mouse-on').show('slow');
                });
            };

        } else if (event.deltaY == 1) {
            var start = $('.mouse-on').prev().length;
            if (start == 1) {
                $('.mouse-on').hide(function() {
                    $(this).removeClass('mouse-on');
                    $(this).prev().addClass('mouse-on').show('slow');
                });
            } else if (start == 0) {
                $('.mouse-on').hide('slow', function() {
                    $(this).removeClass('mouse-on');
                    $('.warp div:last-child').addClass('mouse-on').show('slow');
                });

            };

        };
    });
});
