$(function () {
  $(".hamburger").click(function () {
    var answer = $(".globalMenuSp");
    if (answer.hasClass("open")) {
      answer.removeClass("open");
      answer.slideUp();
    } else {
      answer.addClass("open");
      answer.slideDown();
    }
  });
});
