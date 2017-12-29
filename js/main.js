$(document).ready(function () {





	var firstScreenRight = $(".firstScreen__right");
	var mainMenu = $(".mainMenu");
	$(mainMenu).hide();

	// Гамбургер еже
	(function () {

		"use strict";

		var toggles = document.querySelectorAll(".c-hamburger");

		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};

		function toggleHandler(toggle) {
			toggle.addEventListener("click", function (e) {
				e.preventDefault();
				if (this.classList.contains("is-active") === true) {
					this.classList.remove("is-active");
					$(mainMenu).removeClass('activeMenu fadeInRight animated');
					$(mainMenu).addClass('fadeOutRight animated');
					$(firstScreenRight).fadeIn();
					$(mainMenu).css("display", "block");
					setTimeout(function () {
						$(mainMenu).css("display", "none");

					}, 1000);



				} else {
					this.classList.add("is-active");
					$(mainMenu).removeClass(' fadeOutRight animated');
					$(firstScreenRight).hide();
					$(mainMenu).addClass('activeMenu fadeInRight animated');
				}

			});
		}

	})();


	// ***********************************************
});
