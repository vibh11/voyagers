$(document).ready(function() {
    var text1 = "Welcome to Voyagers Society ";
    i = 0;
    var scroll_start = 0;
    var offset = 200;
    $('html, body').animate({
         scrollTop: $("#navmain").offset().top
     }, 'slow');

    function addText(text2, i) {
        $('#text-value').text(text2.substring(0, i + 1));
    }
    $(window).scroll(function() {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset) {
            $('.arrow').css('display', 'none');
        } else {
            $('.arrow').css('display', 'block');
        }
    });
    setTimeout(function() {
        setInterval(function() {
            i++;
            if (i <= text1.length)
                addText(text1, i + 1);
            else {
                clearInterval(this);
                setTimeout(function() {
                    $("#main1").fadeOut(300, function() {
                        $('#main1').css('display', 'none');
                        $("#main2").fadeIn(300, function() {
                            $('#main2').css('display', 'block');
                        });
                    });
                    // $("#main1").animate({
                    //     display: 'none'
                    // }, 300);)
                    // $("#main2").animate({
                    //     display: 'block'
                    // }, 300);
                }, 1000);
            }
        }, 100);
    }, 1000);
    $('.page_1').click(
        function() {
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 'slow');
        });

    $('.page_2').click(
        function() {
            $('html, body').animate({
                scrollTop: $("#speakers").offset().top
            }, 'slow');
        });

    $('.page_3').click(
        function() {
            $('html, body').animate({
                scrollTop: $("#events").offset().top
            }, 'slow');
        });

    $('.page_4').click(
        function() {
            $('html, body').animate({
                scrollTop: $("#map").offset().top
            }, 'slow');
        });

    $('.page_5').click(
        function() {
            $('html, body').animate({
                scrollTop: $("#team").offset().top
            }, 'slow');
        });
     $('#arrowscroll').click(
        function() {
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 'slow');
        });
});
