window.onload = function() {


  ///маска для инпута с номером телефона///

  $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
  $("#user_phone").mask("(999) 999-9999");
  $("#tin").mask("99-9999999");
  $("#ssn").mask("999-99-9999");


}

///tabs-ui///

$(function () {
  $( "#tabs" ).tabs();
});

///tabs-ui END///

///аккордеон///

$('.appeal-text').hide().prev().click(function(){
    $('.appeal-text').not(this).slideUp();
    $(this).next().not(':visible').slideDown();
});

$('.appeal-item p').click(function(){
    console.log('test');
    $(this).children().toggleClass('up');
    $(this).children().toggleClass('down');
    $('.appeal-item p').not(this).children().removeClass('down');
    $('.appeal-item p').not(this).children().addClass('up');
});

$('.appeal-item p').click(function() {
   $(this).css("background", "url(img/show.png)");
});

///аккордеон END///



///  попапы ///
$(document).on('click','#check-in', function(){
  console.log('test');
  $ ("#modal-check-in").show();
});
$(document).on('click','.check-in .c-ccont span', function(){
  $ ("#modal-check-in").hide();
});

$(document).on('click','#enter', function(){
  $ ("#modal-enter-item").show();
});
$(document).on('click','.enter-item .c-ccont span', function(){
  $ ("#modal-enter-item").hide();
});



