
/************ Hamburger menu *************/

$(document).ready(function() {

	$( ".close-hamburger" ).hide();
	$( ".hamburger-menu-list" ).hide();
		$( ".hamburger" ).click(function() {
		$( ".hamburger-menu-list" ).slideToggle( "slow", function() {
		$( ".hamburger" ).hide();
		$( ".close-hamburger" ).show();
	});
});

	$( ".close-hamburger" ).click(function() {
	$( ".hamburger-menu-list" ).slideToggle( "slow", function() {
	$( ".close-hamburger" ).hide();
	$( ".hamburger" ).show();
});
});

});


/************** Accordion ******************/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	});
}
