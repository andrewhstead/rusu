function menuToggle(section) {
	
	var menu = document.getElementsByClassName("toggle-items");

	for (var i = 0; i < menu.length; i++) {
		menu[i].classList.toggle("menu-items");
	}
		
}
