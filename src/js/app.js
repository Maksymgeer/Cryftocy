import * as accordion from "./plugins/accordion.js";
import * as dropMenu from "./plugins/dropmenu.js";
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
/*import "slick-carousel";*/

//--------- SWIPER INIT -----------//
import Swiper, { Navigation, Pagination } from "swiper";

const swiperSlider = new Swiper('.slider__init', {
	modules: [Navigation, Pagination],

	slidesPerView: "auto",
	autoHeight: true,
	speed: 500,
	autoplay: {
		delay: 2500,
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const swiperBest = new Swiper('.best-films__slider', {
	modules: [Navigation, Pagination],

	slidesPerView: 5,
	autoHeight: true,
	speed: 500,
	spaceBetween: 15,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},


});


const swiperColl = new Swiper('.popullar-collections__inner', {
	modules: [Navigation, Pagination],
	slidesPerView: 1,
	autoHeight: true,
	centeredSlides: true,
	

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

//----------------------- BURDER ----------------------//
const iconMenu = document.querySelector(".menu__box-icon");
if (iconMenu) {
	const menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


/*
const btnMore = document.querySelector('.what-about__more');
if (btnMore) {
	const textMore = document.querySelector('.what-about__text-more');
	btnMore.addEventListener("click", () => {
		textMore.classList.toggle= "text-active";
	});
}*/


//----------------- SEACH -------------------//
/*const searchIcon = document.querySelector('.menu__search');
if (searchIcon) {
	const form = document.querySelector('.menu__form');
	const formInput = document.querySelector('.menu__input');
	const formExit = document.querySelector('.menu__form-icon');
	searchIcon.addEventListener("click", function (e) {
		form.classList.toggle('_active-form');
		formInput.classList.toggle('_active-input');
		searchIcon.classList.toggle('_active-search');
	});
	formExit.addEventListener("click", function (e) {
		formInput.classList.remove('_active-input');
	});
}*/






//------------------------ CODE ----------------------------//

/*
const mainElement = document.documentElement;
const element = mainElement.clientWidth;
const innerExplore = document.querySelector(".");

function work() {
	if (element < 1065) {
		const over = innerExplore.innerHTML = `Hi`;
	}
}
work();
*/