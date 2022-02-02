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
