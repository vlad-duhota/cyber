// smooth links
const smoothLinks = document.querySelectorAll('.anchor');
for (let smoothLink of smoothLinks) {   
    smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    });
};

$('.join-us, .close').click(function(){
    $('.pop-up').toggleClass('open');
    $('.page').addClass('no-scroll');
});

$('.form-btn, .close').click(function(){
    $('.pop-up2').toggleClass('open');
    $('.page').addClass('no-scroll');
});

$('.close').click(function(){
    $('.pop-up').removeClass('open');
    $('.pop-up2').removeClass('open');
    $('.page').removeClass('no-scroll');
});

jQuery("form").submit(function() { // Событие отправки с формы
    var form_data = jQuery(this).serialize(); // Собираем данные из полей
    jQuery.ajax({
        type: "POST", // Метод отправки
        url: "sendform.php", // Путь к PHP обработчику sendform.php
        data: form_data,
    });
    $(this).find('input, textarea').prop('disabled', true);
    event.preventDefault();
});