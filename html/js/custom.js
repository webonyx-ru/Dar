$(document).ready(function(){
	$(document).on('click', '.collapse-detector', function(e){
		$(this).siblings('.collapse-block').slideToggle(300);
		$(this).toggleClass('active')
		e.preventDefault();
	});

	$(document).on('click', '.show-all-button.form-side-left', function(e){
		$(this).toggleClass('active').siblings('.custom-hidden').slideToggle(300)

		if($(this).hasClass('active')) {
			$(this).text('Скрыть')
		} else {
			$(this).text('Показать все')
		}

		e.preventDefault();
	});

	if($('.selectpicker').length > 0) {
		$('.selectpicker').selectpicker({
			style: "selectbox",
		  size: 15
		});
	}

	$(document).on('click', '.product__tab[data-tab-id]', function(e){
		tab = $('.product__tabs-item[data-tab-id="'+$(this).attr('data-tab-id')+'"]');

		tab.siblings('.product__tabs-item').hide().end().show();

		$(this).siblings().removeClass('active').end().addClass('active')
		e.preventDefault();
	});

	$(document).on('click', '.catalog-categories__title', function(e){
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).siblings('.catalog-categories__listing').slideUp(200);
		} else {
			$(this).addClass('active');
			$(this).siblings('.catalog-categories__listing').slideDown(200);
		}
	})
});