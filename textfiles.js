/*******************************/
/* EVENT LISTENER MANIPULATION */
/*******************************/

/*	Adds an event listener to a button (or other clickable element), attaching 
	it to both "click" and "keyup" events (for use with keyboard navigation).
	Optionally also attaches the listener to the 'mousedown' event, making the 
	element activate on mouse down instead of mouse up. */
Element.prototype.addActivateEvent = function(func, includeMouseDown) {
	let ael = this.activateEventListener = (event) => { if (event.button === 0 || event.key === ' ') func(event) };
	if (includeMouseDown) this.addEventListener("mousedown", ael);
	this.addEventListener("click", ael);
	this.addEventListener("keyup", ael);
}

/*	Removes event listener from a clickable element, automatically detaching it
	from all relevant event types. */
Element.prototype.removeActivateEvent = function() {
	let ael = this.activateEventListener;
	this.removeEventListener("mousedown", ael);
	this.removeEventListener("click", ael);
	this.removeEventListener("keyup", ael);
}

/***********/
/* HELPERS */
/***********/

function selectElementContents(element) {
	var range = document.createRange();
	range.selectNodeContents(element);
	var selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
}

function copyTextToClipboard(string) {
	let scratchpad = document.querySelector("#scratchpad");
	scratchpad.value = string;
	scratchpad.select();
	document.execCommand("copy");
}

function setMessage(string) {
	document.querySelector("#controls .message").innerText = string;
}
