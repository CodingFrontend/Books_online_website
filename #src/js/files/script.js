//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBottom = document.querySelector(".menu-bottom");
	iconMenu.addEventListener("click", function () {
		if (unlock) {
			body_lock(delay);
			this.classList.toggle("_active");
			menuBottom.classList.toggle("_active");
		}
	});
}

// Hide menu when clicked outside of it
window.addEventListener('click', function (event) {

	var menu = document.querySelector(".menu-bottom");
	let body = document.querySelector("body");
	let delay = 500;

	if (event.target.closest('.menu')) {
		return;
	} else if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
		// If user clicks outside the element, hide it
		menu.classList.remove("_active");
		iconMenu.classList.remove("_active");
	}
});

//=================

// Categories icon, body and sublist toggle
(function () {
	// Categories icon and body toggle
	let categoriesIcon = document.querySelector(".categories__icon");
	let categoriesBody = document.querySelector(".categories__body");
	let categoriesList = document.querySelector('.categories__list');
	let categoriesLinks = categoriesList.querySelectorAll('.categories__link');
	let categoriesSublists = document.querySelectorAll('.categories__sublist');

	if (categoriesIcon != null) {
		categoriesIcon.addEventListener("click", function (e) {
			this.classList.toggle("_active");
			_slideToggle(categoriesBody);
		});
	};

	// Categories sublist toggle
	function closeActive() {
		for (let index = 0; index < categoriesSublists.length; index++) {
			let categoriesSublist = categoriesSublists[index];

			if (window.getComputedStyle(categoriesSublist).display === 'block') {
				_slideUp(categoriesSublist);
			}
		}
	}

	for (let i = 0; i < categoriesLinks.length; i++) {
		let categoriesLink = categoriesLinks[i];
		categoriesLink.addEventListener('click', function (e) {

			let parentLink = categoriesLink.parentNode;
			let categoriesSublist = parentLink.querySelector('.categories__sublist');
			e.preventDefault();

			closeActive();

			if (window.getComputedStyle(categoriesSublist).display === 'none') {
				_slideDown(categoriesSublist);
			}
			e.stopPropagation();
		});
	}

	//   close categories body when clicking outside of it
	if (isMobile.any()) {
		window.addEventListener('click', function (event) {
			let categoriesIcon = document.querySelector(".categories__icon");
			let categoriesBody = document.querySelector(".categories__body");

			if (event.target.closest('.categories')) return;
			// If user clicks outside the element, hide it!
			_slideUp(categoriesBody);
			categoriesIcon.classList.remove("_active");
		});
	}
})();
//=================

// Footer menu sublist toggle
if (isMobile.any()) {
	let footerList = document.querySelector('.top-footer__list');
	let footerLinks = footerList.querySelectorAll('.top-footer__link');
	let footerSublists = document.querySelectorAll('.top-footer__sublist');


	function closeActive() {
		for (let index = 0; index < footerSublists.length; index++) {
			let footerSublist = footerSublists[index];

			if (window.getComputedStyle(footerSublist).display === 'block') {
				_slideUp(footerSublist);
			}
		}
	}

	for (let i = 0; i < footerLinks.length; i++) {
		let footerLink = footerLinks[i];
		footerLink.addEventListener('click', function (e) {
			let parentLink = footerLink.parentNode;
			let footerSublist = parentLink.querySelector('.top-footer__sublist');
			e.preventDefault();

			closeActive();

			if (window.getComputedStyle(footerSublist).display === 'none') {
				_slideDown(footerSublist);
			}
			e.stopPropagation();
		});
	}

	//   close active sublist when clicking outside of top footer
	window.addEventListener('click', function hideFooter(event) {
		if (event.target.closest('.top-footer')) return;
		closeActive();
	});
}
//=================