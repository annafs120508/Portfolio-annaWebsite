// ----- ## -- NAVIGATION BAR FUNCTION -- ## ----- 
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// ----- ## -- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING -- ## ----- 
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

// ----- ## -- TYPING EFFECT -- ## ----- 
var typingEffect = new Typed(".typedText", {
  strings: ["Game", "Programmer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

// ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- 
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true
});

// -- FOOTER ANIMASI BERTAHAP -- 
sr.reveal(".footer-text", { 
  delay: 100,  // Menambahkan sedikit delay pada nama
  origin: "bottom",  // Animasi dari bawah
  distance: "50px",  // Jarak gerakan
  duration: 1000,  // Durasi animasi
  reset: true  
});

sr.reveal(".footer-menu", {
  delay: 300,  // Memberikan delay lebih lama pada menu
  origin: "bottom",  // Animasi dari bawah
  distance: "50px",  // Jarak gerakan
  duration: 1000,  // Durasi animasi
  reset: true  
});

sr.reveal(".footer-social-icons", {
  delay: 500,  // Delay lebih lama untuk ikon sosial
  origin: "bottom",  // Animasi dari bawah
  distance: "50px",  // Jarak gerakan
  duration: 1000,  // Durasi animasi
  reset: true  
});

sr.reveal(".bottom-footer", {
  delay: 700,  // Delay untuk bagian bawah footer
  origin: "bottom",  // Animasi dari bawah
  distance: "50px",  // Jarak gerakan
  duration: 1000,  // Durasi animasi
  reset: true  
});


// -- HOME --
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

// -- PROJECT BOX (Animasi kotak project) --
sr.reveal(".project-box", {
  interval: 200, // Jeda antar elemen
  origin: "bottom", // Animasi dari bawah
  distance: "50px", // Jarak gerakan
  duration: 1000, // Durasi animasi
  reset: true // Animasi akan diulang saat gulir ulang
});

// -- SKILL CARD (Animasi kotak skill) --
sr.reveal(".skill-card", {
  interval: 200, // Memberikan jeda antar elemen
  origin: "bottom", // Arah animasi
  distance: "50px", // Jarak gerakan
  duration: 1000, // Durasi animasi
  reset: true // Animasi akan diulang saat digulir ulang
});

// -- HEADINGS --
sr.reveal(".top-header", {});

// -- ABOUT INFO & CONTACT INFO --
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

// -- ABOUT SKILLS & FORM BOX --
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true
});

// -- PROJECT BOX (Animasi kotak project) --
sr.reveal(".project-box", {
  interval: 200, // Jeda antar elemen
  origin: "bottom", // Animasi dari bawah
  distance: "50px", // Jarak gerakan
  duration: 1000, // Durasi animasi
  reset: true // Animasi akan diulang saat gulir ulang
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

// ----- ## -- CHANGE ACTIVE LINK -- ## ----- 
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
