const header = document.querySelector(".header")
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50)
})

const menuBtn = document.querySelector(".menu-btn")
const mobileMenu = document.querySelector(".mobile-menu")
const closeMenu = document.querySelector(".close-menu")

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active")
    document.body.style.overflow = "hidden"
  })
}

if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    document.body.style.overflow = ""
  })
}

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    document.body.style.overflow = ""
  })
})

/* WHY US ANIMATION */

const whyItems = document.querySelectorAll(".why-item")

const whyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
      }
    })
  },
  {
    threshold: 0.2,
  },
)

whyItems.forEach((item) => {
  whyObserver.observe(item)
})

/* STUDIO SLIDER */

const studioSlider = new Swiper(".studio-slider", {
  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  loop: true,

  speed: 600,

  spaceBetween: 0,

  centeredSlides: true,

  grabCursor: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".studio-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".studio-next",
    prevEl: ".studio-prev",
  },
})

/* TESTIMONIAL SLIDER */

const testimonialSlider = new Swiper(".testimonial-slider", {
  slidesPerView: 2,

  spaceBetween: 10,

  loop: true,

  speed: 600,

  grabCursor: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".testimonial-next",
    prevEl: ".testimonial-prev",
  },

  pagination: {
    el: ".testimonial-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 18,
    },

    576: {
      slidesPerView: 1,
      spaceBetween: 22,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    992: {
      slidesPerView: 2,
      spaceBetween: 28,
    },
  },
})
