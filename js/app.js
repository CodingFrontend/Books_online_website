var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
}

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();

if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}

// let all browsers support referring icons to external svg-file
svg4everybody({});
// 

//=================

//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}

// filter nouislider
$(document).ready(function () {
	const priceFilter = document.querySelector('.price-filter__slider');
	if (priceFilter) {
		noUiSlider.create(priceFilter, {
			start: [0, 100000],
			connect: true,
			tooltips: [wNumb({ decimals: 0, thousand: ' ' }), wNumb({ decimals: 0, thousand: ' ' })],
			range: {
				'min': 0,
				'max': 200000
			}
		});

		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');


		priceStart.addEventListener('change', function () {
			priceFilter.noUiSlider.set([priceStart.value, null]);
		});
		priceEnd.addEventListener('change', function () {
			priceFilter.noUiSlider.set([null, priceEnd.value]);
		});
	}
});
//

if (isMobile.any()) {
	const filterTitle = document.querySelector('.filter__title');
	if (filterTitle) {
		filterTitle.addEventListener('click', function (e) {
			filterTitle.classList.toggle('_active');
			_slideToggle(filterTitle.nextElementSibling);
		});
	}
}

//SlideToggle
var _slideUp = function _slideUp(target) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(function () {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
};

var _slideDown = function _slideDown(target) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
	target.style.removeProperty('display');
	var display = window.getComputedStyle(target).display;
	if (display === 'none') display = 'block';
	target.style.display = display;
	var height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(function () {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
};

var _slideToggle = function _slideToggle(target) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');

		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
};
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
//
//Spollers
let spollers = document.querySelectorAll("._spoller");
if (spollers.length > 0) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		spoller.addEventListener("click", function (e) {
			if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
				return false;
			}
			if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
				return false;
			}
			if (spoller.closest('._spollers').classList.contains('_one')) {
				let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
				for (let i = 0; i < curent_spollers.length; i++) {
					let el = curent_spollers[i];
					if (el != spoller) {
						el.classList.remove('_active');
						_slideUp(el.nextElementSibling);
					}
				}
			}
			spoller.classList.toggle('_active');
			_slideToggle(spoller.nextElementSibling);
		});
	}
}
//

// agree checkbox
window.addEventListener("DOMContentLoaded", function (e) {

	var myForm = document.getElementById("popupForm");
	if (myForm) {
		var checkForm = function (e) {
			if (!this.terms.checked) {
				alert("Please indicate that you accept the Terms and Conditions");
				this.terms.focus();
				e.preventDefault(); // equivalent to return false
				return;
			}
		};

		// attach the form submit handler
		myForm.addEventListener("submit", checkForm, false);

		var myCheckbox = document.getElementById("agree");
		var myCheckboxMsg = "Please indicate that you accept the Terms and Conditions";

		// set the starting error message
		myCheckbox.setCustomValidity(myCheckboxMsg);

		// attach checkbox handler to toggle error message
		myCheckbox.addEventListener("change", function (e) {
			this.setCustomValidity(this.validity.valueMissing ? myCheckboxMsg : "");
		}, false);
	}

}, false);
//

// popup
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 300;

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener('click', function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let i = 0; i < popupCloseIcon.length; i++) {
		const el = popupCloseIcon[i];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		})
	}
}

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__body')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	//   проверяем поддержку
	if (!Element.prototype.closest) {
		//  реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();

//Полифилы
(function () {
	//   проверяем поддержку
	if (!Element.prototype.matches) {

		//  определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
//


// show more - show less

let i = 0;

const toggleButton = () => {
	if (!i) {
		document.querySelector('.info-main__photos_more').style.display = "flex";
		document.querySelector('#toggleButton').innerHTML = "Меньше";
		document.querySelector('#toggleButton').classList.add('active');

		i = 1;
	} else {
		document.querySelector('.info-main__photos_more').style.display = "none";
		document.querySelector('#toggleButton').innerHTML = "Показать больше фото";
		document.querySelector('#toggleButton').classList.remove('active');
		i = 0;
	}
}

// 

$(window).resize(function (event) {
	adaptive_function();
});
function adaptive_topHeader(w, h) {
	let menuBody = $('.menu__body');
	let menuBottom = $('.menu-bottom');
	let topMenu = $('.top-header__menu ');
	let wishAmount = $('.wish-body__amount');
	let wishLabel = $('.wish-body__label');
	let wishIcon = $('.wish-body__icon');

	if (w < 479.98) {
		if (!menuBody.hasClass('done')) {
			menuBody.addClass('done').prependTo(menuBottom);
		}
	} else {
		menuBody.removeClass('done').appendTo(topMenu);
	}

	if (w < 799.98) {
		if (!wishAmount.hasClass('done')) {
			wishAmount.addClass('done').appendTo(wishIcon);
		}
	} else {
		wishAmount.removeClass('done').appendTo(wishLabel);
	}
}

function adaptive_cart(w, h) {
	let cartLabel = $('.cart-header__label');

	if (w < 799.98) {
		cartLabel.html("<span class='amount'>2</span>");
	} else {
		cartLabel.html("Your cart<span> (<span class='amount'>2</span> items)</span>");
	}

}

function adaptive_function() {
	let w = $(window).outerWidth();
	let h = $(window).outerHeight();
	adaptive_topHeader(w, h);
	adaptive_cart(w, h);
}

adaptive_function();


//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

if (document.querySelector('.slider-top')) {
	let headerSlider = new Swiper('.slider-top__body', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		// pagination: {
		// 	el: '.products-slider__info',
		// 	type: 'fraction',
		// },
		// Arrows
		navigation: {
			nextEl: '.controls__arrow_next',
			prevEl: '.controls__arrow_prev',
		},
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 0,
		// 		autoHeight: true,
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 	},
		// 	900: {
		// 		slidesPerView: 3,
		// 	},
		// 	1100: {
		// 		slidesPerView: 4,
		// 	},
		// 	1180: {
		// 		slidesPerView: 5,
		// 	},
		// },
	});
};

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
