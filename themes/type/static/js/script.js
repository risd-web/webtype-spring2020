$(function(){

	$("main").on("click", function(event){

		if ($(event.target).hasClass('element')){
			$(event.target).remove();
		}else{
			var element = event.target.tagName;
			var x = event.pageX;
			var y = event.pageY;

			// console.log(element);
			var sticker = '<div class="element" id="added">'+ element +'</div>';
			$('main').append(sticker);
			
			$('#added').css({
			  	 top:y-20, 
			  	 left:x-20,
			 }).removeAttr('id');
		}
	});

	$("#dark-mode").click(function(){
		$('body').toggleClass('dark');
	});


	$(window).resize(function() {
	 	$('.element').each(function(){
	 		$(this).remove();
	 	});
	});

});