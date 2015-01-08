jQuery(document).ready(function($) {
    $(".like").click(function() {
        var likeNum = parseInt($(this).next().text());
        $(this).next().html(likeNum + 1);
    });
});
