
let close = document.querySelector(".close");

close.onclick = function () {
    let adv = document.querySelector(".adv-signup");
    adv.remove();
}

let nav = document.querySelector(".fa-bars");

function noscrol() {
    window.scroll(0,0);
}

nav.onclick = function () {
    window.addEventListener("scroll",noscrol);
}