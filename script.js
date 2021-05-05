$(document).ready(function () {
    
    $("#grossir").click(function () {
        $("#square").height("+=30");
    })
    $("#cacher").click(function () {
        $("#square").hide();
    })
    $("#montrer").click(function () {
        $("#square").show();

    })
    $("#changer").click(function () {
        $("#square").css("background-color","lightblue");
    })

    $("#reset").click(function () {
        $("#square").css({"background-color": "yellow", "height": "60px"});
    })
})
