$(function () {            
            //绑定滚动条事件
              //绑定滚动条事件
            $(window).bind("scroll", function () {
                var sTop = $(window).scrollTop();
                var sTop = parseInt(sTop);
                if (sTop >= 130) {
                    if (!$(".tu_box_ove").is(":visible")) {
                        try {
                            $(".tu_box_ove").slideDown();
                        } catch (e) {
                            $(".tu_box_ove").show();
                        }                      
                    }
                }
                else {
                    if ($(".tu_box_ove").is(":visible")) {
                        try {
                            $(".tu_box_ove").slideUp();
                        } catch (e) {
                            $(".tu_box_ove").hide();
                        }                       
                    }
                } 
            });
        })


$(window).scroll(function(){
	$(".float_box5").click(function() {
		$("body,html").stop().animate({
			"scrollTop": 0
		}, 800, function() {
		});
	})
})


$(document).ready(function(){
$(".header_wu").mouseover(function(){
		$(this).children(".header_wu_a").show();
	})
	$(".header_wu").mouseout(function(){
		$(this).children(".header_wu_a").hide();
	})
})

$(document).ready(function(){
$(".header_wu").mouseover(function(){
		$(this).children(".header_wu_aa").show();
	})
	$(".header_wu").mouseout(function(){
		$(this).children(".header_wu_aa").hide();
	})
})
$(document).ready(function(){
$(".header_wu").mouseover(function(){
		$(this).children(".header_wu_aaa").show();
	})
	$(".header_wu").mouseout(function(){
		$(this).children(".header_wu_aaa").hide();
	})
})


$(document).ready(function(){
$(".header_liu").mouseover(function(){
		$(this).children(".panel").show();
	})
	$(".header_liu").mouseout(function(){
		$(this).children(".panel").hide();
	})
})


$(document).ready(function(){
$(".header_qi").mouseover(function(){
		$(this).children(".header_qi_xia").show();
	})
	$(".header_qi").mouseout(function(){
		$(this).children(".header_qi_xia").hide();
	})
})


$(document).ready(function(){
$(".nav_three").mouseover(function(){
		$(this).children(".nav_three_1").show();
	})
	$(".nav_three").mouseout(function(){
		$(this).children(".nav_three_1").hide();
	})
})


$(document).ready(function(){
$(".wrap_two").mouseover(function(){
		$(this).children(".wrap_two_xia").show();
	})
	$(".wrap_two").mouseout(function(){
		$(this).children(".wrap_two_xia").hide();
	})
})