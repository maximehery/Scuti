$(function() {
    $("#catalog").draggable(({ handle: "#catalog_header", scroll: false, containment: 'window'}));
});
$(function() {
    $("#navigator").draggable(({ handle: "#navigator_header", scroll: false, containment: 'window'}));
});

function openCatalog() {
    stompClient.send("/app/openCatalog");
}

function openNavigator() {
    stompClient.send("/app/openNavigator");
}

