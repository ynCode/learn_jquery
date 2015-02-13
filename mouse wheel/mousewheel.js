jQuery(document).ready(function($) {

    function addClassActive(thisobj) {

        $('a').removeClass('active');
        linkNum = thisobj.index();
        $('header nav').children('a').eq(linkNum).addClass('active');
        $('.nav-side').children('a').eq(linkNum).addClass('active');
        
    }


    // click a to change div
    $('a').click(function() {

        addClassActive($(this));
        var id = $(this).attr('href');
        $('.warp div').css('display', 'none').removeClass('mouse-on');
        $(id).fadeIn('slow', function() {
            $(id).addClass('mouse-on');
        });

    });


    // mouse wheel event
    $('body').mousewheel(function(event) {

        // if mouse wheel down
        if (event.deltaY == -1) {

            var end = $('.mouse-on').next().length;

            // if it is not last
            if (end == 1) {

                $('.mouse-on').hide(function() {
                    $(this).removeClass('mouse-on').next('.warp div').addClass('mouse-on').show('slow');
                    addClassActive($(this).next());
                });

            } else if (end == 0) { // if it is last

                $('.mouse-on').hide(function() {
                    $(this).removeClass('mouse-on');
                    $('.warp div:first-child').addClass('mouse-on').show('slow');
                    addClassActive($('.warp div:first-child'));
                });

            };

        } else if (event.deltaY == 1) { // if mouse wheel on

            var start = $('.mouse-on').prev().length;

            // if it is not first
            if (start == 1) {

                $('.mouse-on').hide(function() {
                    $(this).removeClass('mouse-on').prev().addClass('mouse-on').show('slow');
                    addClassActive($(this).prev());
                });
            } else if (start == 0) { // if it is first

                $('.mouse-on').hide('slow', function() {
                    $(this).removeClass('mouse-on');
                    $('.warp div:last-child').addClass('mouse-on').show('slow');
                    addClassActive($('.warp div:last-child'));
                });

            };

        };
    });
});
