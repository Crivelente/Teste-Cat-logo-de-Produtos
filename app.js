$(document).ready(function(){
    $('.produto').first().addClass('active');
    $('.produto').hide();    
    $('.active').show();
    
        $('#botao').click(function(){
    
        $('.active').removeClass('active').addClass('oldActive');    
                       if ( $('.oldActive').is(':last-child')) {
            $('.produto').first().addClass('active');
            }
            else{
            $('.oldActive').next().addClass('active');
            }
        $('.oldActive').removeClass('oldActive');
        $('.produto').fadeOut();
        $('.active').fadeIn();
    
    
        });
    });
