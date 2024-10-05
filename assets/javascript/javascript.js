// STICKY HEADER SCRIPT

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $('.header').addClass('fixed-header').removeClass('fixed-header-before');
    } else if (scroll >= 100) {
        $('.header').addClass('fixed-header-before').removeClass('fixed-header');
    } else {
        $('.header').removeClass('fixed-header fixed-header-before');
    }
});


// SCROLL TO TOP SCRIPT
let scrollToTop = document.getElementById("up");
window.onscroll = function () {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTop.style.display = "flex";
  } else {
    scrollToTop.style.display = "none";
  }
}



// REVEAL SCRIPT
function animateFrom(elem, direction) {
    direction = direction | 1;

    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if(elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  }

  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }

  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: function() { animateFrom(elem) },
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) }
      });
    });
  });