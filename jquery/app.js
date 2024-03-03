$(function () {
    console.log("Let's get ready to party with jQuery!");

    $("article img").addClass("image-center");

    $("article p:last-child").remove();

    $("#title").css("font-size", Math.floor(Math.random() * 100);

    $("ol").append($("<li>", { text: "Hello!" }));

    $("aside").empty().append($("<p>", { text: "Sorry for the list's existence!" }));

    $(".form-control").on('keyup blur change', function () {
        let red = $(".form-control").eq(0).val();
        let green = $(".form-control").eq(1).val();
        let blue = $(".form-control").eq(2).val();
        $("body").css("background-color", "rgb(" + red + ", " + green + ", " + blue + ")");
    });

    $("img").on('click', function (e) {
        $(e.target).remove();
    });
});

$(document).ready(function () {
    $('form').submit(function(event) {
        event.preventDefault();

        const title = $('#title').val();
        const rating = $('#rating').val();

        $('#movieList').append(`<li>${title} - Rating: ${rating} <button class="remove">Remove</button></li>`);
        $('#title').val('');
        $('#rating').val('');
    });

    $('#movieList').on('click', '.remove', function() {
        $(this).parent().remove();
    });
});