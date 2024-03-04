import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const swiperBrands = new Swiper(".slider-brands", {
  modules: [Navigation, Pagination],
  pagination: {
    el: ".pag",
    clickable: true,
    bulletClass: "pag__bullet",
    bulletActiveClass: "pag__bullet--active",
  },

  spaceBetween: 16,

  slidesPerView: "auto",

  on: {
    afterInit: function enableOnlyMobile(swiperBrands) {
      if (document.documentElement.clientWidth > 767) {
        swiperBrands.disable();
        swiperBrands.el.classList.add("-non-slider");
      } else {
        swiperBrands.enable();
        swiperBrands.el.classList.remove("-non-slider");
      }
    },
  },
});

export const swiperDevices = new Swiper(".slider-devices", {
  modules: [Navigation, Pagination],
  pagination: {
    el: ".pag",
    clickable: true,
    bulletClass: "pag__bullet",
    bulletActiveClass: "pag__bullet--active",
  },

  spaceBetween: 16,

  slidesPerView: "auto",

  on: {
    afterInit: function enableOnlyMobile(swiperDevices) {
      if (document.documentElement.clientWidth > 767) {
        swiperDevices.disable();
        swiperDevices.el.classList.add("-non-slider");
      } else {
        swiperDevices.enable();
        swiperDevices.el.classList.remove("-non-slider");
      }
    },
  },
});

export const swiperPrices = new Swiper(".slider-prices", {
  modules: [Navigation, Pagination],
  pagination: {
    el: ".pag",
    clickable: true,
    bulletClass: "pag__bullet",
    bulletActiveClass: "pag__bullet--active",
  },

  spaceBetween: 16,

  slidesPerView: "auto",

  on: {
    afterInit: function enableOnlyMobile(swiperPrices) {
      if (document.documentElement.clientWidth > 767) {
        swiperPrices.disable();
        swiperPrices.el.classList.add("-non-slider");
      } else {
        swiperPrices.enable();
        swiperPrices.el.classList.remove("-non-slider");
      }
    },
  },
});
