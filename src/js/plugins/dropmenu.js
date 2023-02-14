
const dropdownItem = document.querySelector('.dropdown-item');

if (dropdownItem) {
	const items = dropdownItem.querySelectorAll('.menu__dropdown');

	dropdownItem.addEventListener('click', function(e) {
		dropdownItem.querySelector('.menu__sub-list').classList.toggle('_active');
		dropdownItem.querySelector('.menu__arrow').classList.toggle('_active');
	});
}