
$("ul").on("click" ,"li" ,function(){
	// li becomes strikethrough and crossed
 $(this).toggleClass("completed")
}) 

$("ul").on("click" ,"span",function(event){
	$(this).parent().fadeOut(800,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input").on("keypress",function(event){
	if(event.which == 13){
		var newText= $(this).val();
		$(this).val("");
		$("ul").append("<li><span> <i class='fa fa-trash' aria-hidden='true'></i> </span>"+ newText + "</li>");
	}
	
})

$(".fa-pencil").click(function(){
	$("input").fadeToggle();
})