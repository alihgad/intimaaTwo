// toggle button navbar

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

// change top header when scroll

const topBar = document.querySelector(".bg-transparent.mt-2");
const nav = document.querySelector("nav"); // Select the nav element


window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.remove("bg-transparent");
    nav.classList.add("bg-blue-800", "rounded-lg");
    topBar.classList.remove("bg-transparent");
    topBar.classList.add("bg-blue-800", "rounded-lg");
  } else {
    nav.classList.add("bg-transparent", "text-white");
    nav.classList.remove("bg-blue-800", "rounded-lg");
    topBar.classList.add("bg-transparent");
    topBar.classList.remove("bg-blue-800", "rounded-lg");
  }
});

// change colors on scroll navbar




// سلايدر سموز يعمل تلقائياً ويدعم أزرار التنقل

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById("slider");
  if (!slider) return;

  // فلترة السلايدز لأخذ العناصر فقط (divs)
  const slides = Array.from(slider.children).filter(child => child.nodeType === 1);
  if (slides.length === 0) return;

  let currentIndex = 0;
  let slideInterval;
  const slideCount = slides.length;
  const duration = 700;

  // إعداد السلايدز
  slider.style.position = 'relative';
  slider.style.display = 'flex';
  slider.style.flexDirection = 'row';
  slider.style.overflow = 'hidden';
  slider.style.width = '100%';

  slides.forEach((slide, idx) => {
    slide.style.position = 'absolute';
    slide.style.left = 0;
    slide.style.top = 0;
    slide.style.width = '100%';
    slide.style.height = '100%';
    slide.style.opacity = idx === 0 ? '1' : '0';
    slide.style.transition = `opacity ${duration}ms ease`;
    slide.style.zIndex = idx === 0 ? 2 : 1;
  });

  function showSlide(index) {
    updateDots(index);
    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.style.opacity = '1';
        slide.style.zIndex = 2;
      } else {
        slide.style.opacity = '0';
        slide.style.zIndex = 1;
      }
    });
    currentIndex = index;
  }

  function nextSlide() {
    let nextIdx = (currentIndex + 1) % slideCount;
    showSlide(nextIdx);
  }

  function prevSlide() {
    let prevIdx = (currentIndex - 1 + slideCount) % slideCount;
    showSlide(prevIdx);
  }

  const dots = document.querySelectorAll("#sliderDots .dot");

// دالة لتحديث مظهر النقاط
function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle('bg-white', i === index);     // النقطة المفعّلة
    dot.classList.toggle('bg-gray-400', i !== index);  // البقية
  });
}

  // function startAutoSlide() {
  //   stopAutoSlide();
  //   slideInterval = setInterval(nextSlide, 5000);
  // }

  // function stopAutoSlide() {
  //   if (slideInterval) clearInterval(slideInterval);
  // }

  // ربط الدوال بالأزرار الموجودة في HTML
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  // تشغيل السلايدر تلقائياً
  // startAutoSlide();

  // إيقاف المؤقت عند المرور بالماوس
  // slider.addEventListener('mouseenter', stopAutoSlide);
  // slider.addEventListener('mouseleave', startAutoSlide);
});
