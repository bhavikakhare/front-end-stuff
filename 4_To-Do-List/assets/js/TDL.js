
$(".fa-plus").on("click",function(){
	$("input[type='text']").slideToggle();
});

$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});

$("ul").on("click","span",function(event){
	event.stopPropagation();
	var p = $(this).parent();
	p.fadeOut(500,function(){p.remove();});
});

$("#1").keypress(function(e){
	if(e.which==13) {
		$("ul").html($("ul").html()+"<li><span><i class='fas fa-trash'></i></span> "+$(this).val()+"</li>");
		$(this).val("");
	}
});
