(function() {
	'use strict';
	if (window.matchMedia) {
		const breakpoint = window.matchMedia('(min-width: 52.5em)');
		breakpoint.addListener(() => {
			const secondaryNavItems = document.querySelectorAll('nav li ul a');
			const checkbox = document.querySelector('nav input[type="checkbox"]');
			if (breakpoint.matches) {
				secondaryNavItems.forEach(link => link.tabIndex = '-1');
				checkbox.addEventListener('change', () => {
					if (checkbox.checked) {
						secondaryNavItems.forEach(link => link.tabIndex = '0');
					} else {
						secondaryNavItems.forEach(link => link.tabIndex = '-1');
					}
				});
			} else {
				secondaryNavItems.forEach(link => link.tabIndex = '0');
			}
		});
	}
})();
