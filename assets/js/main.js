$(document).ready(function () {

	$('.slider-main1').slick({
		dots: false,
		infinite: true,
		adaptiveHeight:true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.decor__slider-arrow_prev-1'),
		nextArrow: $('.decor__slider-arrow_next-1'),
		// variableWidth: true
	});

	$('.slider-main2').slick({
		dots: false,
		infinite: true,
		adaptiveHeight:true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.decor__slider-arrow_prev-2'),
		nextArrow: $('.decor__slider-arrow_next-2'),
		// variableWidth: true
	});

	$('.slider-main3').slick({
		dots: false,
		// infinite: true,
		speed: 500,
		slidesToShow: 1,
		// slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.decor__slider-arrow_prev-3'),
		nextArrow: $('.decor__slider-arrow_next-3'),
		// variableWidth: false
	});


	$('.more-interest__items.slider1').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.more-interest__slider-arrow_prev-3'),
		nextArrow: $('.more-interest__slider-arrow_next-3'),
		variableWidth: false,
		responsive:[
			{
				breakpoint:991,
				settings:{
					variableWidth: true,
					slidesToShow: 1,
					centerMode:true,
				}
			},
		],
	});

	$('.decore-slider.interior-slider__items').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.interior-slider-arrow_prev-3'),
		nextArrow: $('.interior-slider-arrow_next-3'),
		// variableWidth: true
	});


	$('.gallery-slider .interior-slider__items').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.gallery-slider-arrow_prev-3'),
		nextArrow: $('.gallery-slider-arrow_next-3'),
		// variableWidth: true
	});







	let acc = document.getElementsByClassName("accordion");
	let i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			let panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
				panel.style.padding = "0px";
			} else {
				panel.style.maxHeight = panel.scrollHeight + 50 + "px";
				panel.style.padding = "18px 18px 18px";
			}
		});
	}

	let burger = document.querySelector('.burger');
	let menu = document.querySelector('.menu-mobile');
	let close = document.querySelector('.close-burger');

	if (burger) {
		burger.addEventListener('click', function () {
			menu.classList.toggle('active');
		});
	}

	if (close) {
		close.addEventListener('click', function () {
			// Проверяем наличие класса 'active'
			if (menu.classList.contains('active')) {
				// Убираем класс 'active'
				menu.classList.remove('active');
			}
		});
	}

});
