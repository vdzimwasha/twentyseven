    $(document).ready(function() {
        $('#intro-toggle').on('click', function(e) {
        	console.log('running out of time');
            var $toggle = $(this);
            var $menu = $(('.intro-overlay'));

            if ($menu.attr('aria-hidden') == 'true') {
                $('.nav, main, .intro-overlay').addClass('active');
                $menu.attr('aria-hidden', 'false');
                $toggle.attr('aria-expanded', 'true');
                $toggle.attr('aria-label', 'close about me section');
                $('.intro-state').text('Close About Me Section');
            } else if ($menu.attr('aria-hidden') == 'false') {
                $('.nav, main,  .intro-overlay').removeClass('active');
                $menu.attr('aria-hidden', 'true');
                $toggle.attr('aria-expanded', 'false');
                $toggle.attr('aria-label', 'open about me section');
                $('.intro-state').text('Open About Me Section');
            }
        });
    });
