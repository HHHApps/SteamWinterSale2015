$( document ).ready(function() {
	chrome.storage.sync.get("steamAutoClicker", function (obj) {
		var disabled = !obj.steamAutoClicker ? false : obj.steamAutoClicker.val;
		
		if(!disabled){
			var emptyQueue = $('.discover_queue_empty');
			var newQueueButton = $('#refresh_queue_btn');
			var nextInQueueButton = $('.btn_next_in_queue');
			var keepClicking = true;
			var discovery_queue_header = $('.discovery_queue_winter_sale_cards_header');
			var emptyQueueDisplayed = true;
			
			if(emptyQueue.length > 0){
				var display = emptyQueue[0].style.display;
				if(display == "none"){
					emptyQueueDisplayed = false;
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
			
			
			if(discovery_queue_header.length > 0){
				var header = discovery_queue_header[0];
				var subtext = discovery_queue_header[0].getElementsByClassName('subtext');
				if(subtext.length > 0){
					var textToRemove = "You can get ";
					var remainingCards = subtext[0].innerText.substr(textToRemove.length);
					
					if(isNaN(parseInt(remainingCards))){
						keepClicking = false;
					}
				}
			}
			
			if(keepClicking){
				if(nextInQueueButton){
					nextInQueueButton.click();
				}
			}
			
			if(newQueueButton && !emptyQueueDisplayed){
				newQueueButton.click();
			}
		}
	});
});