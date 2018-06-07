
$("ul").on("click","li",function(){
	
    $(this).toggleClass("completed");

});
$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input").keypress(function(e){
 	if(e.which===13){
		var inputValue=$(this).val();
		$(this).val(" ");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+inputValue + "</li>");
         
	}

});

$(".add").on("click",function(){
	$("input").fadeToggle();

})






// if($(this).css("color")==="rgb(128, 128, 128)"){
	//      $(this).css("color","black");
	//      $(this).css("text-decoration","none");

	// }
	// else{

	// $(this).css("color","gray");
	// $(this).css("text-decoration","line-through");
 //    }