function catalogLoadTabs() {
    $('#tab-container').append('<div onclick="openCatalogPage(' + catalogTabId + ')" class="tab tabCatalog" style=""><div class="tleft"></div><div class="tcenter">' + catalogTabCaption + '</div><div class="tright"></div><script>$(".tabCatalog").click(function() { $(".tabCatalog").removeClass("active"); $(this).addClass("active"); }); </script></div>');  

}