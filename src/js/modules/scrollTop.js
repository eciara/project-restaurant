const scrollTop = function () {
    var buttonTop = document.getElementById("scroll-top");
    var handleScrollToTop = function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };
    var toggleButtonTop = function () {
        if (
            document.body.scrollTop > 60 ||
            document.documentElement.scrollTop > 60
        ) {
            buttonTop.style.display = "flex";
        } else {
            buttonTop.style.display = "none";
        }
    };
    window.addEventListener("scroll", toggleButtonTop);
    buttonTop.addEventListener("click", handleScrollToTop);
};

export default scrollTop;
