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
})

