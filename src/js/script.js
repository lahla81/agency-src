$(document).ready(function(){
    // تغيير خصائص navbar عند النزول مسافة أكير من 400 م
    $(window).scroll(function(){
        if($(this).scrollTop()>=400){
            $("#navBar").addClass("noTransparrent");
        }
        else{
            $("#navBar").removeClass("noTransparrent");
        }
    });
    var wow = new WOW({
        mobile:false
    });
    wow.init();

    // لإخفاء القائمة عند النقر علي أي رابط
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
      });

    //   لعمل حركة عند الإنتقال عبر الصفحة بإستخدام الروابط
    $("a.scroll").on('click', function(event){
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top},800,function(){});
    });

});


