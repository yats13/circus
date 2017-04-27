$(document).ready(function(){

	var screen_w = $(window).width();
	var all_news_w = 0;

	// NEWS MOBILE SLIDER
	if (screen_w <= 480) {

		var news_w = $("#mobile_news_slider").find('.new').width();
		var news = $("#mobile_news_slider").find('.new');
		var mob_slider = $("#mobile_news_slider");

		$(news).each(function(index, el) {
			all_news_w += $(el).width();
		});
		
		$(document).on('click', '.right_arrow, .left_arrow', function(event) {

			var side = $(this).attr('data-side');
			var slide_margin = parseInt(mob_slider.css('margin-left'),10);

			if (side == "right") {
				slide_margin += -news_w;
			}else{
				slide_margin -= -news_w;
			}
			
			if (slide_margin <= 0 ) {
				if (slide_margin <= (-all_news_w+news_w)) {
					$(mob_slider).css('margin-left', '0px');
				}else{
					$(mob_slider).css('margin-left', slide_margin + 'px');
				}
			}
		});

	}






	// if (screen_w <= 768) {


	// 	$('.multiple-items').slick({
	// 	  infinite: true,
	// 	  slidesToShow: 3,
	// 	  slidesToScroll: 3
	// 	})



	// }

	//anymation about circus
	$(".block_btn").each(function(index, el) {

		var block_left = parseInt($(el).css('left'));
		var block_w = parseInt($(el).width());

		var marg_left = block_w + (block_left*2);

		$(el).find('.under_line')
		.css('width', marg_left+'px')
		.css('left', (-marg_left-block_left)+'px');

	});


	$(".block_inside").hover(function() {
		//mouse over
		var e = $(this);
		e.find(".under_line").css('left','-40px');
			
	}, function() {
		//mouse leave
		var e = $(this);
		var block_left = parseInt(e.find('.block_btn').css('left'));
		var block_w = parseInt(e.find('.under_line').width());
		e.find(".under_line").css('left', '-'+(block_w+block_left)+'px');
	});

	//anymation dictiponary

	$(".heading_btn").click(function(event) {

		var target = $(this);
		var state = target.attr('aria-expanded');
		var bord = target.parent().parent().parent();


		$("#accordion").find('.panel-default').each(function(index, el) {
			$(el).removeClass('accrodion_border_color');
			$(el).find('.heading_btn').removeClass('accordion_a_color');
		});

		if (state == "false") {

			bord.addClass('accrodion_border_color');
			target.addClass('accordion_a_color');
		}


	});


		//anymation vacancies

	$(".vac_heading_btn").click(function(event) {

		var target = $(this);
		var state = target.attr('aria-expanded'); // получаем состояние. Открыто или закрыто

		$('.glyphicon-minus').addClass('hidden');
		$('.glyphicon-plus').removeClass('hidden');
		

		if (state == "false") {

		target.siblings('.glyphicon').each(function(index, el) {

				if ($(el).hasClass('hidden')) {
					
					$(el).toggleClass('hidden');
				}else {
					$(el).toggleClass('hidden');
				}
				
		});
		}

		
	});


	// SORT ARTIST PROFESSION anim

	$('label').click(function(event) {

		var id = $(this).children('input').attr('id');

		$('.artist_prof').each(function(index, el) {
			var el_id = $(el).attr('data-id');

			if (id != 'all') {

				if (el_id != id) {
					$(el).slideUp('slow');
				} else {
					$(el).slideDown('slow');
				}
			} else {
				$(el).slideDown('slow');
			}

		});
	});


	// linck action TEST



	$('.logo a').click(function (e) {
        e.preventDefault();
        window.location = 'index.html';
    })

    $(".gen_nav_li").hover(function() {
        //mouse over
        $(this).addClass('open');

    }, function() {
        //mouse leave
        $(this).removeClass('open');
    });


    $(".gen_nav_li").click(function() {
        //mouse over
        var url= $(this).children('a').attr('href');
        window.location=url;

    });


	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
	});





// ARTISTS CARIUSEL

var car_wrap_w= $('.carousel-wrapp').each(function(index, el) {

		var count_items      = $(el).find('.single_artist').length,
			single_artist_w  = $(el).find('.single_artist').width(),
			title_w          = $('div .title').width(),
			center_wrap      = title_w - single_artist_w *2 ;	
			// console.log(title_w);
			// console.log(single_artist_w);
			// console.log(single_artist_w - title_w);	

			// console.log(center_wrap);


			$(el).find('.single_artist').each(function(index, el) {
				$(el).css('width', (single_artist_w *2)+'px');
			});
		
			

			single_artist_w  = $(el).find('.single_artist').width();

			var wrap_total_width = single_artist_w * count_items;
		
			//$(el).css('width', (wrap_total_width + 20) +'px');
			$(el).css({
				'width': (wrap_total_width + 20) +'px',
				'margin-left': center_wrap + 'px'
			});



	// console.log(single_artist_w - title_w);
});



$('.artist_prof .arr_left, .artist_prof .arr_right').click(function(event) {

	
	var single_artist_w  = $('.profs').find('.single_artist').width(),
		side             = $(this).attr('data-side'),
	 	el               = $(this).next('.carousel-wrapp'),
		all_w 			 = parseInt($(el).css('width'),10),
	    marg  			 = parseInt($(el).css('margin-left'),10),
	    speed			 = 300;


	if (side == "right") {
			marg += -single_artist_w;
		}else{
			marg -= -single_artist_w;
		}

		
		if (marg <= single_artist_w ) {
			if (marg <= (-all_w+single_artist_w)) {
				$(el).stop().animate({'margin-left': '0px'}, speed);
				
			}else{
				$(el).stop().animate({'margin-left': marg + 'px'}, speed);
			}
		}




});











// On swipe event
// $('.direction_carousel').on('mouseover', function(event, slick, direction){
//   console.log(slick);
//   // left
// });
//
// // On edge hit
// $('.direction_carousel').on('mouseover', function(event, slick, direction){
//   console.log(slick)
// });
//
// // On before slide change
// $('.direction_carousel').on('mouseover', function(event, slick, currentSlide, nextSlide){
//   console.log(slick);
// });

}) // end JQ.ready