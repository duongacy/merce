
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        (rect.top > 0 && rect.top < (window.innerHeight))
    );
}
function isOutViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top > window.innerHeight || rect.bottom < 0
    );
}
activeRevealLink();
addAnimate();

function closeAllRevealTab() {
    $$(".reveal__tab").forEach(function (item) {
        item.style.display = "none";
    })
}
window.addEventListener("scroll", function () {
    addAnimate();
})
function activeRevealLink() {
    $$(".reveal__link").forEach(function (item) {
        item.addEventListener("click", function () {
            closeAllRevealTab();
            let target = item.getAttribute("data-bs-target");
            $(target).style.display = "flex";
            addAnimate();
        })
    })
}

function addAnimate() {
    let listAnimate = $$(".show-only-screen");
    listAnimate.forEach(function (item) {
        if (isInViewport(item)) {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        } else if (isOutViewport(item)) {
            item.style.opacity = 0;
            item.style.transform = "translateY(4rem)";
        }
    })

}

$$(".button-show-more").forEach(function (btn) {
    btn.onclick = function () {
        console.log(btn.getAttribute("show"));
        let id = btn.getAttribute("show");
        $$(`#${id} .show-when-click`).forEach(function (item) {
            item.style.display = "block";
        })
        addAnimate();
        btn.style.display = "none";
    }
})