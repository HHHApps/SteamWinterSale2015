chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.storage.sync.get("steamAutoClicker", function (obj) {
		var storedValObj = obj.steamAutoClicker;
		var storedVal = storedValObj ? obj.steamAutoClicker.val : false;
		var disabled = !storedVal;
		
		var saveObj = {val: disabled};
		chrome.storage.sync.set({ 'steamAutoClicker': saveObj });
		
		updateIcon(disabled);
	});
});

function updateIcon(disabled) {
  if(disabled){
	chrome.browserAction.setIcon({path:"/images/disabledIcon48.png"});
  } else {
	chrome.browserAction.setIcon({path:"/images/enabledIcon48.png"});
  }
}