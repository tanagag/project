// JavaScript Document
//$("dl").hov({color:"green",fontSize:"24px"});
;(function($){
	//对象级别的插件开发
	$.fn.extend({//相当于jquery.prototype.hov,这是原型继承，如Array.prototype.min=function(){ return ...};声明多个方法就用这个
		"hov":function(option){
			var defaults={
				color:"red",
				fontSize:"20px"
			};
			var option=$.extend(defaults,option);
			this.find("dt").hover(function(){//this不用加$()，它代表的是$("dl")
				$(this).parent().find("dd").css({
					"fontSize":option.fontSize,
					"color":option.color							
				});				  
			},function(){
				$(this).parent().find("dd").css({
					"fontSize":"",
					"color":""							
				});
			});
		}			
	});	
	/*author:tanzheng 方法二，
	$.extend($.fn,{
		"hov":function(option){
			var defaults={
				color:"red",
				fontSize:"20px"
			};
			var option=$.extend(defaults,option);
			this.find("dt").hover(function(){//this不用加$()，它代表的是$("dl")
				$(this).parent().find("dd").css({
					"fontSize":option.fontSize,
					"color":option.color							
				});				  
			},function(){
				$(this).parent().find("dd").css({
					"fontSize":"",
					"color":""							
				});
			});
		}		
	});
	*/
	/*
	// author:tanzheng 
	$.fn.hov=function(option){//相当于jquery.prototype.hov，就是添加一个全局方法（声明一个方法）
		var defaults={
			color:"red",
			fontSize:"12px"
		};
		var opt=$.extend(defaults,option);
		this.find("dt").hover(function(){
				$(this).parent().find("dd").css({
					"fontSize":opt.fontSize,
					"color":opt.color
				});				  
		},function(){
				$(this).parent().find("dd").css({
					"fontSize":"",
					"color":""
				});	
		});
		
	}
	*/
})(jQuery);