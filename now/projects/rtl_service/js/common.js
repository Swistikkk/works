new WOW().init();

$(window).scroll(function() {
    var a = $(this).scrollTop();
    
    $(".left-parallax-1").css({
        "transform" : "translate(0%, " + a / 8 + "%"
    });
    
    $(".left-parallax-2").css({
        "transform" : "translate(0%, " + a / 6 + "%"
    });
    
    $(".right-parallax-1").css({
        "transform" : "translate(0%, -" + a / 8 + "%"
    });
    $(".right-parallax-2").css({
        "transform" : "translate(0%, -" + a / 6 + "%"
    });

    $('.main-navigation').addClass('position');
    var y = window.scrollY;
    if(y == '0') {
        $('.main-navigation').removeClass('position');
    }
});

$('input').focus(function() {
    var text = this.value;
    if(this.value == text) {
        this.value = '';
    }
    $(this).focusout(function(){
        if(this.value.length == 0) {
            this.value = text;
        }
    });
});

$('textarea').focus(function() {
    var text = this.value;
    if(this.value == text) {
        this.value = '';
    }
    $(this).focusout(function(){
        if(this.value.length == 0) {
            this.value = text;
        }
    });
});


$(document).ready(function(){
  $('.my_slider').slick({
    autoplay: true,
    arrows: false,
    draggable: false,
    pauseOnHover: false
  });
});

$(document).ready(function(){
    $(".good_menu").on("click","a", function (event) {
         //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: (top - 50)}, 1500);
    });
});
