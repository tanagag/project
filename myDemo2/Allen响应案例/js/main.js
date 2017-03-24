function win_change() {
		console.log(window.orientation)
		var win_w = document.body.scrollWidth; //获取屏幕宽度
		var html = $("html");
		if(win_w < 640){
			var winw = win_w >540 ? 540 :win_w <320? 320 : win_w; ;
			var add = 0;
			add = (winw - 320)*0.0625;
			html.css('font-size', (20 + add )+ 'px');	
		}else if(win_w>641 && win_w < 1365){
			html.css('font-size', '20px');	
			}
		}
$(function(){
	win_change();
	$(window).resize(function(){
		win_change();
	})
})