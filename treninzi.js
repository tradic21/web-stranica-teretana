$(document).ready(function () {
    $('a[data-toggle="tab"]').on("show.bs.tab", function (e) {
      var target = $(e.target).attr("data-target");
      $(".tab-pane").removeClass("active").removeClass("show");
      $(target).addClass("active").addClass("show");
    });
  });