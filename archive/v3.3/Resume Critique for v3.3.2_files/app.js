function getResumeFile(){
	document.getElementById("resume_file").click();
	$('#resume_file').show(function() {
		$('#upload_image').html('<img src="/images/lander/white_checkmark.png" />Got it!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
	});
}

function submitTags(field){
	$('#salary_form_box').load("/?action=uploadresume&salary="+encodeURI(field));
}


function sub(obj){
	var file = obj.value;
	var fileName = file.split("\\");
	document.getElementById("resume_upload_button").innerHTML = fileName[fileName.length-1];
	document.myForm.submit();
	event.preventDefault();
}


function loadcontent(page) {
	$('#content_loading_layer').show();
	$('#main_content').load('/?action='+page+'&nh=1',function() {
		$('#content_loading_layer').hide();
	});
	//ping_check.poll();
	void(0);
}

function submitresume(form) {
	$('#resume_loading_layer').show();
	var data = new FormData('#resume_form');
/*
	jQuery.each($('#resume_form')[0].files, function(i, file) {
		data.append('file-'+i, file);
	});
*/
	$.ajax({
		url: '/ajax/',
		data: data,
		cache: false,
		contentType: false,
		processData: false,
		type: 'POST',
		success: function(data){
			alert(data);
		}
	});
}

function getQuestionnaireFile(){
	document.getElementById("questionnaire_file").click();
	$('#questionnaire_file').show();
}

function submitquestionnairefile(form) {
	$('#questionnaire_file_loading_layer').show();
	var data = new FormData('#questionnaire_file_form');
	$.ajax({
		url: '/ajax/',
		data: data,
		cache: false,
		contentType: false,
		processData: false,
		type: 'POST',
		success: function(data){
			alert(data);
		}
	});
}

function submitcontent(form) {
	$('#content_loading_layer').show();
	$.post("/ajax/", $(form).serialize(), function(data){
	var result = $.parseJSON(data);
	$('#content_loading_layer').hide();
	if (result) {
		if (result.notifications) {
			for(var i=0; i < result.notifications.length; i++) {
				var notification = result.notifications[i];
					$.sticky(notification.message, {
						autoclose: (notification.autoclose)?autoclose:5000,
						position: (notification.position)?notification.position:'top-right',
						type: 'st-'+(notification.type)?notification.type:'success'
					});
				}
			}
			if (result.destination) {
				loadcontent(result.destination);
			}
		}
	});
	//ping_check.poll();
	void(0);
}

function submitlink(link) {
	$('#content_loading_layer').show();
	$.get("/ajax/?nh=1&action="+link, function(data){
		var result = $.parseJSON(data);
		$('#content_loading_layer').hide();
		if (result.notifications) {
			for(var i=0; i < result.notifications.length; i++) {
				var notification = result.notifications[i];
				$.sticky(notification.message, {
					autoclose: (notification.autoclose)?autoclose:5000,
					position: (notification.position)?notification.position:'top-right',
					type: 'st-'+(notification.type)?notification.type:'success'
				});
			}
		}
		if (result.destination) {
			loadcontent(result.destination);
		}
	});
	//ping_check.poll();
	void(0);
}

function getUploadFile(){
	document.getElementById("resume_file").click();
}
function sub(obj){
	var file = obj.value;
	var fileName = file.split("\\");
	document.getElementById("yourBtn").innerHTML = fileName[fileName.length-1];
	document.myForm.submit();
	event.preventDefault();
}

/* Scroll Up */
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
 
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});
});


/* jquery jcarousel */
/*
jQuery(document).ready(function() {
	jQuery('#mycarousel').jcarousel();
});
	
jQuery(document).ready(function() {
	jQuery('#mycarouseltwo').jcarousel();
});
*/
	

