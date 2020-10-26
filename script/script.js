$(document).ready(function() {
	/* 새 창으로 열기 */
	$("a[href^='http']").attr('target','_blank');
	
	/* 메인 슬라이드 */
	// 슬라이드 (자동)
	$("#slide>ul:gt(0)").hide();
	var i = 0;
	var slide;
	$(window).load(function() {startSlide();});
	
	// 슬라이드 시작 기능
	function startSlide() {
		slide = setInterval(function(){
			var next = (i+1) % 3;
			$("#slide>ul").eq(i).fadeOut();
			$("#slide>ul").eq(next).fadeIn(400);
			$("#slide>ul ul").eq(next).stop(true).animate({top:120});
			$("#slide>ul ul").eq(i).stop(true).animate({top:100});

			
			i = next;
		}, 6000);
	}
	// 슬라이드 멈춤 기능
	function stopSlide() {clearInterval(slide);}
		
	// 슬라이드 (수동)
	$(".slider_left").click(function() {
		stopSlide();
		var prev = (i-1) % 3;
		$("#slide>ul").eq(i).fadeOut();
		$("#slide>ul").eq(prev).fadeIn(400);
		$("#slide>ul ul").eq(prev).stop(true).animate({top:120});
		$("#slide>ul ul").eq(i).stop(true).animate({top:100});
		i = prev;
	});
	$(".slider_right").click(function() {
		stopSlide();
		var next = (i+1) % 3;
		$("#slide>ul").eq(i).fadeOut();
		$("#slide>ul").eq(next).fadeIn(400);
		$("#slide>ul ul").eq(next).stop(true).animate({top:120});
		$("#slide>ul ul").eq(i).stop(true).animate({top:100});
		i = next;
	});
	$(".slider_left, .slider_right").click(function() {
		startSlide();
	});
	
	/* 메인 슬라이드 버튼 오버 시 */
	$(".slide_one ul b").on({
		mouseover : function() {
			$(this).css({color:"#ff9800"});
			$(this).next().css({background:"#fff", border:"2px solid #ff9800"});
		},
		mouseout : function() {
			$(this).css({color:"#fff"});
			$(this).next().css({background:"#ff9800", border:"none"});
		}
	});
	$(".slide_two ul b").on({
		mouseover : function() {
			$(this).css({color:"#0d96e6"});
			$(this).next().css({background:"#fff", border:"2px solid #0d96e6"});
		},
		mouseout : function() {
			$(this).css({color:"#fff"});
			$(this).next().css({background:"#0d96e6", border:"none"});
		}
	});
	$(".slide_three ul b").on({
		mouseover : function() {
			$(this).css({color:"#aa1c1b"});
			$(this).next().css({background:"#fff", border:"2px solid #aa1c1b"});
		},
		mouseout : function() {
			$(this).css({color:"#fff"});
			$(this).next().css({background:"#aa1c1b", border:"none"});
		}
	});
	
	/* TOP 버튼 */
	$(window).on("scroll", function() {
		var scrollNum = parseInt($(window).scrollTop());
		if (scrollNum > 100) {
			$("#top_button").stop(true).fadeIn();
		} else if (scrollNum == 0) {
			$("#top_button").stop(true).fadeOut();
		}
	});
	
	$("#top_button").click(function() {
		$("html, body").stop(true).animate({scrollTop:0}, 1000);
	});
	
	/* 신제품 슬라이드 */
	var n = 0;
	var img_count = $(".product_wrap li").last().index()+1;
	$(".new_product_button_left").click(function() {
		n--;
		if(n <= -1) {
			n = 0;
		}
		$(".product_wrap").stop(true).animate({left:-300*n}, 500, 'easeInOutExpo');
	});
	$(".new_product_button_right").click(function() {
		n++;
		if(n >= 5) {
			n = 4;
		}
		$(".product_wrap").stop(true).animate({left:-300*n}, 500, 'easeInOutExpo');
	});
	
	/* 베스트 제품 랭킹 버튼 오버 시 */
	$("#best_product_rank li:nth-of-type(2)").on({
		mouseover : function() {
			$(this).stop(true).animate({opacity:0}, 300);
			$(this).prev().stop(true).animate({opacity:1}, 300);
		},
		mouseout : function() {
			$(this).stop(true).animate({opacity:1}, 300);
			$(this).prev().stop(true).animate({opacity:0}, 300);
		}
	});
	$("#best_product_rank li:nth-of-type(4)").on({
		mouseover : function() {
			$(this).stop(true).animate({opacity:0}, 300);
			$(this).prev().stop(true).animate({opacity:1}, 300);
		},
		mouseout : function() {
			$(this).stop(true).animate({opacity:1}, 300);
			$(this).prev().stop(true).animate({opacity:0}, 300);
		}
	});
	
	/* 베스트 제품 랭킹 바뀌기 및 슬라이드 */
	$("#best_product_container>li:gt(0)").hide();
	var b = 0;
	var num_count = $("#number_count ul li").last().index()+1;
	$("#best_product_container>li").eq(b).children("ul:first").stop(true).animate({top:320}, 700, 'easeInOutBack');
	$("#best_product_container>li").eq(b).children("ul:last").children("li:nth-of-type(1)").stop(true).animate({left:0}, 700, 'easeInOutBack');
	$("#best_product_container>li").eq(b).children("ul:last").children("li:nth-of-type(2)").stop(true).animate({top:0}, 700, 'easeInOutBack');
	$("#best_product_container>li").eq(b).children("ul:last").children("li:nth-of-type(3)").stop(true).animate({top:210}, 700, 'easeInOutBack');
	$("#best_product_container>li").eq(b).children("ul:last").children("li:nth-of-type(4)").stop(true).animate({left:630}, 700, 'easeInOutBack');
	$("#best_product_rank li:nth-of-type(2)").click(function() {
		b--;
		if(b <= -1) {
			b = 0;
		}
		$("#number_count ul").stop(true).animate({left:-246*b}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b+1).stop(true).fadeOut();
		$("#best_product_container>li").eq(b).stop(true).fadeIn();
		$("#best_product_container>li").eq(b+1).children("ul:first").stop(true).animate({top:300});
		$("#best_product_container>li").eq(b).children("ul:first").stop(true).animate({top:320}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b+1).children("ul:first").stop(true).animate({top:300}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b).children("ul:last").children("li:nth-of-type(1)").stop(true).animate({left:0}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b+1).children("ul:last").children("li:nth-of-type(1)").stop(true).animate({left:-10}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b).children("ul:last").children("li:nth-of-type(2)").stop(true).animate({top:0}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b+1).children("ul:last").children("li:nth-of-type(2)").stop(true).animate({top:-10}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b).children("ul:last").children("li:nth-of-type(3)").stop(true).animate({top:210}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b+1).children("ul:last").children("li:nth-of-type(3)").stop(true).animate({top:220}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b).children("ul:last").children("li:nth-of-type(4)").stop(true).animate({left:630}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b+1).children("ul:last").children("li:nth-of-type(4)").stop(true).animate({left:640}, 700, 'easeInOutBack');
		
		});
	$("#best_product_rank li:nth-of-type(4)").click(function() {
		b++;
		if(b >= 5) {
			b = 4;
		}
		$("#number_count ul").stop(true).animate({left:-246*b}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b-1).stop(true).fadeOut();
		$("#best_product_container>li").eq(b).stop(true).fadeIn();
		$("#best_product_container>li").eq(b-1).children("ul:first").stop(true).animate({top:300});
		$("#best_product_container>li").eq(b).children("ul:first").stop(true).animate({top:320}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b-1).children("ul:first").stop(true).animate({top:300}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b).children("ul:last").children("li:nth-of-type(1)").stop(true).animate({left:0}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b-1).children("ul:last").children("li:nth-of-type(1)").stop(true).animate({left:-10}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b).children("ul:last").children("li:nth-of-type(2)").stop(true).animate({top:0}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b-1).children("ul:last").children("li:nth-of-type(2)").stop(true).animate({top:-10}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b).children("ul:last").children("li:nth-of-type(3)").stop(true).animate({top:210}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b-1).children("ul:last").children("li:nth-of-type(3)").stop(true).animate({top:220}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b).children("ul:last").children("li:nth-of-type(4)").stop(true).animate({left:630}, 700, 'easeInOutBack');
		$("#best_product_container>li").eq(b-1).children("ul:last").children("li:nth-of-type(4)").stop(true).animate({left:640}, 700, 'easeInOutBack');
	});
	
	/* 인스타그램 사진 오버 시 */
	$("#instagram_container li").on({
		mouseover : function() {$(this).find("span").stop(true).animate({ opacity:1 });},
		mouseout : function() {$(this).find("span").stop(true).animate({ opacity:0 });}
	});

});