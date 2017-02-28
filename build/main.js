(function() {
	'use strict';
	if (window.matchMedia) {
		const breakpoint = window.matchMedia('(min-width: 52.5em)');

		// Toggle the items to tabindex 0 outside of the relevant breakpoint
		breakpoint.addListener(function() {
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
						checkbox.setAttribute('aria-expanded', true);
					} else {
						secondaryNavItems.forEach(link => link.tabIndex = '-1');
						checkbox.setAttribute('aria-expanded', false);
					}
				});
			} else {
				secondaryNavItems.forEach(link => link.tabIndex = '0');
				checkbox.setAttribute('aria-expanded', true);
			}
		}

		// Toggle the items to tabindex -1 once if applicable.
		toggleNavigationItems();
	}
})();

(function() {
	const toggle = document.querySelector('#login');
	const cancel = document.querySelector('.login-form [type="reset"]');
	const submit = document.querySelector('.login-form [type="submit"]');
	const dialog = document.querySelector('dialog');

	toggle.addEventListener('click', () => {
		dialog.showModal();
		toggle.setAttribute('aria-expanded', true);
	});

	cancel.addEventListener('click', () => {
		dialog.close();
		toggle.setAttribute('aria-expanded', true);
	});
})();

