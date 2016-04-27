$(document).ready(function () {


      //popap new player*/
      $( "#click-it" ).click(function() {
              $ ("#new_gamer").toggle();
      });
      $( "#cencel" ).click(function() {
             $ ("#new_gamer").toggle();
      });
      $( "#okay" ).click(function() {
              $ ("#new_gamer").toggle();
      });


      //popap combination*/ 
         $( "#combination" ).click(function() {
              $ ("#modal-comb").show();
        });
        $( "#close-combination" ).click(function() {
             $ ("#modal-comb").hide();
        });
        
        $( "#combin" ).click(function() {
              $ ("#modal-comb").show();
        });
        $( "#close-combination" ).click(function() {
              $ ("#modal-comb").hide();
        });

        // tabs chat
        $( "#main" ).click(function() {
              $( "#main" ).toggleClass('active');
              $( "#privet" ).toggleClass('active');
              $ ("#tabs-4").show();
              $ ("#tabs-5").hide();
        });
        $( "#privet" ).click(function() {
              $( "#main" ).toggleClass('active');
              $( "#privet" ).toggleClass('active');
              $ ("#tabs-5").show();
              $ ("#tabs-4").hide();
        });


        // tabs main.html
        $( "#low" ).click(function() {
              $ ("#tabs-1").show();
              $ ("#tabs-2").hide();
              $ ("#tabs-3").hide();
        });
        $( "#average" ).click(function() {
             $ ("#tabs-2").show();
              $ ("#tabs-1").hide();
              $ ("#tabs-3").hide();
        });
        $( "#tall" ).click(function() {
             $ ("#tabs-3").show();
              $ ("#tabs-1").hide();
              $ ("#tabs-2").hide();
        });




        $('#scrollable_div').scrollator();



});




$( window ).load(function() {
  // renge
      var position = 30;
        $('.ui-slider-control')
        .UISlider({
                min: 1,
                max: 100,
                value: position,
                smooth: false
        })
        .on('change', function (event, value) {
              $('#value').text(value);
        });
        $('#value').text(position);
});


