$(() => {
	let $hamburger = $('.header__hamburger');
	let $mobileMenu = $('.header__mobile-menu');

	$hamburger.on('click', (e) => {
		e.stopPropagation();

		if ($mobileMenu.is(':hidden')) {
			$mobileMenu.show();
			$hamburger.hide();
		} else {
			$mobileMenu.hide();
			$hamburger.show();
		}
	});

	$mobileMenu.on('click', (e) => {
		e.stopPropagation();
	});

	$(document).on('click', () => {
		$mobileMenu.hide();
		$hamburger.show();
	});
});
