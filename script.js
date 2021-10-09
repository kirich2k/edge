$(function() {
    const body = $('body'); // Получение переменной блока body
    const header = $('header'); // Получение переменной блока header
    const burger_item = $('#burger_item'); // Получение переменной блока burger__item
    const burger = $('#burger'); // Получение переменной блока burger
    const menu = $('#menu'); // Получение переменной блока menu
    let headerH; // Переменная высоты блока header 
    let scrollPos = $(window).scrollTop(); // Проверка сколько проскролена страница
    let x; // Переменная для проверки класса menu(закрытие/открытие menu)
    let width; // Ширина экрана

    $(window).on(setInterval(function(){
        headerH = header.innerHeight() - 70;
        scrollPos = $(this).scrollTop();
        if (width <= 1220) {
            header.addClass('fixed');
            if (((scrollPos > headerH) || (x == true)) && width <= 1220) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            };
        }else {
            menu.removeClass('active');
            menu.slideUp(500);
            header.removeClass('fixed');
            body.removeClass('lock');
            burger.removeClass('active');
            burger_item.removeClass('active');
        };
    }, 100));

    // Проверка класса
    $(window).on(setInterval(function(){
        x = $(menu).hasClass('active');
        width = $(window).width();
        //console.log(x);
        //y = $(header).hasClass('fixed');
    }, 100));
    // Открытие/закрытие menu
    $(burger).click(function(){
        menu.toggleClass('active');
        menu.slideToggle(500);
        body.toggleClass('lock');
        burger.toggleClass('active');
        burger_item.toggleClass('active');
    });
});