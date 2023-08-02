var mouseY = 0, mouseX=0;
var popupCounter = 0;
var mouseReachedContent = false;

var localStorageKey = "eet_subscribe_survey_201907221";
var surveyList = {
	'title': "Looks like you are leaving",
	'list': [
		{
			"question": "Please tell us why so we can improve",
			"answer" : [
				"Don't have content I'm interested in",
				"Can't afford it right now",
				"I don't read newspaper",
				"The Epoch Times subscription is too expensive",
				"Your brand is unfamiliar to me",
				"Not suitable payment/billing options",
				"Don't have time to read newspaper",
				"Others"
				]
		}
	]
};
var surveyHTML = '<div id="survey_container"><div class="close"></div><div class="title"></div><ul class="que_box"></ul></div><div id="page_overlay"></div>';

localStorage = window.localStorage;
// if (localStorage.getItem(localStorageKey) == undefined) {
if (true) {
	document.addEventListener("mousemove", function(e) {
		mouseY = e.clientY;
		mouseX = e.clientX;

	    // This is to make sure that user moved mouse to the content part before
		if (mouseY > 200) {
	    	mouseReachedContent = true;
		}
	});

	document.addEventListener("mouseleave", function() {
		let percent_width = (window.innerWidth*10)/100;

	    if (mouseY < 100 && mouseX > percent_width && mouseReachedContent) {
	        if (popupCounter < 1) {
	        	show_survey();
	        	localStorage.setItem(localStorageKey, 'survey poped');
		        ga('send', 'event', 'Exit popup', 'Open');
	        }
	        popupCounter++;
	    }
	});
}

$('body').append(surveyHTML);
function show_survey() {
	$('body').css('overflow', 'hidden');
	$('#page_overlay').show();
	$('#survey_container').show();

	$('#survey_container .title').empty().append(surveyList.title);
	$('#survey_container .que_box').empty();
	var question_order = 0;
	surveyList.list.forEach(function(item) {
		question_order++;
		let que = '<li class="ques ' + question_order + '" style="z-index:' + (200 - question_order) + ';"><div class="question">' + item.question + '</div><ul class="ans_box">';
		let answer_order = 0;
		item.answer.forEach(function(answer) {
			answer_order++;
			que += '<li class="ans ' + answer_order + '"><input type="checkbox"><span class="checkbox"></span>' + answer + '</li>';
		});
		que += '</ul></li>';
		$('#survey_container .que_box').append(que);
	});
	$('#survey_container .que_box').append('<li class="ques thanks">Thank you for your feedback! <br/>Your opinion is incredibly important to us.</li>');

	$('.que_box li.ans input').change(function() {
		var that = $(this);
		setTimeout(function() {
			that.parents('li.ques').slideUp();
			console.log(that.parents('li.ans').attr('class'));
			console.log(that.parents('li.ques').attr('class'));
			ga('send', 'event', 'Exit popup', 'Question1', that.parents('li.ans').attr('class'));
		}, 400);
	});

	$('#page_overlay, #survey_container .close').on('click touched', function(e) {
		$('#page_overlay').hide();
		$('#survey_container').hide();
		$('body').css('overflow', 'auto');
	});
}
