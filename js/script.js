"use strict";

$(document).ready(function () {

	console.log("hello");
	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows());
			}
		}
		if (isMobile.any()) {
			$('body').addClass('_touch');
	
			const iconMenu = $('.menu__icon');
			const menuBody = $('.menu__body');
			iconMenu.click(function () {
				menuBody.toggleClass("_active");
			});
	
			const menuArrows = $('.menu__arrow');
			menuArrows.each(function () {
				$(this).click(function () {
					$(this).parent().toggleClass("_active");
				});
			});
		} else {
			$('body').addClass('_pc');
		}
		
	$(".ajaxForm").submit(function (e) { //Обработка данных формы
		e.preventDefault();
		let href = $(this).attr("action");
		$.ajax({
			type: "POST",
			dataType: "json",
			url: href,
			data: $(this).serialize(),
			success: function (response) {
				if (response.status == "success") {
					alert("Заявка отправлена!");
					$('#myform')[0].reset();
				} else {
					alert("Произошла ошибка: " + response.message);

				}
			}
		});
	});

	$('.question').each(function (index, element) { //развёртывание ответов в FAQ
		$('.question_title', this).click(function () {
			$('.question').each(function (index2, element2){
				if((!$('.answer', element2).is(':hidden')))
				{
					$('.question_title', element2).css('color', '#000');
					$(element2).css('outline-color', 'transparent');
					$('.answer', element2).slideToggle(300);
				}
			});
			if ($('.answer', element).is(':hidden')) {
				$(this).css('color', 'var(--orange)');
				$(element).css('outline-color', 'var(--orange)');
				$('.answer', element).slideToggle(300);
			}
		});
	});

});