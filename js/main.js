
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        (rect.top > 0 && rect.top < (window.innerHeight)) && rect.bottom > 0
    );
}

let listAnimate = document.querySelectorAll(".show-only-screen");
listAnimate.forEach(function (item) {
    item.classList.add("animate__animated");
    window.addEventListener("scroll", function () {
        if (isInViewport(item)) {
            item.classList.add("animate__slideInUp");
            item.style.opacity = 1;
        } else {
            item.classList.remove("animate__slideInUp")
            item.style.opacity = 0;

        }
    })

});

