import * as accordion from "./plugins/accordion.js";
import * as dropMenu from "./plugins/dropmenu.js";
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
/*import "slick-carousel";*/

//--------- SWIPER INIT -----------//
import Swiper, { Navigation, Pagination } from "swiper";

const swiperSlider = new Swiper('.slider__init', {
	modules: [Navigation, Pagination],

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});







//----------------------- BURDER ----------------------//
const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
	const menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}



(function () {
	"use strict";
 
	// define variables
	var items = document.querySelectorAll(".timeline li");
 
	// check if an element is in viewport
	// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	function isElementInViewport(el) {
	  var rect = el.getBoundingClientRect();
	  return (
		 rect.top >= 0 &&
		 rect.left >= 0 &&
		 rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		 rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	  );
	}
 
	function callbackFunc() {
	  for (var i = 0; i < items.length; i++) {
		 if (isElementInViewport(items[i])) {
			items[i].classList.add("in-view");
		 }
	  }
	}
 
	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
 })();
 
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