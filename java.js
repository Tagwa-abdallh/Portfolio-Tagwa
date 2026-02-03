// let lastScroll = 0;
// const navbar = document.querySelector(".scroll-navbar");

// window.addEventListener("scroll", () => {
//   const currentScroll = window.scrollY;

//   if (currentScroll > lastScroll && currentScroll > 120) {
//     navbar.classList.add("show");
//   } else {
//     navbar.classList.remove("show");
//   }

//   lastScroll = currentScroll;
// });
  

var typed = new Typed('.typing-text', {
  strings: [  "Software Engineer ","Web Developer ", "Front-End Developer ",  "Web Designer " ],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1700,
  loop: true
});



const counters = document.querySelectorAll('.counter');

  const speed = 200; // كل ما زاد الرقم العد يكون أبطأ

  const startCount = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const updateCount = () => {
      const increment = target / speed;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 20); // سرعة التحديث
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCount(entry.target);
          observer.unobserve(entry.target); // عشان يعد مرة واحدة
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach(counter => observer.observe(counter));




const skillsSection = document.querySelector('.page-animate');
const bars = document.querySelectorAll('.progress-bar');
let animated = false;

window.addEventListener('scroll', () => {
  const top = skillsSection.getBoundingClientRect().top;

  if (top < window.innerHeight - 150 && !animated) {
    bars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    });
    animated = true;
  }
});





const testimonials = [
  {
    img: "./img/testimonial-1.jpg",
    text: "With extensive experience and strong skills, Tagwa consistently enhances user experience and delivers visually appealing and effective projects.",
    name: "Sarah Mohamed",
    job: "UI Designer"
  },
  {
    img: "./img/testimonial-2.jpg",
    text: "Friendly, reliable, and provides practical solutions.",
    name: "Ahmed Ali",
    job: "Frontend Developer"
  },
  {
    img: "./img/testimonial-3.jpg",
    text: "Her projects are clean, beautiful, and easy to use.",
    name: "Omar Hassan",
    job: "Product Manager"
  }
];

let index = 0;

const img = document.getElementById("t-img");
const text = document.getElementById("t-text");
const name = document.getElementById("t-name");
const job = document.getElementById("t-job");
const dots = document.querySelectorAll(".dot");

function showTestimonial(i) {
  img.style.opacity = 0;
  text.style.opacity = 0;
  name.style.opacity = 0;
  job.style.opacity = 0;
  
  


  setTimeout(() => {
    img.src = testimonials[i].img;
    text.textContent = testimonials[i].text;
    name.textContent = testimonials[i].name;
    job.textContent = testimonials[i].job;

    img.style.opacity = 1;
    text.style.opacity = 1;
    name.style.opacity = 1;
  job.style.opacity = 1;

  }, 400);

  dots.forEach(d => d.classList.remove("active"));
  dots[i].classList.add("active");

  index = i;
}

function goToTestimonial(i) {
  showTestimonial(i);
}

setInterval(() => {
  showTestimonial((index + 1) % testimonials.length);
}, 6000);

showTestimonial(index);








  