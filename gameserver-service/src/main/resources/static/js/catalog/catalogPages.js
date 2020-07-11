function catalogClearPages() {
    $('#catalogPages').empty();
}

function catalogHeaderPages() {
    $('#page_caption').html(pageCaption);
    $('#page_text1').html(pageText1);
    $("#page_headline").css("background-image", "url(./c_images/catalogue/" + pageHeadline + ".gif)");
    $("#page_icon").css("background-image", "url(./c_images/catalogue/icon_" + pageIcon + ".png)");
    $('[id="page_teaser"]').css("background-image", "url(./c_images/catalogue/" + pageTeaser + ".gif)");
}

function catalogLayoutPages() {
    if(pageLayout == "default_3x3") {
        $('#default_3x3').css("display", "block");

    } else {
        $('#default_3x3').css("display", "none");
    }
    if(pageLayout == "pets2") {
        $('#pets2').css("display", "block");
        $('#page_text2').html(pageText2);
        $('#page_text_details').html(pageTextDetails);
    } else {
        $('#pets2').css("display", "none");
    }
    if(pageLayout == "frontpage") {
        $(".front-page").css("display", "block");
        $(".default").css("display", "none");
    } else {
        $(".front-page").css("display", "none");
        $(".default").css("display", "block");
    }
}

function openCatalogPage(id) {
    console.log("catalogpage clicked" + id)
    webSocket.send("openCatalogPage;@-;" + id + "");
}