/**
 * Created with JetBrains WebStorm.
 * User: Neter
 * Date: 13-12-11
 * Time: 下午6:22
 * Update:14-03-27
 * 基于Jquery的JS弹出窗插件
 * 打开弹出窗：$.JSLayer.Show(_title,_width,_height,_node,_isclose,_closeEvent);
 *                              _title:窗口标题
 *                              _width:窗口宽度
 *                              _height:窗口高度
 *                              _node:插入的子元素类ID
								_isclose:是否有关闭按钮
								_closeEvent:点击关闭按钮触发的事件

 * 关闭弹出窗：$.JSLayer.Close();
 * 使用方法：
 *  $.JSLayer.Show('提示窗口', 500,400,
                'popwindow',
                function(){
                 alert('你点击的关闭窗口');
				 }
	);
 *
 */
jQuery.JSLayer = {
	/*显示引入层的弹出框*/
    Show:function(_title,_width,_height,_node,_isclose,_closeEvent){
        var width = document.documentElement.scrollWidth;
        var height = document.documentElement.scrollHeight;
        //var width=$(window).width();
        //var height=$(window).height();
        var html='<div id="displaypopwindow">' +
            '<div id="displaybackground" style="background: #f1f2f3;position:absolute;left: 0;top:0;bottom: 0;-moz-opacity:0.8;opacity: 0.8;filter:Alpha(opacity=80);z-index: 999;width:'+width+'px;height:'+height+'px"></div>' +
            '<div id="displaylayer" style="background: #fff;border:5px solid #F07741;padding:5px;width:'+_width+'px;height:'+_height+'px;">' +
            '<div id="displayheader" style="height:20px;line-height: 20px; width:100%;MARGIN-BOTTOM:10px;">' +
            '<div id="displaytitle"  style="float: left;color:#888;font-size:14px;">'+_title+'</div>' +
            '</div>' +
            '</div>' +
			'<style>' +
			'#displaylayer{background-color: #ff6;' +
			'border: 1px solid #f90;' +
			'text-align: center;' +
			'z-index:1000;' +
			'left:47%;/*FF IE7*/' +
			'top: 40%;/*FF IE7*/' +
			'margin-left:-150px!important;/*FF IE7 该值为本身宽的一半 */' +
			'margin-top:-60px!important;/*FF IE7 该值为本身高的一半*/' +
			'margin-top:0px;' +
			'position:fixed!important;/*FF IE7*/' +
			'position:absolute;/*IE6*/' +
			'_top:      expression(eval(document.compatMode &&' +
			'	document.compatMode=="CSS1Compat") ?' +
			'	documentElement.scrollTop + (document.documentElement.clientHeight-this.offsetHeight)/2 :/*IE6*/' +
			'	document.body.scrollTop + (document.body.clientHeight - this.clientHeight)/2);/*IE5 IE5.5*/' +
		    '}' +
			'</style>' +
            '</div>';
        $("body").prepend(html);
		if(_isclose)
		{
			$("#displayheader").append('<div id="displayclose" style="float: right;color:#888;font-weight: bold;cursor:pointer">关闭</div>');
		}
        $("#displaylayer").append($("#"+_node).html());
        $("#displayclose").click(function(){
            $.JSLayer.Close();
			//事件返回
			_closeEvent();
        });
    },
	/*关闭弹出窗*/
    Close:function()
    {
		$("#displaypopwindow").remove();
    },
	/*延时关闭弹出窗*/
    DelayClose:function()
    {
		setTimeout('$("#displaypopwindow").remove();',100);
    },
	/*弹出加载进度框*/
	Loading:function(){
        var width = document.documentElement.scrollWidth;
        var height = document.documentElement.scrollHeight;
        //var width=$(window).width();
        //var height=$(window).height();
		var _width=300;
		var _height=60;
        var html='<div id="displaypopwindow">' +
            '<div id="displaybackground" style="position:absolute;left: 0;top:0;bottom: 0;z-index: 999;width:'+width+'px;height:'+height+'px"></div>' +
            '<div id="displaylayer" style="background: #fff;border:5px solid #F07741;padding:5px;width:'+_width+'px;height:'+_height+'px;">' +
			'<div id="displaycontent" style="line-height:60px;text-align:center;font-size:16px;margin:0 auto;width:220px;"><img src="../../images/jslayer-sloading.gif" width=40 height=40 style="padding:10px 0;float:left"><div style="line-height:40px;padding:10px 0">正在加载中,请稍后……</div></div>'+
            '</div>' +
			'<style>' +
			'#displaylayer{background-color: #ff6;' +
			'border: 1px solid #f90;' +
			'text-align: center;' +
			'z-index:1000;' +
			'left:50%;/*FF IE7*/' +
			'top: 50%;/*FF IE7*/' +
			'margin-left:-150px!important;/*FF IE7 该值为本身宽的一半 */' +
			'margin-top:-60px!important;/*FF IE7 该值为本身高的一半*/' +
			'margin-top:0px;' +
			'position:fixed!important;/*FF IE7*/' +
			'position:absolute;/*IE6*/' +
			'_top:      expression(eval(document.compatMode &&' +
			'	document.compatMode=="CSS1Compat") ?' +
			'	documentElement.scrollTop + (document.documentElement.clientHeight-this.offsetHeight)/2 :/*IE6*/' +
			'	document.body.scrollTop + (document.body.clientHeight - this.clientHeight)/2);/*IE5 IE5.5*/' +
		    '}' +
			'</style>' +
            '</div>';
        $("body").prepend(html);
    },
	/*弹出确认取消对话框*/
	Confirm:function(_title,_content,_okEvent,_cancelEvent){
		var width = document.documentElement.scrollWidth;
        var height = document.documentElement.scrollHeight;
        //var width=$(window).width();
        //var height=$(window).height();
		var _width=300;
		var _height=150;
		var html='<div id="displaypopwindow">' +
            '<div id="displaybackground" style="position:absolute;left: 0;top:0;bottom: 0;z-index: 999;width:'+width+'px;height:'+height+'px"></div>' +
            '<div id="displaylayer" style="background: #fff;border:5px solid #F07741;padding:5px;width:'+_width+'px;height:'+_height+'px;">' +
            '<div id="displayheader" style="height:20px;line-height: 20px; width:100%;MARGIN-BOTTOM:10px;">' +
            '<div id="displaytitle"  style="float: left;color:#888;font-size:14px;">'+_title+'</div>' +
            '</div>' +
			'<div id="displaycontent" style="line-height:25px;text-align:left;font-size:16px;margin:0 auto;width:250px;">'+_content+'</div>'+
			'<div id="displaycontent2" style="margin-top:10px"></div>'+
			'<div id="displaybutton" style="margin:0 auto;width:180px;text-align:center;height:60px;"><div style="height:30px;width:80px;float:left;background:#367FC1;color:#fff;line-height:30px;border:1px solid #f1f2f3;cursor:pointer;margin-right:10px;" id="displaybutton_ok">确定</div> <div  id="displaybutton_cancel" style="height:30px;width:80px;float:left;background:#367FC1;color:#fff;line-height:30px;border:1px solid #f1f2f3;cursor:pointer">取消</div></div>'+
            '</div>' +
			'<style>' +
			'#displaylayer{background-color: #ff6;' +
			'border: 1px solid #f90;' +
			'text-align: center;' +
			'z-index:1000;' +
			'left:50%;/*FF IE7*/' +
			'top: 50%;/*FF IE7*/' +
			'margin-left:-150px!important;/*FF IE7 该值为本身宽的一半 */' +
			'margin-top:-60px!important;/*FF IE7 该值为本身高的一半*/' +
			'margin-top:0px;' +
			'position:fixed!important;/*FF IE7*/' +
			'position:absolute;/*IE6*/' +
			'_top:      expression(eval(document.compatMode &&' +
			'	document.compatMode=="CSS1Compat") ?' +
			'	documentElement.scrollTop + (document.documentElement.clientHeight-this.offsetHeight)/2 :/*IE6*/' +
			'	document.body.scrollTop + (document.body.clientHeight - this.clientHeight)/2);/*IE5 IE5.5*/' +
		    '}' +
			'</style>' +
            '</div>';
        $("body").prepend(html);
		$("#displaybutton_ok").click(function(){
			 $.JSLayer.Close();
			 _okEvent();
		});
		$("#displaybutton_cancel").click(function(){
			 $.JSLayer.Close();
			 _cancelEvent();
		});
	},
	/*对话框*/
	Alert:function(_title,_content,_okEvent)
	{
		var width = document.documentElement.scrollWidth;
        var height = document.documentElement.scrollHeight;
		//var width=$(window).width();
        //var height=$(window).height();
		var _width=300;
		var _height=150;
		var html='<div id="displaypopwindow">' +
            '<div id="displaybackground" style="position:absolute;left: 0;top:0;bottom: 0;z-index: 999;width:'+width+'px;height:'+height+'px"></div>' +
            '<div id="displaylayer" style="background: #fff;border:5px solid #F07741;padding:5px;width:'+_width+'px;height:'+_height+'px;">' +
            '<div id="displayheader" style="height:20px;line-height: 20px; width:100%;MARGIN-BOTTOM:10px;">' +
            '<div id="displaytitle"  style="float: left;color:#888;font-size:14px;">'+_title+'</div>' +
            '</div>' +
			'<div id="displaycontent" style="line-height:25px;text-align:left;font-size:16px;margin:0 auto;width:250px;">'+_content+'</div>'+
			'<div id="displaycontent2" style="margin-top:10px"></div>'+
			'<div id="displaybutton" style="margin:0 auto;width:250px;text-align:center;height:60px;"><div style="margin:0 auto;height:30px;width:80px;background:#367FC1;color:#fff;line-height:30px;border:1px solid #f1f2f3;cursor:pointer;" id="displaybutton_ok">确定</div></div>'+
            '</div>' +
			'<style>' +
			'#displaylayer{background-color: #ff6;' +
			'border: 1px solid #f90;' +
			'text-align: center;' +
			'z-index:1000;' +
			'left:50%;/*FF IE7*/' +
			'top: 50%;/*FF IE7*/' +
			'margin-left:-150px!important;/*FF IE7 该值为本身宽的一半 */' +
			'margin-top:-60px!important;/*FF IE7 该值为本身高的一半*/' +
			'margin-top:0px;' +
			'position:fixed!important;/*FF IE7*/' +
			'position:absolute;/*IE6*/' +
			'_top:      expression(eval(document.compatMode &&' +
			'	document.compatMode=="CSS1Compat") ?' +
			'	documentElement.scrollTop + (document.documentElement.clientHeight-this.offsetHeight)/2 :/*IE6*/' +
			'	document.body.scrollTop + (document.body.clientHeight - this.clientHeight)/2);/*IE5 IE5.5*/' +
		    '}' +
			'</style>' +
            '</div>';
        $("body").prepend(html);
		$("#displaybutton_ok").click(function(){
			 $.JSLayer.Close();
			  _okEvent();
		});
	},
	/*对话框*/
	AlertAutoClose:function(_title,_content,_okEvent,_time)
	{
		var width = document.documentElement.scrollWidth;
        var height = document.documentElement.scrollHeight;
		//var width=$(window).width();
        //var height=$(window).height();
		var _width=300;
		var _height=150;
		var html='<div id="displaypopwindow">' +
            '<div id="displaybackground" style="position:absolute;left: 0;top:0;bottom: 0;z-index: 999;width:'+width+'px;height:'+height+'px"></div>' +
            '<div id="displaylayer" style="background: #fff;border:5px solid #F07741;padding:5px;width:'+_width+'px;height:'+_height+'px;">' +
            '<div id="displayheader" style="height:20px;line-height: 20px; width:100%;MARGIN-BOTTOM:10px;">' +
            '<div id="displaytitle"  style="float: left;color:#888;font-size:14px;">'+_title+'</div>' +
            '</div>' +
			'<div id="displaycontent" style="line-height:25px;text-align:left;font-size:16px;margin:0 auto;width:250px;">'+_content+'</div>'+
			'<div id="displaycontent2" style="margin-top:10px"></div>'+
			'<div id="displaybutton" style="margin:0 auto;width:250px;text-align:center;height:60px;"><div style="margin:0 auto;height:30px;width:80px;background:#367FC1;color:#fff;line-height:30px;border:1px solid #f1f2f3;cursor:pointer;" id="displaybutton_ok">确定</div></div>'+
            '</div>' +
			'<style>' +
			'#displaylayer{background-color: #ff6;' +
			'border: 1px solid #f90;' +
			'text-align: center;' +
			'z-index:1000;' +
			'left:50%;/*FF IE7*/' +
			'top: 50%;/*FF IE7*/' +
			'margin-left:-150px!important;/*FF IE7 该值为本身宽的一半 */' +
			'margin-top:-60px!important;/*FF IE7 该值为本身高的一半*/' +
			'margin-top:0px;' +
			'position:fixed!important;/*FF IE7*/' +
			'position:absolute;/*IE6*/' +
			'_top:      expression(eval(document.compatMode &&' +
			'	document.compatMode=="CSS1Compat") ?' +
			'	documentElement.scrollTop + (document.documentElement.clientHeight-this.offsetHeight)/2 :/*IE6*/' +
			'	document.body.scrollTop + (document.body.clientHeight - this.clientHeight)/2);/*IE5 IE5.5*/' +
		    '}' +
			'</style>' +
            '</div>';
        $("body").prepend(html);
		$("#displaybutton_ok").click(function(){
			 $.JSLayer.Close();
			  _okEvent();
		});

		setTimeout('$("#displaypopwindow").remove();',_time);
	}
};