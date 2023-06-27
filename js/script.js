import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  lideToClickedSlide: true,

  // пагинация

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },

  // навигация

  navigation: {
    nextEL: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: false,
  },
});

let steps = document.querySelectorAll(".tabs-nav__btn");

steps.forEach(function (step) {
  step.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    steps.forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn--active");

    document.querySelectorAll(".tabs-item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});

new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menulinks = menu.querySelectorAll(".nav__link");

burger.addEventListener(
  "click",

  function () {
    console.error("it works");

    burger.classList.toggle("burger--active");

    menu.classList.toggle("header__nav--active");

    document.body.classList.toggle("stop-scroll");
  }
);

menulinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger");

    menu.classList.remove("header__nav");

    document.body.classList.remove("stop-scroll");
  });
});

let search = document.querySelector(".header__search1");

search.addEventListener(
  "click",

  function () {
    console.info("Well done!");

    search.classList.toggle("header__search1--active");
  }
);

menulinks.forEach(function (element) {
  element.addEventListener("click", function () {
    search.classList.remove("header__search1");

  });
});
