window.onload = function() {


        $( "#guaranty" ).click(function() {
              $ (".guaranties").slideToggle('slow');
        });
        $( ".hide" ).click(function() {
              $ (".guaranties").slideUp('slow');
        });

        ///аккордеон///
        $('.appeal-text').hide().prev().click(function(){
              $('.appeal-text').not(this).slideUp();
              $(this).next().not(':visible').slideDown();
        });

        $('.appeal-item p').click(function(){
            $(this).children().toggleClass('up');
            $(this).children().toggleClass('down');
            $('.appeal-item p').not(this).children().removeClass('down');
            $('.appeal-item p').not(this).children().addClass('up');
        });


      
        $('.appeal-item p').click(function() {
              $(this).css("background-image", "url(css/img/show.png)");
              $('.appeal-item p').not(this).css("background-image", "url(css/img/question.png)");
        });

///аккордеон END///
};

