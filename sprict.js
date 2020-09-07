$(function () {
  $('.hamburger').click(function () {
    var $answer = $(this).find('.globalMenuSp');
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();


    } else {
      $answer.addClass('open');
      $answer.slideDown();

    }
  });
});
