$(document).ready(function(){
    validEntries = [
        'Games',
        'Game',
        'Xbox',
        'console',
        'Books'
    ];


$('.frame>.imgDiv>#myimage').hover(
    function(){
        $(this).addClass('animated bounce');
     },
     function(){
         setTimeout(function(){
            $(this).removeClass('animated bounce');
         },2000);

        });
});