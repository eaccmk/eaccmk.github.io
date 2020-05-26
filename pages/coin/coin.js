jQuery.noConflict();
jQuery(document).ready(function($){
jQuery('#myimg').on('click', function(){
	var flipResult = Math.random();
	functionOne(flipResult);
	});
});

var functionOne = function(flipResult){
	jQuery('#myimg').removeClass();
	jQuery('#myimg').text("");
	
	setTimeout(function(){
		jQuery('#myimg').addClass('spin');
		jQuery('#lasttime').text(new Date().toLocaleString());
		}, 100);
		functionTwo(flipResult);
	}

var functionTwo = function(flipResult){
	var quheads = '/assets/coinFlip/headOrange.svg';
	var qutails = '/assets/coinFlip/tailBlue.svg';
	
	var r = jQuery.Deferred();
	setTimeout(function(){
	if(flipResult <= 0.5) {
			console.log('it is head');
			jQuery('#result').text('HEADS');
			jQuery('#result').css('color',`#00aaff`);
			jQuery('#myimg').attr('src',quheads);		
		}
		else {
			console.log('it is tail');
			jQuery('#result').text('TAILS');
			jQuery('#result').css('color',`#cc0000`);
			jQuery('#myimg').attr('src',qutails);
		}
	}, 3000);
	return r;
}
