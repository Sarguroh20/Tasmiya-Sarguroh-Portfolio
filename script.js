let wave1 = document.getElementById("wave1");
let wave2 = document.getElementById("wave2");
let wave3 = document.getElementById("wave3");
let wave4 = document.getElementById("wave4");
let text = document.getElementById("text");
let text_sub = document.getElementById("text_sub");
let train = document.getElementById("train");
let cards = document.querySelectorAll(".skill_card");
let stackArea = document.querySelector(".stack-area");

function rotateCards() {
  let angle = 0;
  cards.forEach((card, index) => {
    if (card.classList.contains("away")) {
      card.style.transform = `translateY(-120vh) rotate(-48deg)`;
    } else {
      card.style.transform = ` rotate(${angle}deg)`;
      angle = angle - 10;
      card.style.zIndex = cards.length - index;
    }
  });
}

rotateCards();

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  wave1.style.backgroundPositionX = 400 + value * 4 + "px";
  wave2.style.backgroundPositionX = 300 + value * -4 + "px";
  wave3.style.backgroundPositionX = 200 + value * 2 + "px";
  wave4.style.backgroundPositionX = 100 + value * -2 + "px";

  text.style.opacity = 1;
  text_sub.style.opacity = 1;
  text_sub.style.display = "block";
  text.style.top = 80 + value * -0.2 + "%";
  text_sub.style.top = 90 + value * -0.2 + "%";
  train.style.left = value * 1.5 + "px";

  let distance = window.innerHeight * 0.5;

  let topVal = stackArea.getBoundingClientRect().top;

  let index = -1 * (topVal / distance + 1);

  index = Math.floor(index);

  for (i = 0; i < cards.length; i++) {
    if (i <= index) {
      cards[i].classList.add("away");
    } else {
      cards[i].classList.remove("away");
    }
  }
  rotateCards();
});

gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray("#projects .project_section");

gsap.to(contents, {
  xPercent: -100 * (contents.length - 1),
  scrollTrigger: {
    trigger: "#projects",
    pin: true,
    scrub: 1,
  },
});
