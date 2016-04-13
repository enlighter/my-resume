function checkEmailTalentInc(b) {
    var a = /^([A-Za-z0-9_\-\.\+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return (a.test(b))
}
var completed_message = (typeof getQueryString()["trans"] != "undefined");
var error_vals = {
    "0": "There seems to be a problem with your email address. Make sure it's valid to try again. If you still have problems, feel free to email your resume to <a href=\"mailto:contact@topresume.com\">contact@topresume.com<\/a> and we'll critique your resume that way.",
    "1": "The type of file you're trying to upload isn't supported by our resume critique system. Try uploading a Microsoft Word, PDF, or plain text file. If you still have problems, feel free to email your resume <a href=\"mailto:contact@topresume.com\">contact@topresume.com<\/a> and we'll critique you that way.",
    "2": "That resume appears to be empty or too small to be critiqued. If this is a real resume and you think there might be a problem, please email your resume to <a href=\"mailto:contact@topresume.com\">contact@topresume.com<\/a> and we'll critique your resume that way.",
    "3": "It appears we may have already critiqued your resume before. If you think there might be a mistake, please email <a href=\"mailto:contact@topresume.com\">contact@topresume.com<\/a> and we'll help you out right away!",
    "4": "It appears we may have already critiqued your resume before. If you think there might be a mistake, please email <a href=\"mailto:contact@topresume.com\">contact@topresume.com<\/a> and we'll help you out right away!",
    "5": "It appears we may have already critiqued a resume with your email address before. If you think there might be a mistake or would like a different critique, please email your resume to <a href=\"mailto:contact@topresume.com\">contact@topresume.com<\/a> and we'll help you out right away!",
    "6": "It appears we may have already critiqued a resume with your email address before. If you think there might be a mistake or would like a different critique, please email your resume to <a href=\"mailto:contact@topresume.com\">contact@topresume.com<\/a> and we'll help you out right away!",
    "7": "It appears we may have already critiqued a resume with your email address before. If you think there might be a mistake or would like a different critique, please email your resume to <a href=\"mailto:contact@topresume.com\">contact@topresume.com<\/a> and we'll help you out right away!",
    "8": "We seem to have a problem with the file you tried to upload. If you think the file is fine and we made a mistake, please email your resume to <a href=\"mailto:contact@topresume.com\">contact@topresume.com<\/a> and we'll critique your resume that way.",
    "9": "We seem to have a problem with the file you tried to upload. If you think the file is fine and we made a mistake, please email your resume to <a href=\"mailto:contact@topresume.com\">contact@topresume.com<\/a> and we'll critique your resume that way."
};
var error_message = (typeof getQueryString()["widget_err"] != "undefined");
jQuery(document).ready(function() {
    setupAnalytics();
    writeHTMLForm();
    if (error_message) {
        displayError(getQueryString()["widget_err"] - 1);
    }
    jQuery("#btn_next_bot").click(function() {
        if (jQuery.trim(jQuery("#Email").val()) == "" && !0) {
            alert("Please enter your Email Address.");
        } else {
            if (checkEmailTalentInc(jQuery("#Email").val())) {
                if (jQuery.trim(jQuery("#critique_file_upload").val()) == "") {
                    alert("Please select a file for us to critique.")
                } else {
                    jQuery('form#f_pl').submit();
                }
            } else {
                alert("You must enter a valid e-mail address before continuing.")
            }
        }
    });
});

function getQueryString() {
    var b = {},
        d = location.search.substring(1),
        c = /([^&=]+)=([^&]*)/g,
        a;
    while (a = c.exec(d)) {
        b[decodeURIComponent(a[1])] = decodeURIComponent(a[2])
    }
    return b
};

function displayError(error_num) {
    jQuery("#widget_error").html(error_vals[error_num]);
    jQuery("#widget_error").removeClass('invisible');
    jQuery("p.chooser").addClass('error_ver');
}

function setupAnalytics() {}

function writeHTMLForm() {
    if (completed_message == false) {
        jQuery('#getstarted_form').html("<img src=\"https:\/\/widgets.talentinc.com\/critique\/v1\/pl_dot.php?ref=onsiteuploadwidget&url=\" width=\"1\" height=\"1\" style=\"position:absolute;top:0;left:0;\" \/>\r\n<form action=\"https:\/\/widgets.talentinc.com\/critique\/v1\/submit.php\" method=\"post\" enctype=\"multipart\/form-data\" name=\"f_pl\" id=\"f_pl\">\r\n\t<input type=\"hidden\" name=\"scriptURL\" value=\"\" \/>\r\n\t<p id=\"widget_error\" class=\"invisible error\"><\/p>\r\n\t<span class=\"widgetFormWrapper\">\r\n\t\t<span class=\"giantArrowUpload\"><\/span>\r\n\t\t<label class=\"formLabel\" for=\"critique_file_upload\">\r\n\t\t    Attach Your Resume\r\n\t\t<\/label>\r\n\t\t<span class=\"fieldWrapper\">\r\n\t\t\t<input type=\"text\" class=\"\" id=\"uploadFile\" placeholder=\"Choose File\" disabled=\"disabled\" \/>\r\n\t\t\t<input type=\"file\" class=\"upload\" id=\"critique_file_upload\" value=\"upload\" name=\"critique_file_upload\" \/>\r\n\t\t\t<div class=\"button greyButton\">\r\n\t\t\t\tBrowse\r\n\t\t\t\t\t<script type=\"text\/javascript\">\r\n\t\t\t\t\t\tdocument.getElementById(\"critique_file_upload\").onchange = function () {\r\n\t\t\t\t\t\tdocument.getElementById(\"uploadFile\").value = this.value.replace(\"C:\\\\fakepath\\\\\", \"\");\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t<\/script>   \t\r\n\t\t\t<\/div>\r\n\t\t<\/span>\r\n\t<\/span>\r\n\t<span class=\"widgetFormWrapper\">\r\n\t\t<label class=\"formLabel\" for=\"Email\">\r\n\t\t\tSelect Your Target Salary\r\n\t\t<\/label>\r\n\t\t<div id=\"salary_form_box\">\r\n\t\t\t<span class=\"selectStyle\" style=\"width:100%;\">\r\n\t\t\t\t<select name=\"expected_salary\" id=\"expected_salary\" class=\"form_text\" style=\"width:100%;\">\r\n\t\t\t\t\t<option value=\"\">-- Expected Salary --<\/option>\r\n\t\t\t\t\t<option value=\"$0-50,000\">Under $50,000 per year<\/option>\r\n\t\t\t\t\t<option value=\"$50,000-$75,000\">$50,000-75,000<\/option>\r\n\t\t\t\t\t<option value=\"$75,000-100,000\">$75,000-100,000<\/option>\r\n\t\t\t\t\t<option value=\"$100,000-150,000\">$100,000-150,000<\/option>\r\n\t\t\t\t\t<option value=\"$150,000 and over\">Over $150,000<\/option>\r\n\t\t\t\t<\/select>\r\n\t\t\t<\/span>\r\n\t\t<\/div>\r\n\t<\/span>\r\n\t<span class=\"widgetFormWrapper\">\r\n\t\t<label class=\"formLabel\" for=\"Email\">\r\n\t\t\tEnter Your Email Address\r\n\t\t<\/label>\r\n\t\t<span class=\"fieldWrapper\">\r\n\t\t\t<input class=\"widgetEmailInput\" type=\"email\" id=\"Email\" name=\"Email\" placeholder=\"Email Address\" \/>\r\n\t\t<\/span>\r\n\t<\/span>\r\n\t<span class=\"widgetButtonWrapper\">\r\n\t\t<span id=\"btn_next_bot\" onclick=\"javascript:document.resume_form.submit();\" class=\"button\">Upload Now <span class=\"buttonArrow\"><\/span><\/span>\r\n\t\t<p id=\"upload-secureText\">Your Information is Secure<\/p>\r\n\t<\/span>\r\n\t<input type=\"hidden\" name=\"utm_source\" value=\"onsiteUploadWidget\" \/>\r\n\t<input type=\"hidden\" name=\"site\" value=\"TopResume\" \/>\r\n\t<input type=\"hidden\" name=\"partner_key\" value=\"MMf5rjBIO4ovd\" \/>\r\n\t<input type=\"hidden\" name=\"partner_url\" value=\"\" \/>\r\n\t<input type=\"hidden\" name=\"affiliate_id\" value=\"\" \/>\r\n<\/form>");
    } else {
        jQuery('#getstarted_form').html("<link rel=\"stylesheet\" href=\"css\/_v2\/module-postUpload-article.css\" type=\"text\/css\" \/>\r\n<div class=\"modalMaskArticle maskingModal\">\r\n\t<div class=\"leaderNoticeWrapperArticle\">\r\n\t\t<div class=\"leaderNoticeArticle\">\r\n\t\t\t<div class=\"modalHeaderArticle\">\r\n\t\t\t\t<h2>Your Resume was succesfully uploaded!<\/h2>\r\n\t\t\t\t<p>Your critique will be sent within the next few days.<\/p>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"modalArticleContainer\">\r\n\t\t\t\t<p class=\"modalActionArticle\">Ready to take action now?<\/p>\r\n\t\t\t\t<div class=\"modalArticle\">\r\n\t\t\t\t  <img src=\"\/images\/articles\/content\/two-words-damaging-your-resumes-effectiveness.jpg\" title=\"Two words Damaging Your Resume\'s Effectiveness\" alt=\"Two words Damaging Your Resume\'s Effectiveness\">\r\n\t\t\t\t  <div class=\"modalArticleTeaser\">\r\n\t\t\t\t\t<h3>Two Words Damaging Your Resume\'s Effectiveness<\/h3>\r\n\t\t\t\t\t<p>Every job seeker wants to be thought of as successful and capable of producing\r\n\t\t\t\t\tresults. The problem is <span>they think that by using these two words on their resumes\r\n\t\t\t\t\t(especially in their career summaries) they\'ve communicated this to potential\r\n\t\t\t\t\temployers. What two words am I referring to?<\/span>\r\n\t\t\t\t\t<a href=\"http:\/\/www.topresume.com\/?action=two-words-damaging-your-resumes-effectiveness\" target=\"_blank\">Read more...<\/a>\r\n\t\t\t\t\t<\/p>\r\n\t\t\t\t  <\/div>\r\n\t\t\t\t<\/div>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"modalFooterArticle\">\r\n\t\t\t\t<div class=\"modalSocialArticle\">\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a class=\"facebook\" href=\"https:\/\/www.facebook.com\/WeAreTopResume\" target=\"_blank\">Facebook<\/a>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a class=\"twitter\" href=\"http:\/\/twitter.com\/WeAreTopResume\" target=\"_blank\">Twitter<\/a>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a class=\"linkedin\" href=\"https:\/\/www.linkedin.com\/company\/topresume\" target=\"_blank\">Linked In<\/a>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t<\/ul>\r\n\t\t\t\t<\/div>\r\n\t\t\t<\/div>\r\n\t\t<\/div>\r\n\t<\/div>\r\n<\/div>");
    }
}