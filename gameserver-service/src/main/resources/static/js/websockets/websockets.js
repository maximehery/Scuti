let socket = new SockJS('/socket');
stompClient = Stomp.over(socket);
stompClient.connect({}, function (frame) {
    stompClient.subscribe('/socket/catalog');
    stompClient.subscribe('/socket/navigator');
}, function () {
    closeConnection();
});

function closeConnection() {
    $("#alert-frame").show();
    $("#alert").draggable(({ handle: "#alert_header", scroll: false, containment: 'window'}));
    $('.close').on("click", function () {
        $(this).parents('div').parents('div').parents('div').css("display", "none");
    });
}