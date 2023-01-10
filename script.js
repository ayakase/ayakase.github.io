/* TO AUTOMATICALLY SCROLL TO BOTTOM WHILE RELOADING  LIVE SERVERS, ONLY USED WHEN DEVELOPING
 setInterval(function () {
    window.scrollTo(0, document.body.scrollHeight)
}, 500)
*/

/* NOTE: gotta use resize observer if needed for responsive*/

let menubtn = document.getElementsByClassName("mobile-menu")[0];
console.log(menubtn);
function toggleMenu() {
    if (menubtn.style.display === "none") {
        menubtn.style.display = "flex";
    } else {
        menubtn.style.display = "none";

    }
}