//ie10 & 11 via useragent detection

//this has been placed outside of the scope of the document-ready
//so that it happens before the document fully loads.
var ua = navigator.userAgent,
doc = document.documentElement;

if ((ua.match(/MSIE 10.0/i))) {
	doc.className = doc.className + " ie10";
} else if((ua.match(/rv:11.0/i))){
	doc.className = doc.className + " ie11";
}


$( document ).ready(function() {

	//dealing with hiding and showing navigation --
	//the actual animation is built through CSS
	$('.mobileNavOpen').on('click', function(e){
		$('body').toggleClass("navOpen");
		e.stopPropagation();
	});

	//nav waypoints
	var nav_container =     $(".navWaypoint");
	var nav =               $(".complexHeader");
	nav_container.waypoint({

		handler: function(direction) {
			$(nav).hide().toggleClass('condenseHead fixed').show();
			$('body').toggleClass('stickyFix');
		},
		offset: -60
	});

	//nav waypoints for pages without nav --
	//really, just anchor the header with the logo
	var noNav_container =   $(".noNavWaypoint");
	var noNav =             $(".noNavHeader");
	noNav_container.waypoint({

		handler: function(direction) {
			$(noNav).hide().toggleClass('noNavCondenseHead').show();
			$('body').toggleClass('stickyFix');
		},
		offset: -60
	});



	//scrolling to Call To Action icons
	$(".icon-cta").on("click", function( e ) {
		e.preventDefault();
		$("body, html").animate({
			scrollTop: $( $(this) ).offset().top - 50
		}, 600);
	});
	$(".leader-ga .outlineButton").on("click", function( e ) {
		e.preventDefault();
		$("body, html").animate({
			scrollTop: $( $('figure#ga-alert')).offset().top - 50
		}, 600);

	});

	//scrolling to Call To Action icons
	// **2/2/16** this is for the landing page only at this point.
	$(".objectCTA .button").on("click", function( e ) {
		e.preventDefault();
		$("body, html").animate({
			scrollTop: $( $('#fivePrettyGoodReasons') ).offset().top - 50
		}, 600);

	});

	//mobile checkout page objects. hide/show benefits
	$(".toggleObjBenefits").on("click", function( e ) {
		e.preventDefault();
		var self = $(this).parent();
		$(this).children('span').toggle();
		$(this).siblings('.objBenefits').toggle();
	});

	//legacy code for when there was a headline navigation in the critique
	$(".crit-navItem a, .scrollToLink").on("click", function( e ) {
		e.preventDefault();
		var target = this.hash;
		var $target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 50
		}, 600);
	});

	//extended nav toggling. as of 2/2/16, this has never been implemented
	$("#bc-menuButton").on("click", function( e ) {
		e.preventDefault();
		$('body').toggleClass('extendExtraNav');
	});

	//kill all the orphans. that's a typography joke.
	var modalTimeout;
	var noWrap = '.nw';
	$(noWrap).each(function() {
		$(this).html($(this).html().replace(/\s([^\s<]+)\s*$/, "&nbsp;$1"))
	});


	//BLOG CODE
	//truncate article headline length if it expands beyond the box
	$('.articleTitle').dotdotdot({
		ellipsis : '...'
	});
	$('.articleIntro').dotdotdot({
		ellipsis : '...'
	});

	//progressively slow-load article cards for effect
	$('.articleCardContainer').each(function(index){
		var self = this
		setTimeout(function () {
			$(self).addClass('alive');
		}, index*120);
	});

	//show question form on Ask Amanda
	$('.moreExpertQuestions').on("click", function(submitQuestion) {

		$('#askExpertForm').slideDown(700);
		$('html, body').animate({
			scrollTop: $("#askExpertForm").offset().top - 80
		}, 700);

	});
	//hide question form on Ask Amanda
	$('#closeQuestionForm').on("click", function() {
		$('#askExpertForm').slideUp(700);
	});
	//show thank-you message after submit
	$('#submitExpertQuestion').on("click", function() {
		$('.form_submitQuestion').hide();
		$('#thankYouMessage').fadeIn('slow');
	});
	//scroll to newsletter form from Ask Amanda Q&A CTA
	$('#subscribeAmanda').on('click', function () {
		$('html, body').animate({
			scrollTop: $("#articleCTA-newsletter").offset().top - 60
		}, 700);
	});
	//Ask Amanda accordion functionality
	$('.accordion-section').click(function(e) {
		if($(this).hasClass('.active')) {
			$(this).removeClass('active');
		}else {
			$('.accordion-section').removeClass('active');
			$(this).addClass('active');
		}
		e.preventDefault();
	});
	//Show and hide answers on Amanda's Corner Q&A
	//Not ideal, but working for initial launch
	$('.accordion-section-1').click(function() {
		$('#featuredAnswer-2, #featuredAnswer-3').hide();
		$('#featuredAnswer-1').css({"display": "inline-block"});
	});
	$('.accordion-section-2').click(function() {
		$('#featuredAnswer-1, #featuredAnswer-3').hide();
		$('#featuredAnswer-2').css({"display": "inline-block"});
	});
	$('.accordion-section-3').click(function() {
		$('#featuredAnswer-1, #featuredAnswer-2').hide();
		$('#featuredAnswer-3').css({"display": "inline-block"});
	});
	//On mobile, scroll to corresponding answer
	//Once backend set up in products, create function to capture class/id names and scroll
	$('.mobileAnswerGuide-1').click(function() {
		$('html, body').animate({
			scrollTop: $("#featuredAnswer-1").offset().top - 20
		}, 900);
	});
	$('.mobileAnswerGuide-2').click(function() {
		$('html, body').animate({
			scrollTop: $("#featuredAnswer-2").offset().top - 20
		}, 900);
	});
	$('.mobileAnswerGuide-3').click(function() {
		$('html, body').animate({
			scrollTop: $("#featuredAnswer-3").offset().top - 20
		}, 900);
	});
	//Article page scroll down to body
	$('#arrowDown').on('click', function () {
		$('html, body').animate({
			scrollTop: $(".articlePageBody").offset().top - 90
		}, 900);
	});



	// MODALS & CTA
	// When you have button to open a modal, add the class "openThatModal".
	// Create a wrapper around your modal, add the class "modalWrapper".


	$('.openThatModal').click(function(e) {
		e.preventDefault();
		//get the ID of the trigger, and remove a word.
		var hiddenModal = $(this).attr('id').toString().replace('Button', '');

		//open that modal
		var openModalPlease = $('#' + hiddenModal);
		$(openModalPlease).fadeIn(120);

		//by adding the class "modalOpen" -- you fade in the class "modalMask" via CSS
		$('body').addClass('modalOpen');
	});

	//close that modal. -- close the modal by clicking on the [x], or the mask
	$('.closeModal, .close, .modalMask, .closeLink').click(function(e) {
		e.preventDefault();
		$('body').removeClass('modalOpen');
		$('.modalWrapper').fadeOut(120);
	});


	//manage how header CTAs slide in and show on pages
	var header_cta = $(".headerCTA");
	var lastScrollTop = 660;

	$(window).scroll(function (event) {

		var st = $(this).scrollTop();
		if (st > 0) {
			if (st > lastScrollTop) {
				// downscroll code
				setTimeout(function () {
					$(header_cta).addClass('slideFromTop');
				}, 650);

			} else {
				// uproll code
				$(header_cta).removeClass('slideFromTop');
				setTimeout(function () {
					$(header_cta).addClass('slideFromTop');
				}, 5000);
			}
		}
		lastScrollTop = st;
	});






	//download file via iframe
	//to institute this, use the following in your JS
	// downloadURL('download.php?file=FILENAME')

	////View More articles in Media Room
	////Show 6 on load, button click loads 6 more
	$('.mediaListItem:gt(5)').hide();
	$('.viewMore').click(function() {
		var last = $('.mediaList').children('.mediaListItem:visible:last');
		last.nextAll(':lt(6)').show();

		if ( !$('.mediaListItem:hidden').length ) {
	  		// Hide View More button if all mediaListItem divs visible
	  		$('.viewMore').hide();
	  		$('.backToTop').css('display', 'block');
	  	};
	  });
	//Landing Page 1602 - View package details
	$('.moreDetailsLink').click(function() {
		$('.objBenefits').css('display', 'block');
		$('.packageOptionContainer').css('vertical-align', 'top');
		$('#topPackage_one, #topPackage_three').css('margin-top', '50px');
		$('.moreDetailsLink').css('display', 'none');
	})









	//Landing Page 1602 - fixed header CTA on scroll
	var lpShowCTA = true;
	var lpPackageButton = $('#packageOptions .packageOptionCTA');


	var header_container =     $("#education-top, .chopstop");
	var header =               $("#fixedHeader");
	var header_stopper   =     $("#landing-dp-bottomCTA");

	header_container.waypoint({
		handler: function(direction) {
			if(direction === 'down') {
				$(header).slideDown(120);
			}
			if(direction === 'up') {
				$(header).slideUp(120);
			}
		},
		offset: 60
	});
	header_stopper.waypoint({
		handler: function(direction) {
			if(direction === 'down') {
				$(header).slideUp(120);
				$(header).css('display', 'inherit');
			}
			if(direction === 'up') {
				$(header).slideDown(120);
				$(header).css('display', 'block');
			}
		},
		offset: 60
	});

	//When click leader CTA, var is false
	$('#leaderButton, #choosePackage_two, #choosePackage_one').click(function() {
		lpShowCTA = false;
		console.log(lpShowCTA);
		header_container.waypoint('destroy');
		$(header).css('display', 'none');
	});

});








	var nextArticle = $(".nextArticleCTA");
	var nextArticleTrigger = $("#aboutAuthor h3 span");

	var articlePage = $('.articlePageBody');
	var shareIcons = $('.articleShareIcons');


//waypoints: next article slide from right @ article pages
$(nextArticleTrigger).waypoint({
	offset: 'bottom-in-view',
	handler: function(direction) {
		$(nextArticle).toggleClass('fixRight');
		// console.log('fired');
	}
});
// waypoints: next article slide from right, fix to bottom @ article pages
$(articlePage).waypoint({
	offset: 'bottom-in-view',
	handler: function(direction) {
		$(nextArticle).toggleClass('absoluteBottom');
	}
});

//waypoints: social media icons @ left side of article
$(articlePage).waypoint({
	offset: '110px',
	handler: function(direction) {
		$(shareIcons).toggleClass('stickShare');
	}
});
//waypoints: social media icons, fix to bottom @ end of left side of article
$('.bigSocialSharing').waypoint({
	offset: '390px',
	handler: function(direction) {
		$(shareIcons).toggleClass('stayPut');
	}
});
//if user hides "next article" CTA, never show it again for that page.
$('.close-nextArticle').click(function(e) {
	e.preventDefault();
	$('.nextArticleCTA').removeClass('fixRight');
	$('.nextArticleCTA').addClass('neverShow');
});
