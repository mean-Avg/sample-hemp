
var counter = 0;

$(document).ready(function() {
    $('#car-left').on('click', function(){
        counter++;
      $(".center-img").css("transform","translateX("+counter*-33.33+"%)");
      $(".left-roll").css("transform","translateX("+counter*-45+"%)");
      $(".right-roll").css("transform","translateX("+counter*45+"%)");
      $("#car-left").removeClass("selected");
      $("#car-right").removeAttr("disabled");
      if(counter==2) $("#car-left").attr("disabled", "disabled");
    });
  });

  $(document).ready(function() {
    $('#car-right').on('click', function(){
        counter--;
        $(".center-img").css("transform","translateX("+counter*-33.33+"%)");
        $(".left-roll").css("transform","translateX("+counter*-45+"%)");
        $(".right-roll").css("transform","translateX("+counter*45+"%)");
        $("#car-right").removeClass("selected");
      $("#car-left").removeAttr("disabled");
      if(counter==0) $("#car-right").attr("disabled","disabled");
    });
  });
