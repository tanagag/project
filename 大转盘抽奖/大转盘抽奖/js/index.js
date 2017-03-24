$(function(){
	//-----大转盘抽奖活动游戏自动结束js
   var rotateFunc = function(awards,angle,text){  //awards:奖项，angle:奖项对应的角度
      $('#lotteryBtn').stopRotate();
      $("#lotteryBtn").rotate({
         angle:0, 
         duration: 3000, 
         animateTo: angle+1440, //angle是图片上各奖项对应的角度，1440是我要让指针旋转4圈。所以最后的结束的角度就是这样子^^
         callback:function(){
            alert(text)
         }
      }); 
   };   
   $("#lotteryBtn").rotate({ 
      bind: 
       { 
         click: function(){
               var data = [1,2,3,4,5,6,7,8]; //返回的数组
                   data = data[Math.floor(Math.random()*data.length)];
               if(data==1){
                  rotateFunc(1,157,'恭喜您抽中的一等奖')
               }
               if(data==2){
                  rotateFunc(2,247,'恭喜您抽中的二等奖')
               }
               if(data==3){
                  rotateFunc(3,22,'恭喜您抽中的三等奖')
               }
               if(data==4||data==5||data==6||data==7||data==8){
                  var angle = [67,112,202,292,337];
                      angle = angle[Math.floor(Math.random()*angle.length)] 
                  rotateFunc(0,angle,'很遗憾，这次您未抽中奖')
               }
         }
       } 
      
   });
   //-----大转盘抽奖活动游戏自动结束js

})
