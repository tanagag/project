jQuery.softKeyboard = {
    keyboardId: "Layer_key",
    passwordId: "billSubmitVoBillPassword",
    formId: "form1",
    afterCloseFunc: function() {if(this.formId != null && this.formId != ""){if($.formValidator != null)$.formValidator.elemIsValidNoCallBack(this.formId, this.passwordId);}},
    width:"216px",
    height:"106px",
    passLength:"",
    num:2,
    
    /** 显示软键盘 */
    showKeyboard: function(str) {
    	
        if(this.keyboardId != null && this.keyboardId != ""){
        	
            obj = $("#" + this.keyboardId);
            passwordObj = $("#" + this.passwordId);
            if(obj != null){
                var top = passwordObj.offset().top - 5;           
                var left = passwordObj.offset().left + passwordObj.width() + 10;               
                style = "position:absolute;visibility:visible;";
                style += "width:" + this.width + "px;";
                style += "height:" + this.height + "px;"; 
                style += "top:" + top + "px;";
                style += "left:" + left + "px;"; 
                obj.attr("style",style);               
            }
        }   
    },
    
    softKeyboardCloseCallBack:function(){
    	
    },
 
    /** 关闭软键盘 */
    closeKeyboard: function() {
        if(this.keyboardId != null && this.keyboardId != ""){
            obj = $("#" + this.keyboardId);
            if(obj != null){
                obj.attr("style","position:absolute;visibility: hidden;top: 0px;left: 0px;");
            }
            $("body").focus();
           
            $("#"+this.passwordId).blur();
            
        }
        
        this.softKeyboardCloseCallBack();
        
        this.afterCloseFunc();
    },
    closeKeyboard_uncheck : function() {
    	if(this.keyboardId != null && this.keyboardId != ""){
            obj = $("#" + this.keyboardId);
            if(obj != null){
                obj.attr("style","position:absolute;visibility: hidden;top: 0px;left: 0px;");
            }
            $("body").focus();
        }
    },
    /** 点击软件盘 */
    clickKeyboard: function(str) {
        passwordObj = $("#" + this.passwordId);
        if (str == "bak") {
        	var password = passwordObj.val();
           if(password.length > 0){
               passwordObj.val(password.substring(0, password.length - 1));
            }
        }else if (str == "clear"){
            passwordObj.val("");
        }else {
        	
        	if(this.passLength ==null || this.passLength==""){
        		
                if(passwordObj.val().length < 8){
                    passwordObj.val(passwordObj.val() + str);
                }
                
        	}else{
        		
        		 if(passwordObj.val().length < this.passLength){
                     passwordObj.val(passwordObj.val() + str);
                 }
        	}
        }
    },
    
    keyboardCilck: function() {
        /*
        obj = $("#" + jQuery.softKeyboard.passwordId);
        if(obj != null){
            var left = obj.position().left;
            var top = obj.position().top;
            
            var right = obj.position().left + obj.width();
            var bottom = obj.position().top + obj.height();
            if( event.x < left || event.x > right 
             || event.y < top || event.y > bottom ) {
                jQuery.softKeyboard.closeKeyboard();
            }
        }
        */
     }
}