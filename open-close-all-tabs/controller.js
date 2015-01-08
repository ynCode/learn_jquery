function toggleAllTabs() {
    var allTabsText = "";
    $("#tagListUse li dl").each(function() {
        allTabsText = allTabsText + $(this).css('display');
    });

    var linkNum = $("#tagListUse li dl").length;
    var openWord = Array(linkNum + 1).join("none");
    var closeWord = Array(linkNum + 1).join("blcok");

    function closeAllTabs() {
        console.log("closeAllTabs!");
        $("#tagListUse>li>p>a").html("closed");
        $("#tagListUse>li>dl").css('display', 'none');
    }

    function openAllTabs() {
        console.log("opanAllTabs!");
        $("#tagListUse>li>p>a").html("opened");
        $("#tagListUse>li>dl").css('display', 'block');
    }

    if (allTabsText !== openWord) {
        closeAllTabs();
    } else {
        openAllTabs();
    }
}
