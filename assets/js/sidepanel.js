jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
});

jQuery(document).ready(function($) {
     $.fn.doubleTap = function(doubleTapCallback) {
         return this.each(function(){
			var elm = this;
			var lastTap = 0;
			$(elm).bind('vmousedown', function (e) {
                                var now = (new Date()).valueOf();
				var diff = (now - lastTap);
                    lastTap = now ;
                        if (diff < 250) {
                    if($.isFunction( doubleTapCallback ))
                    {
                       doubleTapCallback.call(elm);
                    }
            	}      
			});
         });
    }
});

jQuery(document).ready(function($) {
	$(".doubleTap").doubleTap(function(){
		$( ".easter_egg" ).toggle();
	 });
	$( ".doubleTap" ).dblclick(function() {
		$( ".easter_egg" ).toggle();
	});
});