$(window).scroll(function() {
    var a = $(this).scrollTop();
    
    $(".parallax").css({
        "transform" : "translate(0%, -" + a / 3 + "%"
    });
    
    $(".parallax1").css({
        "transform" : "translate(0%, -" + a / 2 + "%"
    });
    
    $(".parallax2").css({
        "transform" : "translate(0%, -" + a / 2 + "%"
    });
    $(".parallax3").css({
        "transform" : "translate(0%, -" + a / 6 + "%"
    });
    $(".parallax5").css({
        "transform" : "translate(0%, -" + (a-500) / 11 + "%"
    });
    $(".parallax6").css({
        "transform" : "translate(0%," + (a-500) / 11 + "%"
    });
});



$("#files").click(function(){

document.getElementById("files").onchange = function () {
$("#img-name-panel").html($(this).val());
var reader = new FileReader();

reader.onload = function (e) {
// get loaded data and render thumbnail.
document.getElementById("image").src = e.target.result;
};

// read the image file as a data URL.
reader.readAsDataURL(this.files[0]);
};
});



$(document).ready(function(){
  $("#phone_form").inputmask("+7(999) 999-9999");});

  