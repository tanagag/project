$(document).ready(function() {
		if (window.DeviceMotionEvent){
			var speed = 25;
			var audio = document.getElementById("shakemusic");
			var openAudio = document.getElementById("openmusic");
			var x = t = z = lastX = lastY = lastZ = 0;
			window.addEventListener('devicemotion',
				function () {
					var acceleration = event.accelerationIncludingGravity;
					x = acceleration.x;
					y = acceleration.y;
					if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
						audio.play();
						$('#animationSandbox').removeClass().addClass('shake' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						  $(this).removeClass();
						});
						setTimeout(function(){
							audio.pause();							
							openAudio.play();
							$('.mask').css('display', 'block');
							$('.succ').css('display', 'block');							
						}, 1500);
					};
					lastX = x;
					lastY = y;
				},false);
		};
});
