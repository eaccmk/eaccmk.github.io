!function(d,s,id) {
	var js,fjs=d.getElementsByTagName(s)[0];
	if(!d.getElementById(id)){
			js=d.createElement(s);
			js.id=id;
			js.src='https://weatherwidget.io/js/widget.min.js';
			fjs.parentNode.insertBefore(js,fjs);
			}
		}
(document,'script','weatherwidget-io-js');


/*
$(window).resize(function(){

    $('.className').css({
        position:'absolute',
        left: ($(window).width() - $('.className').outerWidth())/2,
        top: ($(window).height() - $('.className').outerHeight())/2
    });

});

// To initially run the function:
$(window).resize();
*/
