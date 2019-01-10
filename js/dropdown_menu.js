$(function () {

    //global nav
    var btn = $(".exhibition-show__info-foot-menu-btn");
    var submenu = $(".exhibition-show__info-foot-menu");
    var submenulink = $(".exhibition-show__info-foot-menu li a");
    //click
    $(btn).bind("click", "focus", function (event) {
        var shownav = $(this).find(".exhibition-show__info-foot-menu");
        if ($(shownav).css("display") == "none") {
            $(shownav).slideDown("fast");
        } else {
            $(shownav).slideUp("fast");
        }
    });
    //hover
    $(btn).hover(function () {
    },
        function () {
            $(submenu).slideUp("fast");
        });
});