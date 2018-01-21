$(window).load(function() {
    "use strict";
    setTimeout(function() {
        $("#loading").addClass("loaded");
    }, 1000);

    setTimeout(function() {
        $("#loading").remove();
    }, 2210);
});

function selectedfield() {
    var a = document.getElementById("reason");
    "placeholder" !== a.options[a.selectedIndex].value && $("#reason").removeClass("no-selection");
}

$(".form-control").on("focusin focusout", function() {
    $(this).siblings(".icon-fields").toggleClass("active");
});

$(document).ready(function() {
    "use strict";


    $("#fullpage").fullpage({
        anchors: "1234".split(""),
        navigationTooltips: "Home What About Contact".split(" "),
        showActiveTooltip: !1,
        menu: "#menu",
        css3: !0,
        scrollingSpeed: 800,
        responsiveWidth: 992
    });



});
