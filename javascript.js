var menuListenerAttached = false;
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    if (menuListenerAttached) return;
    menuListenerAttached = true;

    tombolMenu.on("click", function () {
        menu.slideToggle(200);
    });

    menu.on("click", function () {
        menu.slideUp(200);
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }

    $(window).on("resize", function () {
        width = $(window).width();
        if (width > 989) {
            menu.css("display", "");
        } else {
            menu.css("display", "none");
            klikMenu();
        }
    });

    $(document).on("scroll", function () {
        var scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
        } else {
            $("nav").removeClass("putih");
        }
    });
});