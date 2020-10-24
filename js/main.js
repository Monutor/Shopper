$(function () {
  //swiper.js
  const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 4,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.slider__btn-right',
      prevEl: '.slider__btn-left',
    },
  })

  //FancyBox.js
  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });

  //myScript
  // $('.events__btn-toggle').on('click', function () {
  //   $('.events__wrapper-body').toggleClass('active');
  //   if ($('.events__wrapper-body').hasClass('active')) {
  //     $(this).find('.icon-plus').show()
  //   } else {
  //     $(this).find('.icon-plus').hide()
  //   }
  // })

  //myScript v2

  $('.events__btn-toggle').on('click', function () {
    $(this).parent().next().toggleClass('active');
    if ($('.events__wrapper-body, .filter__item').hasClass('active')) {
      $(this).find('.icon-plus').show();
    } 
    else {
      $(this).find('.icon-plus').hide();
    }
  });

  //tabs
  $('.tabs').on('click', '.tabs__link', function(event) {
    event.preventDefault;
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');

    var href = $(this).attr('href');
    $('.tabs__content').removeClass('tabs__content--active');
    $(href).addClass('tabs__content--active');
  })

  //mCustomScrollbar
  $(".content").mCustomScrollbar({
    setWidth: true,
  });

  //Range-Slider
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 100,
    from: 10,
    to: 58,
    prefix: "$",
  });

  //Rate Yo!
  $(".rate-yo").rateYo({
    rating: 5,
    starWidth: "21px",
    ratedFill: "#ea5c37",
    spacing: "4px",
  });
})