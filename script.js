/* TO AUTOMATICALLY SCROLL TO BOTTOM WHILE RELOADING  LIVE SERVERS, ONNLY USED WHEN DEVELOPING
 setInterval(function () {
    window.scrollTo(0, document.body.scrollHeight)
}, 500)
*/

/* NOTE: gotta use resize observer if needed for responsive*/

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByClassName("header-main")[0].style.fontSize = "20px";
    }
}