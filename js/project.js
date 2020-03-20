$(document).ready(function(){
	$(window).on("scroll",function(){
		var sc=$(window).scrollTop();
		if(sc>0){
			$(".navbar-expand-lg ").css("backgroundColor","#f5a637");
		}else{
			$(".navbar-expand-lg ").css("backgroundColor","transparent");
	}
	});

	$("button").click(function(){
		$(this).css("backgroundColor","#f5a637");
	});
	/*---------------------------------------------------*/

$("a[href='#lunch']").click(function(){
		/*$("#lunch").show();
		$("#dinner").hide();
		$("#drink").hide();*/
		$("#lunch").css("display","block");
		$("#dinner").css("display","none");
		$("#drink").css("display","none");

	});

$("a[href='#dinner']").click(function(){
		/*$("#dinner").show();
		$("#lunch").hide();
		$("#drink").hide();*/
		$("#dinner").css("display","block");
		$("#lunch").css("display","none");
		$("#drink").css("display","none");
	});

$("a[ href='#drink']").click(function(){
		/*$("#drink").show();
		$("#lunch").hide();
		$("#dinner").hide();*/
		$("#drink").css("display","block");
		$("#lunch").css("display","none");
		$("#dinner").css("display","none");
	});
/*----------------------------------------------------*/
if($("li").hasClass('active')){
	$(this).css("backgroundColor","orange");
}
/*----------------------------------------------------*/
$("#button").mouseenter(function(){
	$(this).css("color","#f5a637");
});
$("#button").mouseleave(function(){
	$(this).css("color","black");
});
/*------------------------------------------------------*/
$("button[type=submit]").mouseenter(function(){
	$(this).css("color","#f5a637");
});
$("button[type=submit]").mouseleave(function(){
	$(this).css("color","black");
});
$("input[type=password]").on("focus",function(){
	$(this).css("borderColor","#f5a637");
});
/*------------------------------------------------------*/
$(".aside img").mouseenter(function(){
		$(this).css({
			//"backgroundColor":"gray",
			
			"opacity":0.8,
		});
	});

	$(".aside img").mouseleave(function(){
		$(this).css({
			"opacity":1,
		});
	});
/*--------------------------------------------------------*/


















});
