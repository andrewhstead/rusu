/* Code for menu toggle function used in mobile view.*/
function menuToggle(section) {
	
	var menu = document.getElementsByClassName("toggle-items");

	for (var i = 0; i < menu.length; i++) {
		menu[i].classList.toggle("menu-items");
	}
		
}

/* Code for image fader in page title.*/

/* Variable set to 0 to ensure the slideshow starts with the first photo in the array. Initial value set outside the function so as not to interfere with incremented value when the function is running. */
var currentImage = 0;

/* Function to run the image slider. */
function imageFader() {
	
	/* Create an array containing all the slider image elements. */
	var imageFader = document.getElementsByClassName("fader-image");

	/* Hide each element by giving it the class 'hiddenContent'and ensuring no elements have the class 'blockContent'. */
	for (var i = 0; i < imageFader.length; i++) {
		imageFader[i].classList.add("hidden-content");
		imageFader[i].classList.remove("block-content");
	}

	/* If the currentImage variable has passed the end of the array, return it to the beginning. */
	if (currentImage >= imageFader.length) {
		currentImage = 0;
	}

	/* Display the current image by removing the class 'hiddenContent'. Add the class 'blockContent' to ensure that the image displays as a block element. */
	imageFader[currentImage].classList.remove("hidden-content");
	imageFader[currentImage].classList.add("block-content");
	
	/* Increment the currentImage variable in preparation for the next transition. */
	currentImage++;
}

/* Run the function on page load and then again at 5 second intervals. */
imageFader();
setInterval(imageFader,5000);
