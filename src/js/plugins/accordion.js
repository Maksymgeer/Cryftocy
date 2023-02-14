
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.question-answer-accordion');


	accordions.forEach(el => {
		el.addEventListener("click", (e) => {
			const self = e.currentTarget;
			const accordionTop = self.querySelector('.question-answer-accordion__top');
			const accordionText = self.querySelector('.question-answer-accordion__text');

			self.classList.toggle('open');

			if(self.classList.contains('open')) {
				accordionTop.setAttribute('aria-expanded', true);
				accordionText.setAttribute('aria-hidden', false);
			} else {
				accordionTop.setAttribute('aria-expanded', false);
				accordionText.setAttribute('aria-hidden', true);
			}
		});
	});
});