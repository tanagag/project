var blz={};
(function(blz,$,document){
	'use strict';

	/*检测浏览器内核及css3动画支持*/
	blz.checkBrowerKernel=function(){
		var o=document.createElement('div');
		var a=[['','transition',''],['webkit','Transition','-'],['ms','Transition','-'],['Moz','Transition','-'],['O','Transition','-']];
		for(var i=a.length-1;i>=0;i--){
			if(a[i][0]+a[i][1] in o.style){
				return a[i][2]+a[i][0].toLowerCase()+a[i][2];
			}else if(i===0){
				return '';
			}
		}
	};
	
	/*合并对象函数*/
	blz.mergingObjects=function(o1,o2){
		var o={};
		var i,j;
		for(i in o2){
			if(o[i]===undefined){
				o[i]=o2[i];
			}
		}
		for(j in o1){
			if(o[j]===undefined){
				o[j]=o1[j];
			}
		}
		return o;
	};
})(blz,window.Zepto||window.jQuery,document);

(function($,document){	
	'use strict';
	
	/*判定手指滑动方向*/
	var data={
		  displacement:$(document).width(),
		  initialPosition:0,
		  distance:0,
		  maxDistance:0,
		  swipeRight:true,
		  swipeLeft:true,
		  swipeUp:false,
		  swipeDown:false,
		  slideX:true,
		  slideY:false,
		  touchStartCallback:null,
		  touchEndCallback:null,
		  slideSuccessCallback:null,
		  slideElement:null,
		  prevElement:null,
		  $target:null,
		  noDistance:false
	  };
	var tip={
		  X:0,
		  Y:0,
		  X1:0,
		  Y1:0,
		  dx:0,
		  dy:0,
		  time:0,
		  time2:0,
		  data:data,
		  $Dtarget:null,
		  hack:blz.checkBrowerKernel(),
		  swipeLeft:false,
		  swipeRight:false,
		  swipeUp:false,
		  swipeDown:false,
		  isSlide:false,
		  symbol:1
	  };
	  
	  //创建滑动构造函数
	  function Slide(option){
		this.data=blz.mergingObjects(data,option);
	  }
	  
	  //将blzSlide方法附加于jquery原型上
	  $.fn.blzSlide=function(option){
		return this.each(function(index,elem){
			var $elem=$(elem);
			option=option||{};
			$elem.attr('data-blz-swipe',index);
			$elem.data('blz-swipe',new Slide(option));
			tip.data=$elem.data('blz-swipe').data;
		});
	  };
	  	
	  /*绑定touchmove事件*/
	  function touchStart(e){
		  tip.time=tip.time2=+new Date()+30;
		  var event=e.touches[0];
		  var $target=$(event.target);
		  var target=$target.closest(tip.data.slideElement||'[data-blz-swipe]');
		  var dataTarget=$target.closest('[data-blz-swipe]');
		  tip.X=tip.X1=event.pageX;
		  tip.Y=tip.Y1=event.pageY;
		  if(tip.data.touchStartCallback!==null){
			  tip.data.touchStartCallback(event);
		  }
		  if(target.length>0){
			  if(!dataTarget.data('blz-swipe')){
			  	dataTarget.blzSlide({});
			  }
			  tip.data=dataTarget.data('blz-swipe').data;
			  tip.data.prevElement=tip.data.$target=target;
			  $(document).on('touchmove.blz.swipeMove',touchMove);
		  }			
	  }
	  
	  /*滑动函数*/
	  function slide(e,event,XY){
		  var d,d1;
		  e.preventDefault();
		  tip.time=+new Date()+100;
		  tip[XY+1]=event['page'+XY];
		  d1=tip[XY+1]-tip[XY];
		  tip.symbol=d>=0?1:-1;
		  d=d1+tip.data.distance;
		  if(d1<-tip.data.maxDistance){//如果单次滑动超过位移大小
			  d=(d1+tip.data.maxDistance)/3-tip.data.maxDistance;
		  }else if(d>0||d<-tip.data.maxDistance){
			  d=d1/3+tip.data.distance;
		  }
		  tip.data.$target.css(tip.hack+'transform','translate'+XY+'('+d+'px)');	
	  } 
	  
	  //依据元素是否符合换页条件进行换页
	  function slideTo(XY,tips,tips2){
		  var $target=tip.data.$target;
		  var d=tip[XY+1]-tip[XY];
		  if($target.is('blz-sliding')){return false;}
		  tip.symbol=d>=0?1:-1;
		  if((Math.abs(d)>=(tip.data.displacement/3)&&tips)||(tips2&&tips)){
			  d=tip.symbol*tip.data.displacement;
			  tip.isSlide=true;
		  }else{
			  d=tip.data.initialPosition;
		  }
		  d+=tip.data.distance;
		  if(d<-tip.data.maxDistance){
			  d=-tip.data.maxDistance;
		  }else if(d>0){
		  	  d=0;
		  }
		  if(!tip.data.noDistance){tip.data.distance=d;}
		  $target.css(tip.hack+'transform','translate'+XY+'('+d+'px)').addClass('blz-sliding');
		  setTimeout(function(){$target.removeClass('blz-sliding');},300);	
	  }
	  
	  //判定移动方向执行目标移动函数否则取消touchmove函数
	  function touchMove(e){
		  var dx,dy;
		  var event=e.touches[0];
		  tip.X1=event.pageX;
		  tip.Y1=event.pageY;
		  if(tip.swipeLeft&&tip.data.slideX){
			  if(+new Date()<=tip.time){ return false;}/*事件节流函数防止函数被touchmove频繁调用*/
			  slide(e,event,'X');
			  return false;	
		  }else if(tip.swipeRight&&tip.data.slideX){
			  if(+new Date()<=tip.time){ return false;}/*事件节流函数防止函数被touchmove频繁调用*/
			  slide(e,event,'X');
			  return false;
		  }else if(tip.swipeUp&&tip.data.slideY){
			  if(+new Date()<=tip.time){ return false;}/*事件节流函数防止函数被touchmove频繁调用*/
			  slide(e,event,'Y');
			  return false;
		  }else if(tip.swipeDown&&tip.data.slideY){
			  if(+new Date()<=tip.time){ return false;}/*事件节流函数防止函数被touchmove频繁调用*/
			  slide(e,event,'Y');
			  return false;
		  }
		  //判断单手指移动方向
		  tip.dx=dx=Math.abs(tip.X1-tip.X);
		  tip.dy=dy=Math.abs(tip.Y1-tip.Y);
		  if(dy<2*dx){
			  if(tip.X1-tip.X<0){tip.swipeLeft=true;}else{tip.swipeRight=true;}
		  }else if(dx/2<=dy){
			  if(tip.Y1-tip.Y<0){tip.swipeUp=true;}else{tip.swipeDown=true;}
		  }else {
			  $(document).off('touchmove.blz.swipeMove');
		  }
		  
	  }
	  /*取消touchmove事件*/
	  function touchEnd(event){
		  var now=+new Date();
		  var dx=tip.dx=Math.abs(tip.X1-tip.X);
		  var dy=tip.dy=Math.abs(tip.Y1-tip.Y);
		  var $target=$(event.target);
		  if(tip.swipeLeft&&tip.data.slideX){
			  slideTo('X',tip.data.swipeLeft);
		  }else if(tip.swipeRight&&tip.data.slideX){
			  slideTo('X',tip.data.swipeRight);
		  }else if(tip.swipeDown&&tip.data.slideY){
			  slideTo('Y',tip.data.swipeDown);
		  }else if(tip.swipeUp&&tip.data.slideY){
			  slideTo('Y',tip.data.swipeUp);
		  }
		  if(now<tip.time2+100&&(dx!==0||dy!==0)){//在130毫秒后判断手指一动方向并触发相应事件；
			  if(dy<dx){
				  if(tip.X1-tip.X<0){
					  tip.symbol=-1;
					  setTimeout(function(){$target.trigger('swipeLeft');},0);
				  }else{
					  tip.symbol=1;
					  setTimeout(function(){$target.trigger('swipeRigt');},0);
				  }
			  }else if(dx<=dy){
				  if(tip.Y1-tip.Y<0){
					  tip.symbol=-1;
					  setTimeout(function(){$target.trigger('swipeUp');},0);
				  }else{
					  tip.symbol=1;
					  setTimeout(function(){$target.trigger('swipeDown');},0);
				  }
			  }
		  }
		  if(now<=(tip.time+600)&&dx===0&&dy===0){
		  	  setTimeout(function(){$target.trigger('tap').trigger('click');},0);
		  }else if(now>(tip.time+600)&&dx===0&&dy===0){
		  	  setTimeout(function(){$target.trigger('longtap');},0);
		  }
		  if(tip.isSlide&&tip.data.slideSuccessCallback){tip.data.slideSuccessCallback(tip.data);}
		  if(tip.data.touchEndCallback!==null){tip.data.touchEndCallback(event);}
		  $(document).off('touchmove.blz.swipeMove',touchMove);
		  tip.isSlide=tip.swipeLeft=tip.swipeRight=tip.swipeTop=tip.swipeDown=tip.tap=false;
		  tip.X=tip.Y=tip.X1=tip.Y1=tip.dy=tip.dx=0;
		  event.stopPropagation();
		  event.preventDefault();
	  }
	  $(document).on('touchstart.blz.swipeStart',touchStart);
	  $(document).on('touchend.blz.swipeEnd',touchEnd);
	  $(document).on('swipeLeft.blz.left swipeRight.blz.right swipeUp.blz.up swipeDown.blz.down','[data-blz-swipe]',function(event){
		  var direction=(event.type==='swipeLeft'||event.type==='swipeRight')?'X':'Y';
	  	  slideTo(direction,$(this).data('blz-swipe').data['slide'+direction],true);
	  });
	  ['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown','tap','longtap'].forEach(function(eventName){
    	$.fn[eventName] = function(callback){ 
			return this.on(eventName, callback);
		};
	  });
})(window.Zepto,document);



















