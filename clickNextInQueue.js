$( document ).ready(function() {
	var emptyQueue = $('.discover_queue_empty');
	var newQueueButton = $('#refresh_queue_btn');
	if(emptyQueue.length > 0){
		var emptyQueueParagraph = emptyQueue[0].getElementsByTagName("P");
		if(emptyQueueParagraph.length > 0){
			var emptyQueueText = emptyQueueParagraph[0].innerText;
			if(emptyQueueText.indexOf("You have finished your list for today") == -1){
				if(newQueueButton){
					newQueueButton.click();
				}
			}
		}
	}
	
	var ageGate = $('.agegate_text_container.btns');
	if(ageGate.length > 0){
		var buttons = ageGate[0].getElementsByClassName('btn_medium');
		
		_.each(buttons, function(button){
			if(button.innerText.trim() == "Continue"){
				button.click();
			}
		});
	}
	
	var nextInQueueButton = $('.btn_next_in_queue');
	var keepClicking = true;
	var discovery_queue_header = $('.discovery_queue_winter_sale_cards_header');
	
	if(discovery_queue_header.length > 0){
		var header = discovery_queue_header[0];
		var subtext = discovery_queue_header[0].getElementsByClassName('subtext');
		if(subtext.length > 0){
			var textToRemove = "You can get ";
			var remainingCards = subtext[0].innerText.substr(textToRemove.length);
			
			if(isNaN(parseInt(remainingCards))){
				keepClicking = false;
				console.log("done");
			}
		}
	}
	
	if(keepClicking){
		if(nextInQueueButton){
			nextInQueueButton.click();
		}
	}
});