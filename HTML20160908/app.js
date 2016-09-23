/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
    "use strict";
    $("#enter-1").click(function () {
        var enterAns = $("input[name=test]").val();
        //$("#ans").text(enterAns);   測試完變註解
        if (enterAns === "5") {
            $("#ans2").text("答對了");
        } else if (enterAns > 9 || enterAns < 1) {
            $("#ans2").text("你亂答");
        } else if (isNaN(enterAns)) {
            $("#ans2").text("你亂答");
        } else if (enterAns !== 5) {
            $("#ans2").text("答錯了");
        }

    });

    $("#reset").click(function () {
        $("#ans").text("");
        $("#ans2").text("");

    });
});
