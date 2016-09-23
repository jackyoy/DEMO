$(function () {
    var number = "1";

    $("#getAns").click(function () {
        if (number === "1") {
            $(".ans").fadeIn();
            number = "2";
        } else if (number === "2") {
            $(".ans").fadeOut();
            number = "1";
        }
    });

});
