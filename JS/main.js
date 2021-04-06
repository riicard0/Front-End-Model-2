//SCROLL TOP & SCROLL DOWN

const scrollTop = document.querySelector("#scrollTop");
const scrollDown = document.querySelector(".scrollDown");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if(window.pageYOffset > 300) {   //Show scrollTop
        if(!scrollTop.classList.contains("sessao-scrollTopONN")) {
            scrollTop.classList.remove("sessao-scrollTopOFF");
            scrollTop.classList.add("sessao-scrollTopONN");

            scrollTop.style.display = "block";
            scrollDown.style.display = "none";
        }
    } else {                         //Hide scrollTop
        if(scrollTop.classList.contains("sessao-scrollTopONN")) {
            scrollTop.classList.remove("sessao-scrollTopONN");
            scrollTop.classList.add("sessao-scrollTopOFF");
            setTimeout(function() {
                scrollTop.style.display = "none";
                scrollDown.style.display = "block";
            }, 500)
        }
    }
}

scrollTop.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}

