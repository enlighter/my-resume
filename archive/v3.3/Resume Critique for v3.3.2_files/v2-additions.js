$( document ).ready(function() {

	//parallax scrolling 
	$.event.add(window, "scroll", function() {
	    var p = $(window).scrollTop();
	 	//homepage scrolling
	    // $(".leaderMessageIndex").css("top", +(p * .15).toFixed(2) + "px");      

	    //casestudy scrolling
		// $(".caseStudyImage").css("top", -(p * .27).toFixed(2) + "px");
		// $(".vignetteCaseStudy").css("top", -(p * .40).toFixed(2) + "px");
		// $(".leaderMessage").css("top", -(p * .6).toFixed(2) + "px");        

	});	

	//casestudy waypoints
	var caseStudyData = 	$("#cs-atAGlance");
	var waypointSpot = 		$("#cs-packageContains");

	$(caseStudyData).waypoint('sticky', {

	  wrapper: '<div class="sticky-wrapper" />',
	  offset: -100,

	  handler: function(direction) {
	  		$(caseStudyData).hide().toggleClass('fixed').fadeIn(60);
			$('body').toggleClass('fixedData'); 
		}
	});




	$('.openModal').on('click', function(e){

		$('body').addClass("maskOpen");
		
		$("#oldResume").owlCarousel({
			singleItem: true,
			addClassActive : true,
			lazyLoad : true,
			navigation : true,
			navigationText : ["<span class='owlPrev'><img src='images/_v2/nav-prev.svg' /></span>","<span class='owlNext'><img src='images/_v2/nav-next.svg' /></span>"],
			rewindNav : true,
			slideSpeed : 160,
			paginationSpeed : 450,
			rewindSpeed : 650
		});

		$("#newResume").owlCarousel({
			singleItem: true,
			addClassActive : true,
			lazyLoad : true,
			navigation : true,
			navigationText : ["<span class='owlPrev'><img src='images/_v2/nav-prev.svg' /></span>","<span class='owlNext'><img src='images/_v2/nav-next.svg' /></span>"],
			rewindNav : true,
			slideSpeed : 160,
			paginationSpeed : 450,
			rewindSpeed : 650
		});
		e.stopPropagation();

	});

	$('.closeMask').on('click', function(e){
		$('body').removeClass("maskOpen");
	    e.stopPropagation();
	});


	$('.arrowHack').mouseover(function(e) {
		$('.owl-controls').delay(120).css('z-index', '9999');
		 e.stopPropagation();
	});

	$('.owl-next, .owl-prev, .owl-pagination').mouseleave(function(e) {
		$('.owl-controls').delay(120).css('z-index', '-1');
		 e.stopPropagation();
	});

	$(".nw, .objBenefits li").each(function() {
        $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/, "&nbsp;$1"))
    });

});
