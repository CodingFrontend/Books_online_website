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

