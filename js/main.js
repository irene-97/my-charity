'use strict';

svg4everybody();

(function() {
	var iterate = function iterate(items, callback) {
		items.forEach(function(item) {
			var key = void 0;
			var value = void 0;

			if (typeof item === 'string') {
				key = item;
				value = item;
			} else {
				key = item[0];
				value = item[1];
			}

			callback(key, value);
		});
	};

	var check = function check(category, items) {
		iterate(items, function(key, value) {
			if (bowser[key]) {
				$(document.documentElement).addClass('is-' + category + '-' + value);
			}
		});
	};

	check('engine', ['webkit', 'blink', 'gecko', ['msie', 'ie'],
		['msedge', 'edge']
	]);

	check('device', ['mobile', 'tablet']);

	check('browser', ['chrome', 'firefox', ['msie', 'ie'],
		['msedge', 'edge'], 'safari', 'android', 'ios', 'opera', ['samsungBrowser', 'samsung'], 'phantom', 'blackberry', 'webos', 'silk', 'bada', 'tizen', 'seamonkey', 'sailfish', 'ucbrowser', 'qupzilla', 'vivaldi', 'sleipnir', 'kMeleon'
	]);

	check('os', ['mac', 'windows', 'windowsphone', 'linux', 'chromeos', 'android', 'ios', 'iphone', 'ipad', 'ipod', 'blackberry', 'firefoxos', 'webos', 'bada', 'tizen', 'sailfish']);
})();

var $window = $(window);
var $document = $(document);
var $html = $(document.documentElement);
var $body = $(document.body);

$(function() {
	var $hamburger = $('.header__hamburger');
	var $mobileMenu = $('.header__mobile-menu');

	$hamburger.on('click', function(e) {
		e.stopPropagation();

		if ($mobileMenu.is(':hidden')) {
			$mobileMenu.show();
			$hamburger.hide();
		} else {
			$mobileMenu.hide();
			$hamburger.show();
		}
	});

	$mobileMenu.on('click', function(e) {
		e.stopPropagation();
	});

	$(document).on('click', function() {
		$mobileMenu.hide();
		$hamburger.show();
	});
});
