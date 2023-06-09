console.clear();

const swiper = new Swiper(".product-swiper .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // And if we need scrollbar
  scrollbar: {
    el: ".product-swiper .swiper-scrollbar",
  },
});

const swiper2 = new Swiper(".product-swiper-2 .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // And if we need scrollbar
  scrollbar: {
    el: ".product-swiper-2 .swiper-scrollbar",
  },
});

const swiper3 = new Swiper(".weddingring-list .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // slidesPerView: 3,
  // spaceBetween: 20,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    660: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // And if we need scrollbar
  scrollbar: {
    el: ".weddingring-list .swiper-scrollbar",
  },
});

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  // sectionsColor: ["pink", "orange", "lightblue", "green"],
  // anchors: [
  //   "Top",
  //   "Tiffany Rock",
  //   "Product",
  //   "Product",
  //   "Couple & Wedding Ring",
  //   "Couple Ring",
  //   "Wedding Ring",
  // ],
  navigation: true,
  navigationPosition: "left",
  navigationTooltips: [
    "Top",
    "Tiffany Rock",
    "Product",
    "Couple & Wedding Rings",
    "Couple Rings",
    "Wedding Rings",
    "Category",
    "Tiffany T",
    "Product",
    "Footer",
  ],
  showActiveTooltip: false,
  loopBottom: true,
  loopTop: false,
});

// 메뉴 js
$(".menu-icon").click(function () {
  $(".category-box").addClass("active");
});

$(".menu-close-btn").click(function () {
  $(".category-box").removeClass("active");
});

//여백을 누르면 닫히는 코드
$(".category-box").click(function () {
  $(".category-box").removeClass("active");
});

//팝업부분(흰)은 눌러도 닫히지 않도록 하는 코드
$(".category-box-content").click(function () {
  return false;
});
$(".sub-menu > ul > li").click(function () {
  return false;
});

//서브메뉴 코드
$(".yes-line > li").click(function () {
  $(this).siblings(".hover").removeClass("hover");

  if ($(this).hasClass("hover")) {
    $(this).removeClass("hover");
  } else {
    $(this).addClass("hover");
  }
});

//검색 아이콘 누르면 검색 창 나오게
$(".search-icon").click(function () {
  $(".search-box").addClass("active");
});

$(".search-close-btn").click(function () {
  $(".search-box").removeClass("active");
});
