/* TO AUTOMATICALLY SCROLL TO BOTTOM WHILE RELOADING  LIVE SERVERS, ONLY USED WHEN DEVELOPING
 setInterval(function () {
    window.scrollTo(0, document.body.scrollHeight)
}, 500)
*/

/* NOTE: gotta use resize observer if needed for responsive*/

window.onscroll = function () { scrollFunction() };
$(function () {
  $(document).scroll(function () {
    var $nav = $(".header-main");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});