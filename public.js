//url = "http://trade.ytz.dev:8572/"; //江家雷
url = "http://ytz.pccb.com:8578/";
//url = "http://192.168.2.42:8572/"; //江家雷
//url = "http://192.168.2.230:8853/"; //金冠雄
//url = "http://192.168.2.142:8572/"; //曾亚东
//url = "http://192.168.2.111:8111/";
//url = "http://192.168.2.49:8572/"; //陈深根

$(function(){
		init();
        window.onresize = function(){
            setTimeout(function(){
                init();
            },100);
        }
        function init(){
            var percent = parseInt(document.body.offsetWidth)/320*100;
            document.getElementsByTagName("html")[0].style.cssText="font-size:"+percent+"px";
        }
        //动态添加透明遮罩
        $("html").append('<div id="screen2" style="display:none"><p><img src="images/loading.gif" width="24" height="24"></p></div>');

		/*
		 <nav class="clearfix cumb" rel="2">
			<a href="javascript:void(0)" rel="0" class="active">固收理财</a>
			<a href="javascript:void(0)" rel="0">免费福利</a>
			<i></i>
		</nav>
		<div class="wrap">
			<article id="tabCon">
				<div class="section" id="tab1">
					<div>内容列表</div>
					<div></div>
					<p class="more"></p>
				</div>
				<div class="section" id="tab2">
					<div>内容列表2</div>
					<div></div>
					<p class="more"></p>
				</div>
			</article>
		</div>
		*/
        //nav导航选项卡
        var rel = $('nav').attr("rel");
        var per = 0;
        if(rel == 2){
            per = 50;
        }else if(rel == 3){
            per = 33.33;
        }else if(rel == 4){
            per = 25;
        }else if(rel == 5){
            per = 20;
        }
        $("nav a,nav i,#tabCon .section").css("width",per+"%");
        $("#tabCon").css("width",rel*100+"%")

        $("nav a").click(function(event) {
            /* Act on the event */
            var idx = $(this).index();
            $(this).closest('nav').find("i").css({
                left: idx*per+"%"
            });
            $("#tabCon").css({
                "transform": 'translateX(-'+idx*per+'%)'
            });
            $("#tabCon .section").css("height","1px");
            $("#tabCon .section").eq(idx).css("height","");
        });
        //多选按钮的选中状态，rel=0即没有选中
        $("label.chk").each(function(index, el) {
                var obj = $(this).find("span");
                if(obj.attr("rel")==0){
                    obj.removeClass('chk-active');
                }else if(obj.attr("rel")==1){
                    obj.addClass('chk-active');
                }
            });
        $(document).on('click', 'label.chk', function(event) {
            var obj = $(this).find("span");
            var rel = obj.attr("rel");
            if(rel==0){
                obj.addClass('chk-active').attr("rel","1");
            }else if(rel==1){
                obj.removeClass('chk-active').attr("rel","0");
            }
        });
      

});
//获取url后的参数
function request(paras)
{
    var url = location.href; 
    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&"); 
    var paraObj = {} 
    for (i=0; j=paraString[i]; i++){ 
    paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length); 
    } 
    var returnValue = paraObj[paras.toLowerCase()]; 
    if(typeof(returnValue)=="undefined"){ 
    return ""; 
    }else{ 
    return returnValue; 
    } 
}
//手机号码验证函数
function isMobilePhone(obj){
    var partten = /^1(3|4|5|8)\d{9}$/;
    if(partten.test(obj)){
        return true ;
    }else{
        return false ;
    }
}
//邮箱格式验证
function checkEmail(temp)
{
    var pattern = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;   
    if (!pattern.test(temp)) {   
        return false;   
    }   
    return true;   

}
/*复制功能*/
function copy(obj) 
{ 
  var Url2=$(obj).prev(); //只能是input或者textarea
  Url2.select(); // 选择对象 
  document.execCommand("Copy"); // 执行浏览器复制命令 
  alert("已复制好，可贴粘。"); 
} 
//s 代表金额，n 代表保留小数位数
function fmoney(s, n) { 
	var ss = s;
	if(s < 0){
		s = Math.abs(s);
	}
	var num = n;
	n = n > 0 && n <= 20 ? n : 2;  
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  
	var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];  
	t = "";  
	for (i = 0; i < l.length; i++) {  
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
	}  
	if(ss < 0){
		if(num == 0){
			return "-"+t.split("").reverse().join("");
		}
	}
	if(num == 0){
		return t.split("").reverse().join("");
	}
	
	return t.split("").reverse().join("") + "." + r;  
} 
//计算一个日期字符串与当前日期相差值 
//输入的参数形式如：2012-12-12 12:12:12 
//返回相差值的字符串 
function GetDateDiff(datetime) 
{ 
// 可以将2012 - 12 - 12 12 : 12 : 12字符串转为JS中的时期对象, 
// 因为默认情况下只把持2000 / 05 / 05这样形式的字符串转为时间对象 
var dateBegin = new Date(datetime.replace(/-/g, "/")); 
var dateEnd = new Date(); 
var dateDiff = dateEnd.getTime() - dateBegin.getTime(); 
// 计算相差的天数 
var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算相差的天数 
var hourleft = Math.floor(dateDiff / (3600 * 1000)); //计算相差的小时数
var minuteleft = Math.floor(dateDiff / (60 * 1000)); //计算相差的分钟数 
var returnstr = ""; 
if(dayDiff > 5) //前天以前就直接返回时间字符串 
{ 
    return datetime; 
} 
else if (hourleft>=24)
{
    returnstr += dayDiff+"天前 "; 
}
else if (hourleft>=1)
{
    returnstr += hourleft+"小时前 "; 
}
else if (minuteleft>=1)
{
    returnstr += minuteleft+"分钟前 "; 
}
else
{
    if (Math.floor(dateDiff / 1000)<0)
    {
        returnstr += "1秒前 "; 
    }
    else
    {
        returnstr += Math.floor(dateDiff / 1000) +"秒前 "; 
    }
}
return returnstr; 
}

 /**
  * [send description]
  * @param  {[type]} account [手机号码]
  * @param  {[type]} obj     [发送验证码按钮]
  * @param  {[type]} falg    [1：动态登陆短信发送，2忘记密码短信发送
  * @return {[type]}         [description]
  */
 
  function send(account,obj,flag){
     var rel = $(obj).attr("rel");
     var time = 60;
     var obj = $(obj);
     var rel = obj.attr("rel");
	   
     var sendUrl = "";
     if(flag==1){
         sendUrl = url+"user/loginCode.json";
     }else if(flag==2){
         sendUrl = url+"user/passwordCode.json";
     }
     if(rel==0){
         var clr = setInterval(function(){
              time--;
              if(time>0){
                  //这里先执行短信发送的代码
                  if(time==59){
                      $.ajax({
                        type:"POST",
                        url:sendUrl,
                        dataType: 'jsonp',
                        data: {account:account},
                        beforeSend:function(){
                          obj.addClass('resend');
                        },
                        success: function (data) {
                            var str = '';
                            console.log(data);
                        },
                        complete:function(){
                          obj.removeClass('resend');
                        },
                        error:function(){}
                     });
                  }
                  obj.html(time+"秒后重新发送").addClass('resend').attr("rel",1);
              }else{
                  obj.html("重新发送").removeClass('resend').attr("rel",0);
                  clearInterval(clr);
              }

          }, 1000);
     }
  }
/**
 * [userAgent 判断android还是ios]
 * @return {[type]} [0 = android ，1 = ios]
 */
function userAgent(){
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
   // alert('是否是Android：'+isAndroid);
   // alert('是否是iOS：'+isiOS);
    if(isAndroid){
        return 0;
    }
    if(isiOS){
        return 1;
    }
    return 2;
}
/**
 * [setPage description]
 * @param {[type]} pagesize [分页的个数]
 * @param {[type]} pagenum  [页码]
 * @param {[type]} count    [总共分多少页]
 * @param {[type]} method   [要分页的当前方法]
 * @param {[type]} obj      [加载更多载体的DOM]
 */
function setPage(pagesize,pagenum,count,method,obj){
    if(count=="undefined"||count==0){
      obj.html('<p style="background:#fff;height:30px;line-height:30px;text-align:center">暂无数据...</p>');
      return;
    }
    if(pagenum < count){
         pagenum++;
         obj.html('<a href="javascript:'+method+'('+pagesize+','+pagenum+')">加载更多</a>');  
    }else{
        obj.html('').height(0);
    }  
}
//本地存储
var storage = window.sessionStorage;
 
 //cookie
 jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
var uname =$.cookie('uname');//console.log(uname);

function cookies(){
	if(uname !=null){
		
	}else{
		
		 window.location.href="login.html";
		//window.location.href="assetDetails.html?fp=3";
	}
//console.log(uname);
}
//倒计时
function FreshTime(obj,index,lefttime)
{       
        var leftTime = lefttime;
        
        d=parseInt(lefttime/3600/24);
        h=parseInt((lefttime/3600));
        m=parseInt((lefttime/60)%60);
        s=parseInt(lefttime%60);

        d = d > 9 ? d : "0" + d;
        h = h > 9 ? h : "0" + h;
        m = m > 9 ? m : "0" + m;
        s = s > 9 ? s : "0" + s;

        if(lefttime<=0){
             $('.share-join-r').addClass('share-ywc').html("<div class='share-join-r-end'>已完成</div>"); 
             $('.share-xq-ft .man').html('，本团已满');
            clearInterval(index);
        }else{
        	$('.share-join-r').addClass('share-js').find('.share-join-r-t').html("<i class='icon-time'></i>距结束仅剩");
            obj.find("span:first").html(h).next().html(m).next().html(s);
        }
}


//脚部
$(function(){
	var str = "";
		str+="<div style='height:55px'></div>";
		str+="<footer class='box'>";
		str+="	<div class='flex'>";
		str+="		<a href='index.html?fp=1' rel='1' target='_parent' >";
		str+="			<dl>";
		str+="				<dt><img src='images/icon_1.png' width='20' height='18'></dt>";
		str+="				<dd>精选</dd>";
		str+="			</dl>";
		str+="		</a>";
		str+="	 </div>";
		str+="	<div class='flex'>";
		str+="		<a href='financialList.html?fp=2' rel='2'  target='_parent' >";
		str+="			<dl>";
		str+="				<dt><img src='images/icon_2.png' width='18'  height='18'/></dt>";
		str+="				<dd>理财</dd>";
		str+="			</dl>";
		str+="		 </a>";
		str+="	</div>";
		str+="	<div class='flex flex1'>";
		str+="		<a href='assetDetails.html?fp=3' rel='3' target='_parent'>";
		str+="			<dl>";
		str+="				<dt><img src='images/icon_3.png' width='18' height='18' /></dt>";
		str+="				<dd>资产</dd>";
		str+="			</dl>";
		str+="		 </a>";
		str+="	</div>";
		str+="	<div class='flex flex1'>";
		str+="		<a href='myInformation.html?fp=4' rel='4'  target='_parent'>";
		str+="			<dl>";
		str+="				<dt><img src='images/icon_4.png' width='18'  height='18'/></dt>";
		str+="				<dd>我的</dd>";
		str+="			</dl>";
		str+="		</a>";
		str+="	</div>";
		str+="</footer>";
		$("#footer").append(str);
		if(uname != null){
	
		}else{
			$(".flex1 a").attr("href","login.html");
		}
		//改变底部导航的选中样式
       var tab = request("fp");
       if(tab!=""){
        $("#footer a[rel="+tab+"]").addClass("active").find("img").attr("src","images/icon_"+tab+"_active.png"); 
       }else{
		//$("#footer a[rel=1]").addClass("active").find("img").attr("src","images/icon_1_active.png"); 
	   }
});