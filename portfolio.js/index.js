$(function() {

    $('.wrapper').css('display','none');
    $('.color-box').css('display','none');
    $('.content-items').css('display','none');
    

    $('.content-items').hover(function() {
        $(this).css('border', '10px ridge');
        $(this).css('cursor', 'pointer');
    }, function() {
        $(this).css('border', 'none');
        $(this).css('cursor', 'auto');
    }
    );


    $('.content-items').click(function() {
        let display = $(this);
        display = display.css('backgroundColor');
        $('#color-drawing').css('backgroundColor',display);
        let array = display.substr(4).slice(0, -1).split(',');
        let r = Number(array[0]).toString(16).toUpperCase();
        let g = Number(array[1]).toString(16).toUpperCase();
        let b = Number(array[2]).toString(16).toUpperCase();
        r  = ('00' + r).slice( -2 );
        g  = ('00' + g).slice( -2 );
        b  = ('00' + b).slice( -2 );
        let code = '#' + r + g + b;
        $('#display-code').text(code);
    }
    );

    
});

$(window).on('load',function(){
    
    $('.load-box').fadeOut(4000,function(){
        $('.wrapper').show("drop", {direction: "right"}, 500,function(){
            $('.first').show("fade",500);
            $('.second').delay(400).show("fade",400);
            $('.third').delay(800).show("fade",400);
            $('.fourth').delay(1200).show("fade",400);
            $('.fifth').delay(1600).show("fade",400);
            $('.sixth').delay(2000).show("fade",400);
            $('.seventh').delay(2400).show("fade",400);
            $('.eighth').delay(2800).show("fade",400);
            $('.ninth').delay(3200).show("fade",400,function(){
                $('.big').show("highlight",function(){
                    $('.color-box').show("fold");
                });
            });
        });
    });

});







