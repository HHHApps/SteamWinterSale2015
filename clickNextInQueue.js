/* This content script helps make sure it auto-runs every
	time you go to the steam store domain. */
$( document ).ready(function() {
	var emptyQueue = $('.discover_queue_empty');
	if(emptyQueue.length == 0){
		var newQueueButton = $('#refresh_queue_btn');
		var nextInQueueButton = $('.btn_next_in_queue');
		var discovery_queue_header = $('.discovery_queue_winter_sale_cards_header');
		var cardCount = discovery_queue_header.length > 0 ? parseInt(discovery_queue_header[0]) : 1;
		
		var ageGate = $('.agegate_text_container.btns');
		if(ageGate.length > 0){
			var buttons = ageGate[0].getElementsByClassName('btn_medium');
			
			_.each(buttons, function(button){
				if(button.innerText.trim() == "Continue"){
					button.click();
				}
			});
		}
		if(!cardCount % 3 === 0){
			if(newQueueButton){
				newQueueButton.click();
			}
			if(nextInQueueButton){
				nextInQueueButton.click();
			}
		}
	}
});