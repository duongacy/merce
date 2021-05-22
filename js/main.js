
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        (rect.top > 0 && rect.top < (window.innerHeight - 100)) && rect.bottom > 0
    );
}

let listAnimate = document.querySelectorAll(".show-only-screen");
listAnimate.forEach(function (item) {
    window.addEventListener("scroll", function () {
        if (isInViewport(item)) {
            item.style.opacity = 1;

        } else {
            item.style.opacity = 0;
        }
    })

});

