$(document).ready(function () {
    $(".search_btn").click(function () {
        $(".search_box").toggleClass("move");
        $(".search_text").toggleClass("text_animation");
        $(".search_btn").toggleClass("color");
        $(".image").toggleClass("opacity");
        $(".image").toggleClass("img_move");
        $(".text").toggleClass("text_move");
    });
});