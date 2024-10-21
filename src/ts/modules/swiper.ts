// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Thumbs, EffectFade } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Autoplay, Thumbs, EffectFade]);
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const swiper = () => {
  const slider = document.querySelectorAll('.js-swiper');
  for (let i = 0; i < slider.length; i++) {
    const num = ('00' + (i + 1)).slice(-2);
    slider[i].className += num;
    new Swiper('.js-swiper' + num, {
      spaceBetween: 20,
      // effect: 'fade',
      speed: 1000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 2,
      // centeredSlides: true,
      // breakpoints: {
      //   561: {
      //     spaceBetween: 40,
      //   },
      // },
    });
  }
};
