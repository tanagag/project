// JavaScript Document
;(function($){
		  /*
		$.fn.extend({
			"nav":function(color){
				$(this).find(".nav").css({
				"list-style":"none",
				"display":"none",
				"color":color
				});		   
				$(this).find(".nav").parent().hover(function(){
					$(this).find(".nav").slideDown();						  
					},function(){
					$(this).find(".nav").stop(true,true).slideUp();	   
				});
			}
		});
		*/
		$.fn.nav=function(option){
			var defaults={
				listStyle:"none",
				color:"red"
			};			  
			var option=$.extend(defaults,option);
			$(this).find(".nav").parent().hover(function(){
					$(this).find(".nav li").css("color",option.color);			
								},function(){
					$(this).find(".nav li").css("color","");	
									
			});
		};
		
})(jQuery);