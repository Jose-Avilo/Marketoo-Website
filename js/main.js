$(document).ready(function () {
    var $scrollButton = $('#btn-descargar');

    $(window).scroll(function () {
        if ($(this).scrollTop() + $(this).height() >= 0.85 * $(document).height()) {
            $scrollButton.fadeOut();
        } else {
            $scrollButton.fadeIn();
        }
    });
});