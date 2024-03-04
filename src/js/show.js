// Сворачивание элементов
export const brandsSlides = document.querySelectorAll(".slider-brands__item");
export const devicesSlides = document.querySelectorAll(".slider-devices__item");
export const showBrands = document.querySelector(".slider-brands__show");
export const showDevices = document.querySelector(".slider-devices__show");
export const serviceText = document.querySelectorAll(".services__text");
export const showService = document.querySelector(".services__more-btn");
export let BrandsItemCondition = false;
export let DevicesItemCondition = false;
export let ServiceItemCondition = false;

showBrands.addEventListener("click", () => {
  if (
    document.documentElement.clientWidth > 767 &&
    document.documentElement.clientWidth < 1119.98
  ) {
    for (let i = 6; i < brandsSlides.length; i++) {
      brandsSlides[i].classList.toggle("slider-brands__item--show");
    }
    BrandsItemCondition = !BrandsItemCondition;
  } else if (document.documentElement.clientWidth > 1119) {
    for (let i = 8; i < brandsSlides.length; i++) {
      brandsSlides[i].classList.toggle("slider-brands__item--show");
    }
    BrandsItemCondition = !BrandsItemCondition;
  }

  if (BrandsItemCondition) {
    showBrands.textContent = "Скрыть";
    showBrands.classList.add("btn-hide");
  } else {
    showBrands.textContent = "Показать все";
    showBrands.classList.remove("btn-hide");
  }
});

showDevices.addEventListener("click", () => {
  if (
    document.documentElement.clientWidth > 767 &&
    document.documentElement.clientWidth < 1119.98
  ) {
    for (let i = 3; i < devicesSlides.length; i++) {
      devicesSlides[i].classList.toggle("slider-devices__item--show");
    }
    DevicesItemCondition = !DevicesItemCondition;
  } else if (document.documentElement.clientWidth > 1119) {
    for (let i = 4; i < devicesSlides.length; i++) {
      devicesSlides[i].classList.toggle("slider-devices__item--show");
    }
    DevicesItemCondition = !DevicesItemCondition;
  }

  if (DevicesItemCondition) {
    showDevices.textContent = "Скрыть";
    showDevices.classList.add("btn-hide");
  } else {
    showDevices.textContent = "Показать все";
    showDevices.classList.remove("btn-hide");
  }
});

showService.addEventListener("click", function () {
  for (let i = 1; i < serviceText.length; i++)
    serviceText[i].classList.toggle("services__text--show");

  ServiceItemCondition = !ServiceItemCondition;

  if (ServiceItemCondition) {
    showService.textContent = "Скрыть";
    showService.classList.add("btn-hide");
  } else {
    showService.textContent = "Читать далее";
    showService.classList.remove("btn-hide");
  }
});

// export function hideItems() {
//   if (
//     document.documentElement.clientWidth > 767 &&
//     document.documentElement.clientWidth < 1119
//   ) {
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].classList.remove("slider__item--hide");
//     }
//     for (let i = 6; i < slides.length; i++) {
//       slides[i].classList.add("slider__item--hide");
//     }
//   } else if (document.documentElement.clientWidth > 1119) {
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].classList.remove("slider__item--hide");
//     }
//     for (let i = 8; i < slides.length; i++) {
//       slides[i].classList.add("slider__item--hide");
//     }
//   }
// }
