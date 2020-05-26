jQuery(document).ready(function($){
	$('myimg').on('click', function(){
		var flipResult = Math.random();
		functionOne(flipResult);
	});
});

var functionOne = function(flipResult){
	$('#myimg').removeClass();
	$('#myimg').text("");
	
	setTimeout(function(){
		$('#myimg').addClass('spin');
		$('#lasttime').text(new Date().toLocaleString());
		}, 100);
		functionTwo(flipResult);
}

var functionTwo = function(flipResult){
	var quheads = '/assets/coinFlip/head.png';
	var qutails = '/assets/coinFlip/tail.png';
	
	var r = $.Deferred();
	setTimeout(function(){
	if(flipResult <= 0.5) {
			console.log('it is head');
			$('#result').text('HEADS');
			$('#result').css('color',`#00aaff`);
			$('#myimg').attr('src',quheads);		
		}
		else {
			console.log('it is tail');
			$('#result').text('TAILS');
			$('#result').css('color',`#cc0000`);
			$('#myimg').attr('src',qutails);
		}
	}, 3000);
	return r;
}

/*
window.onload=function(){
var toggler = false;
var degflag = false;
var enddegflag = false;
var min = 10; 
var max = 17;
var randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
var counter = 1;

var quheads = '/assets/coinFlip/head.png';
var qutails = '/assets/coinFlip/tail.png';
var myimg = document.querySelector("#myimg");
var result = document.querySelector("#result");
var posrotInterval, negrotInterval;

//css way
myimg.addEventListener("click", function() {
  counter = 1;
  toggler = false;
  degflag = false;
  enddegflag = false;
  randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  myimg.style.transform = "rotateY(89deg)";
}, false);

myimg.addEventListener("transitionend", function () {
  if (counter < randNumber) {
    console.log("---- counter  --- ", counter);
    console.log("---- randNumber --- ", randNumber);
    
    toggler = (toggler) ? false : true;
    if (toggler) {
      myimg.src = (myimg.src == quheads) ? qutails : quheads;
      console.log("---- myimg.src --- ", myimg.src);
      myimg.style.transform = "rotateY(0deg)";
      degflag = false;
    }
    else {
      myimg.style.transform = "rotateY(89deg)";
      degflag = true;
    }
    counter += 1;
  }
  else {
    if (degflag && !enddegflag) {
      myimg.style.transform = "rotateY(0deg)";
      enddegflag = true;
    }
    else {
      
      if (myimg.src == quheads) {
        result.innerHTML = "HEADS";
        result.style.color = "#00aaff";
      }
      else {
        result.innerHTML = "TAILS";
        result.style.color = "#cc0000";
      }
      document.querySelector("#lasttime").innerHTML = new Date().toLocaleString();
    }
  }
}, false);
}
*/