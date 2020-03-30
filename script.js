/*$('#magic1').onclick(function () {
  $("[id='2']").each(function (){
     $(this).attr("id", "idNEW");
  });
});*/

$(document).ready(function(){
   $('#magic1').on('click', change);
});

$(document).ready(function(){
   $('#magic2').on('click', magic);
});

function change() {
  $("[id='id2']").each(function (){
     $(this).attr("id", "idNEW");
  });
  $('.id1').each(function () {
    $(this).css({
        'border': '2px solid #f1b2bb',
        'font-size': '+=5',
        'color' : '#f1b2bb',
        'margin' : '20px',
    });
  });
  $('p').each(function () {
    $(this).css({
      'margin-top' : '7%',
      'margin-left' : '50px',
      'margin-right' : '50px',
      'margin-bottom' : '7%',
    });
  });
  $('img').each(function () {
    $(this).css({
      'margin-top' : '3%',
      'margin-bottom' : '3%',
    });
  });
  $('.ch').each(function () {
    $(this).css({
      'box-shadow':'none'
    });
  });
  $('.par').each(function () {
    $(this).fadeOut('fast');
  });
}

function magic() {
  $('img').each(function () {
    $(this).hide('100000', 'linear');
  });
  $('#magic1').attr('disabled', true);
}
