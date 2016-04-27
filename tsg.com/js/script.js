window.onload = function() {


  ///маска для инпута с номером телефона///

  $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
  $("#user_phone").mask("(999) 999-9999");
  $("#tin").mask("99-9999999");
  $("#ssn").mask("999-99-9999");

  ///маска для инпута с номером телефона END///

  $( "#main-page" ).click(function() {
    $ ("#tell-us").toggle();
  });
  $( "#close" ).click(function() {
    $ ("#tell-us").toggle();
  });



  //слайдер-карусель///

  var owl = $(".carousel");
    owl.owlCarousel({
        items: 4
    });
    owl.on("mausewheel", "owl-wrapper", function(e) {
        if(e.delaY > 0) {
            owl.trigger("owl.prev");
        } else {
            owl.trigger("owl.next");
        }
        e.preventDefault();
    });
    $(".next").click(function(){
        owl.trigger("owl.next");
    });
    $(".prev").click(function(){
        owl.trigger("owl.prev");
    });

    ///слайдер-карусель END///

}


// 3 шага///

$( "#first-step" ).click(function(e) { 
  $ (".first").hide(); 
  $ (".second").show();
  setTimeout(function() {
      $ (".second").hide();
      $ (".therd").show();
    },5000);
 
  e.preventDefault();
  e.stopPropagation();
});

