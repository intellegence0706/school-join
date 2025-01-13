gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0);

$(window).on("load", function () {
  setTimeout(function () {
      const target = document.querySelectorAll(".js-io");
      const targetArray = Array.prototype.slice.call(target);
      const options = {
      root: null,
      rootMargin: "0% 0% -20% 0%",
      threshold: 0,
      };
      const observer = new IntersectionObserver(callback, options);
      targetArray.forEach((tgt) => {
      observer.observe(tgt);
      });

      function callback(entries) {
      entries.forEach(function (entry, i) {
          const target = entry.target;

          if (entry.isIntersecting && !target.classList.contains("_show")) {
          const delay = i * 100;
          setTimeout(function () {
              target.classList.add("_show");
          }, delay);
          }
      });
      }
  }, 400);
});




var case_swiper = new Swiper(".sec-news-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed:500,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024:{
      slidesPerView: 'auto',
      spaceBetween: 0,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  }
});

$('.slide-navi-btns__left').click(function() {
  $('.swiper-button-prev').click();
});

$('.slide-navi-btns__right').click(function() {
  $('.swiper-button-next').click();
});


$(document).ready(function() {
  // Initialize the slider
  $('.result-slider-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Autoscroll every second
    responsive: [
        {
            breakpoint: 768,  // At 768px or greater
            settings: {
                slidesToShow: 1,  // Show only one slide
                slidesToScroll: 1  // Ensure scrolling only one slide
            }
        }
    ]
  });
  // Custom next button for Slick slider
  $('.after-btn').on('click', function(e) {
      e.preventDefault();  // Prevent the default anchor click behavior
      $('.result-slider-container').slick('slickNext');  // Move to the next slide
  });
  // Custom next button for Slick slider
  $('.before-btn').on('click', function(e) {
    e.preventDefault();  // Prevent the default anchor click behavior
    $('.result-slider-container').slick('slickPrev');  // Move to the previous slide
  });

});
$(document).ready(function() {
  // Initialize the slider
  $('.voice-slider-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // After the slide initializes and every time it changes
  $('.voice-slider-container').on('init reInit afterChange', function(event, slick, currentSlide) {
    // 'currentSlide' might be undefined on init/reInit, so we provide a fallback
    var i = (currentSlide ? currentSlide : 0);

    // First, add 'open' to all slides
    slick.$slides.addClass('open');

    // Then remove 'open' from the current slide
    $(slick.$slides[i]).removeClass('open');
  });

  // Custom next button for Slick slider
  $('.voice-after-btn').on('click', function(e) {
    e.preventDefault();
    $('.voice-slider-container').slick('slickNext');
  });

  // Custom previous button for Slick slider
  $('.voice-before-btn').on('click', function(e) {
    e.preventDefault();
    $('.voice-slider-container').slick('slickPrev');
  });

  // Initialize the event trigger manually at setup to correct initial state
  $('.voice-slider-container').slick('setPosition');
});


$(document).ready(function() {
  // Initialize the slider
  $('.interview-slider-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // After the slide initializes and every time it changes
  $('.interview-slider-container').on('init reInit afterChange', function(event, slick, currentSlide) {
    // 'currentSlide' might be undefined on init/reInit, so we provide a fallback
    var i = (currentSlide ? currentSlide : 0);

    // First, add 'open' to all slides
    slick.$slides.addClass('open');

    // Then remove 'open' from the current slide
    $(slick.$slides[i]).removeClass('open');
  });

  // Custom next button for Slick slider
  $('.voice-after-btn').on('click', function(e) {
    e.preventDefault();
    $('.interview-slider-container').slick('slickNext');
  });

  // Custom previous button for Slick slider
  $('.voice-before-btn').on('click', function(e) {
    e.preventDefault();
    $('.interview-slider-container').slick('slickPrev');
  });

  // Initialize the event trigger manually at setup to correct initial state
  $('.interview-slider-container').slick('setPosition');
});

$(document).ready(function() {
  // Initialize the slider
  $('.case-slider-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // After the slide initializes and every time it changes
  $('.case-slider-container').on('init reInit afterChange', function(event, slick, currentSlide) {
    // 'currentSlide' might be undefined on init/reInit, so we provide a fallback
    var i = (currentSlide ? currentSlide : 0);

    // First, add 'open' to all slides
    slick.$slides.addClass('open');

    // Then remove 'open' from the current slide
    $(slick.$slides[i]).removeClass('open');
  });

  // Custom next button for Slick slider
  $('.case-after-btn').on('click', function(e) {
    e.preventDefault();
    $('.case-slider-container').slick('slickNext');
  });

  // Custom previous button for Slick slider
  $('.case-before-btn').on('click', function(e) {
    e.preventDefault();
    $('.case-slider-container').slick('slickPrev');
  });

  // Initialize the event trigger manually at setup to correct initial state
  $('.case-slider-container').slick('setPosition');
});






$(document).ready(function() {
  // Initialize the slider
  $('.member-slider-container').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Autoscroll every second
    responsive: [
        {
            breakpoint: 768,  // At 768px or greater
            settings: {
                slidesToShow: 1,  // Show only one slide
                slidesToScroll: 1  // Ensure scrolling only one slide
            }
        }
    ]
  });
  // Custom next button for Slick slider
  $('.member-after-btn').on('click', function(e) {
      e.preventDefault();  // Prevent the default anchor click behavior
      $('.member-slider-container').slick('slickNext');  // Move to the next slide
  });
  // Custom next button for Slick slider
  $('.member-before-btn').on('click', function(e) {
    e.preventDefault();  // Prevent the default anchor click behavior
    $('.member-slider-container').slick('slickPrev');  // Move to the previous slide
  });

});

$('.__question').click(function() {
  const $answer = $(this).parent('.__list-main').children('.__answer');
  const $icon = $(this).parents('.faq-item').children('.__item-collapse__mark');
  const $question = $(this);

  if ($answer.css('max-height') === '0px') {
    $answer.css({
      'max-height': '500px',
      'padding-top': '32px',
      'padding-bottom': '32px'
    });
    $icon.addClass('open');
    $question.css('border-radius', '14px 14px 0 0');

  } else {
    $answer.css({
      'max-height': '0',
      'padding-top': '0',
      'padding-bottom': '0'
    });
    $icon.removeClass('open');
    $question.css('border-radius', '14px');

  }
});
