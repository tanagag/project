!function($){
    $.fn.vcSwipe=function(id){
        var $this = $(this),
            $img = $this.find("img"),
            imgHtml = page = html = "",
            index = 0,
            $top = 0;
        $img.on("click",function(){
            index = $img.index($(this));
            $img = $(this).parent().children("img");
            var len = $img.length;
            $img.each(function(i){
                var self = $(this),
                    src = self.attr("data-url") || self.attr("src");
                imgHtml += '<li><img src="'+src+'"></li>';
                if(i == index){
                    page +='<a href="javascript:;" class="active"></a>'
                }else{
                    page +='<a href="javascript:;"></a>'
                }
            });
            html ='<div class="mod-swipe"><div class="mod-slider" id="'+id+'"><ul class="slider-list" >'+imgHtml+'</ul><div class="slider-text slider-center"><div id="pagenavi" class="slider-page">'+page+'</div></div></div></div>';
            $top = $("body").scrollTop();
            $(".html").css({"height":"100%","overflow":"hidden"}).scrollTop($top);
            $("body").append($(html).fadeIn());
            new Swipe(document.getElementById(id), {
                startSlide:index,
                speed:500,
                auto:3000,
                callback: function(){
                    var lis = $(this.element).next("div").find("#pagenavi").children();
                    lis.removeClass("active").eq(this.index).addClass("active");
                }
            });
        });
        $("body").on("click","#"+id+" img",function(){
            $(this).parents(".mod-swipe").fadeOut(function(){
                $(this).remove();
            });
            $(".html").removeAttr("style");
            $("body").scrollTop($top);
            imgHtml = page = html = "";
            $top = 0;
        });
    }
}(jQuery);