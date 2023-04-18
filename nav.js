$(document).ready(function() {
	var menuLinks = `
	<a style="color: #fff; padding: 5px;" href="/">Главная</a>
	<a style="color: #fff; padding: 5px;" href="/product.html">Страница товара</a>
	<a style="color: #fff; padding: 5px;" href="/catalog.html">Каталог</a>
	<a style="color: #fff; padding: 5px;" href="/catalog-card.html">Каталог в виде карточек, с фильтрами</a>
	<a style="color: #fff; padding: 5px;" href="/catalog-row.html">Каталог в строчном виде, с фильтрами</a>
	<a style="color: #fff; padding: 5px;" href="/about.html">О компании</a>
	<a style="color: #fff; padding: 5px;" href="/news.html">Новости</a>
	<a style="color: #fff; padding: 5px;" href="/news2.html">Новости 2</a>
	<a style="color: #fff; padding: 5px;" href="/news-full.html">Новости - Полная новость</a>
	<a style="color: #fff; padding: 5px;" href="/search.html">Страница поиска</a>
	<a style="color: #fff; padding: 5px;" href="/resources.html">Страница ресурсов</a>
	<a style="color: #fff; padding: 5px;" href="/contacts.html">Страница контактов</a>
	<a style="color: #fff; padding: 5px;" href="/delivery.html">Страница доставки</a>
	<a style="color: #fff; padding: 5px;" href="/order.html">Страница оформления заказа</a>
	<a style="color: #fff; padding: 5px;" href="/order2.html">Страница оформления заказа (без регистрации)</a>
	<a style="color: #fff; padding: 5px;" href="/lk-history.html">Личный кабинет (История заказов)</a>
	<a style="color: #fff; padding: 5px;" href="/lk-data.html">Личный кабинет (Данные)</a>
	<a style="color: #fff; padding: 5px;" href="/lk-money.html">Личный кабинет (Монеты на хранении)</a>
	<a style="color: #fff; padding: 5px;" href="/lk-fav.html">Личный кабинет (Избранное)</a>
	<a style="color: #fff; padding: 5px;" href="/lk-empty.html">Личный кабинет (Пусто)</a>
	<a style="color: #fff; padding: 5px;" href="/404.html">404</a>
	<a style="color: #fff; padding: 5px;" href="/cart.html">Корзина</a>
	<a style="color: #fff; padding: 5px;" href="/cart-empty.html">Корзина (Пусто)</a>
	<a style="color: #fff; padding: 5px;" href="#" data-open="modal-login">Модальное окно (Вход)</a>
	<a style="color: #fff; padding: 5px;" href="#" data-open="modal-reg">Модальное окно (Регистрация)</a>
	<a style="color: #fff; padding: 5px;" href="#" data-open="modal-recover">Модальное окно (Восстановление)</a>
	<a style="color: #fff; padding: 5px;" href="#" data-open="modal-call">Модальное окно (Заказать звонок)</a>
	<a style="color: #fff; padding: 5px;" href="#" data-open="modal-message">Модальное окно (Сообщить о поступлении)</a>
	<a style="color: #fff; padding: 5px;" href="#" data-open="modal-share">Модальное окно (Поделиться)</a>
	<a style="color: #fff; padding: 5px;" href="#" data-open="modal-sell">Модальное окно (Продать)</a>
	`;


	var styleNavdd = 'width: 40px;height: 40px;border-radius: 50%;right: 5px;bottom: 5px;background-color: rgba(133,143,159, 0.6);position: fixed;color: #fff;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-transition: 0.4s;-o-transition: 0.4s;transition: 0.4s;z-index: 300;';
	var styleNavddActive = 'width: 100%;height: 100%;border-radius: 0px;right: 0px;bottom: 0px;background-color: rgba(133,143,159, 0.95);position: fixed;color: #fff;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center; align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-transition: 0.4s;-o-transition: 0.4s;transition: 0.4s;z-index: 300; overflow-y: scroll;';
	var styleNavdd_span = 'display: block;';
	var styleNavdd_spanActive = 'display: none;';
	var styleNavdd_div = 'pointer-events: none;opacity: 0;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;position: absolute;overflow-x: hidden;overflow-y: auto;';
	var styleNavdd_divActive = 'pointer-events: auto;opacity: 1;width: 1000px;height: 100%;position: static;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;overflow-x: hidden;overflow-y: auto;';
	$('body').append('<div class="nav-d-d"><span>nav</span><div>'+menuLinks+'</div></div>');
	$('.nav-d-d').attr('style', styleNavdd).find('span').attr('style', styleNavdd_span).siblings('div').attr('style', styleNavdd_div);
	$('.nav-d-d').on('click',function(){
		if($(this).is('.active')){
			$(this).removeClass('active');
			$('.nav-d-d').attr('style', styleNavdd).find('span').attr('style', styleNavdd_span).siblings('div').attr('style', styleNavdd_div);
		}else{
			$(this).addClass('active');
			$('.nav-d-d').attr('style', styleNavddActive).find('span').attr('style', styleNavdd_spanActive).siblings('div').attr('style', styleNavdd_divActive);
		}
	})
});
