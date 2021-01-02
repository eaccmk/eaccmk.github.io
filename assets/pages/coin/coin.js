//jQuery.noConflict();
$(document).ready(function($){
$('#myimg').on('click', function(){
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
	var quheads = '/assets/coinFlip/headOrange.svg';
	var qutails = '/assets/coinFlip/tailBlue.svg';
	
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
