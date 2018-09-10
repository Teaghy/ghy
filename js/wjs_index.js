$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $('.carousel').carousel({
        interval: 2000
    })
    var items=$('.carousel-inner .item');
    $(window).on('resize',function () {
        var width=$(window).width();
        //console.log(width);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if(width>768){
                var imgSrc=$(item).data('largeImg');
                $(item).html($("<a href='javascript:;' class='largeImg'></a>").css('backgroundImage',"url("+imgSrc+")"))
            }else{
                var imgSrc=$(item).data('mobImg');
                $(item).html("<a href='javascript:;' class='mobImg'><img src="+imgSrc+"></a>")
            }

        }
    }).trigger('resize');
    var startX,endX;
    $('.wjs_banner')[0].addEventListener('touchstart',function (e) {
         startX=e.targetTouches[0].clientX;
    });
    $('.wjs_banner')[0].addEventListener('touchend',function (e) {
         endX=e.changedTouches[0].clientX;
         if(endX-startX>0){
             $('.carousel').carousel('prev');
        }else if(endX-startX<0){
             $('.carousel').carousel('next');
        }
    });

});