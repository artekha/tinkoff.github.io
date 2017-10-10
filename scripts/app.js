'use strict';

// Inputs

var inputs = new Inputs({
	fields: document.querySelectorAll('[data-component="input"]')
});

// Dropdown
var dropdawn = new Dropdawn({
	link: document.querySelectorAll('[data-component="dropdawn"]')
});

// Tab
var tab = new Tab({
	element: document.querySelector('.tab')
});

// Scroll
baron($('.scroller-wrapper'), {
	scroller: '.scroller',
	container: '.categories-list',
	bar: '.scroller__bar'
});

// Menu
(function () {
	var link = document.querySelector('.header__menu'),
	    menu = document.querySelector('.nav-wrapper');

	link.addEventListener('click', render);

	function render() {
		menu.classList.toggle('show');
	}
})();

// Tab scroll
$(function () {
	var clicked = false,
	    base = 0,
	    base_scroll = 0;
	$('.tab-link').on({
		mousemove: function mousemove(e) {
			clicked && function (xAxis) {
				var _this = $(this);
				$('.tab-link-wrapper').scrollLeft(base_scroll + base - xAxis);
			}.call($(this), e.pageX);
		},
		mousedown: function mousedown(e) {
			clicked = true;
			base = e.pageX;
			base_scroll = $('.tab-link-wrapper').scrollLeft();
		},
		mouseup: function mouseup(e) {
			clicked = false;
		}
	});
});