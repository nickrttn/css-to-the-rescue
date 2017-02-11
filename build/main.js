(function() {
	'use strict';
	if (window.matchMedia) {
		const breakpoint = window.matchMedia('(min-width: 52.5em)');

		// Toggle the items to tabindex 0 outside of the relevant breakpoint
		breakpoint.addListener(() => {
			toggleNavigationItems();
		});

		function toggleNavigationItems() {
			const secondaryNavItems = document.querySelectorAll('[role="navigation"] li ul a');
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
		}

		// Toggle the items to tabindex -1 once if applicable.
		toggleNavigationItems();
	}
})();

