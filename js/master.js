const dropdownBtn = document.getElementById("nav__dpdn_btn");
const dropdownElmnts = document.getElementById("nav_dpdn_elmnts_active");

const cards = [
  {
    title: "Marketing",
    description: "What's included in the program ?",
    features: [
      "Fundamentals of Digital Marketing",
      "SEO Fundamentals",
      "Social Media Marketing",
      "Marketing Automation",
    ],
  },
  {
    title: "Ethical Hacking",
    description: "What's included in the program ?",
    features: [
      "Ethical Hacking Basics",
      "Network Security",
      "Penetration Testing",
      "Cybersecurity Fundamentals",
    ],
  },
  {
    title: "Node Development",
    description: "What's included in the program ?",
    features: [
      "Node.js Basics",
      "Express.js",
      "RESTful APIs",
      "MongoDB Integration",
    ],
  },
  {
    title: "React",
    description: "What's included in the program ?",
    features: [
      "React Basics",
      "State Management with Redux",
      "React Router",
      "Hooks and Context API",
    ],
  },
  {
    title: "Frontend",
    description: "What's included in the program ?",
    features: [
      "HTML5 and CSS3",
      "Responsive Web Design",
      "JavaScript Fundamentals",
      "CSS Preprocessors",
    ],
  },
  {
    title: "Project Management",
    description: "What's included in the program ?",
    features: [
      "Project Planning",
      "Risk Management",
      "Agile Methodologies",
      "Team Collaboration Tools",
    ],
  },
  {
    title: "Photography",
    description: "What's included in the program ?",
    features: [
      "Understanding Camera Settings",
      "Composition Techniques",
      "Image Editing with Adobe Lightroom",
      "Photography Styles",
    ],
  },
];

const exploreProgCards = document.getElementById("exploreProgCards"); //Card container

cards.forEach((card, index) => {
  //Card Mapping
  const exploreProgCard = document.createElement("div");
  exploreProgCard.className =
    "explore_prog_card items-center modal-open transition-all duration-300 ease-out";
  exploreProgCard.setAttribute("data-modal", `modal-${index + 1}`);

  const img = document.createElement("img");
  img.className = "w-15 h-20";
  img.src = `/media/image.jpg`;
  img.alt = "";

  const title = document.createElement("h3");
  title.className = "text-white font-bold mt-6 text-lg";
  title.textContent = card.title;

  const description = document.createElement("p");
  description.className = "text-white font-semibold text-sm";
  description.textContent = "See Program->";

  exploreProgCard.appendChild(img);
  exploreProgCard.appendChild(title);
  exploreProgCard.appendChild(description);

  const modal = document.createElement("div");
  modal.className =
    "modal shadow-md shadow-black/90 ring-1 hidden transition-all duration-300 ease-out";
  modal.id = `modal-${index + 1}`;

  const modalHeading = document.createElement("div");
  modalHeading.className = "modal-heading";

  const modalTitle = document.createElement("h1");
  modalTitle.id = `modal-title-${index + 1}`;
  modalTitle.textContent = card.title;

  const modalClose = document.createElement("i");
  modalClose.className = "fa-solid fa-xmark cursor-pointer modal-close";

  const hr = document.createElement("hr");

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const modalDescription = document.createElement("h1");
  modalDescription.id = `modal-description-${index + 1}`;
  modalDescription.textContent = card.description;

  const ul = document.createElement("ul");

  card.features.forEach((feature, i) => {
    const li = document.createElement("li");
    li.id = `modal-feature${i + 1}-${index + 1}`;
    li.textContent = feature;
    ul.appendChild(li);
  });

  modalContent.appendChild(modalDescription);
  modalContent.appendChild(ul);

  const button = document.createElement("button");
  const a = document.createElement("a");
  a.href = "/courses.html";
  a.className = "underline-none";
  a.textContent = "See Details ";
  const i = document.createElement("i");
  i.className = "fa-solid fa-arrow-up-right-from-square";
  a.appendChild(i);
  button.appendChild(a);

  modal.appendChild(modalHeading);
  modalHeading.appendChild(modalTitle);
  modalHeading.appendChild(modalClose);
  modal.appendChild(hr);
  modal.appendChild(modalContent);
  modal.appendChild(button);

  exploreProgCards.appendChild(exploreProgCard);
  exploreProgCards.appendChild(modal);
});

dropdownBtn.addEventListener("click", () => {
  dropdownElmnts.classList.toggle("active");
});

var crsr = document.querySelectorAll(".diamond_img");

function moveImagesTowardsCursor() {
  window.addEventListener("mousemove", function (event) {
    crsr.forEach(function (elem) {
      var rect = elem.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;
      var distanceX = event.clientX - centerX;
      var distanceY = event.clientY - centerY;

      var moveX = distanceX * 0.05;
      var moveY = distanceY * 0.05;

      elem.style.transform = "translate(" + moveX + "px, " + moveY + "px)";
    });
  });
}

const openModal = document.querySelectorAll(".modal-open");

openModal.forEach(function (card) {
  card.onclick = function () {
    // var modal = card.getAttribute("data-modal");
    var modalId = card.getAttribute("data-modal");
    var modal = document.getElementById(modalId);
    modal.classList.add("show");

    document.getElementById(modal).style.display = "block";
  };
});

const closeBtn = document.querySelectorAll(".modal-close");

closeBtn.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.closest(".modal");
    modal.classList.remove("show"); // Remove show class to hide the modal
  };
});

moveImagesTowardsCursor();

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const sectionTs = document.getElementById("sectionTs");
  const footer = document.querySelector("footer");

  const sectionTop = sectionTs.getBoundingClientRect().top;
  const footerTop = footer.getBoundingClientRect().top;

  if (sectionTop <= navbar.offsetHeight) {
    navbar.classList.add("nav_bg_changed");
    navbar.classList.remove("navbar__main");
  } else {
    navbar.classList.remove("nav_bg_changed");
    navbar.classList.add("navbar__main");
  }

  if (footerTop <= navbar.offsetHeight) {
    navbar.style.position = "";
  } else {
    navbar.style.position = "sticky";
  }
});

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const mq1 = document.getElementById("mq1");
const mq2 = document.getElementById("mq2");
const mq3 = document.getElementById("mq3");
const mq4 = document.getElementById("mq4");

const feedbackForm = document.querySelector(".feedback-form");
const answerForm = document.querySelector(".answer-form");

const faqQuestions = document.querySelectorAll(".faq-question");
const answerFaq = document.getElementById("answer-faq");
const mobileFaq = document.getElementById("m-answer-faq");
const mobileAnswerForm = document.querySelector(".mobile-answer-form");
const mobileFeedbackForm = document.querySelector(".mobile-feedback-form");

q1.addEventListener("click", () => {
  answerFaq.innerHTML = `TS Bridge Edu is a community where you can learn skills, network with smart people, and find work.
  Join the WhatsApp Community to find all these opportunities.`;
  if (!feedbackForm.classList.contains("hidden")) {
    feedbackForm.classList.add("hidden");
  }
  if (feedbackForm.classList.contains("hidden")) {
    answerForm.classList.remove("hidden");
  }
});

mq1.addEventListener("click", () => {
  mobileFaq.innerHTML = `TS Bridge Edu is a community where you can learn skills, network with smart people, and find work.
  Join the WhatsApp Community to find all these opportunities.`;
  if (!mobileFeedbackForm.classList.contains("hidden")) {
    mobileFeedbackForm.classList.add("hidden");
  }

  if (mobileFeedbackForm.classList.contains("hidden")) {
    mobileAnswerForm.classList.remove("hidden");
  }
});

q2.addEventListener("click", () => {
  answerFaq.innerHTML = `No TS Bridge Edu is completely free.`;
  if (!feedbackForm.classList.contains("hidden")) {
    feedbackForm.classList.add("hidden");
  }

  if (feedbackForm.classList.contains("hidden")) {
    answerForm.classList.remove("hidden");
  }
});

mq2.addEventListener("click", () => {
  mobileFaq.innerHTML = `No TS Bridge Edu is completely free.`;

  if (!mobileFeedbackForm.classList.contains("hidden")) {
    mobileFeedbackForm.classList.add("hidden");
  }

  if (mobileFeedbackForm.classList.contains("hidden")) {
    mobileAnswerForm.classList.remove("hidden");
  }
});

q3.addEventListener("click", () => {
  answerFaq.innerHTML = `It's simple. Join our WhatsApp Community. Fill the internship form as per your skills and interest. Have a screening session. Congrats!`;
  if (!feedbackForm.classList.contains("hidden")) {
    feedbackForm.classList.add("hidden");
  }

  if (feedbackForm.classList.contains("hidden")) {
    answerForm.classList.remove("hidden");
  }
});

mq3.addEventListener("click", () => {
  mobileFaq.innerHTML = `It's simple. Join our WhatsApp Community. Fill the internship form as per your skills and interest. Have a screening session. Congrats!`;
  if (!mobileFeedbackForm.classList.contains("hidden")) {
    mobileFeedbackForm.classList.add("hidden");
  }

  if (mobileFeedbackForm.classList.contains("hidden")) {
    mobileAnswerForm.classList.remove("hidden");
  }
});

q4.addEventListener("click", () => {
  answerFaq.innerHTML = `It's simple. Fill the requirement form.`;
  if (!feedbackForm.classList.contains("hidden")) {
    feedbackForm.classList.add("hidden");
  }

  if (feedbackForm.classList.contains("hidden")) {
    answerForm.classList.remove("hidden");
  }
});

mq4.addEventListener("click", () => {
  mobileFaq.innerHTML = `It's simple. Fill the requirement form.`;

  if (!mobileFeedbackForm.classList.contains("hidden")) {
    mobileFeedbackForm.classList.add("hidden");
  }

  if (mobileFeedbackForm.classList.contains("hidden")) {
    mobileAnswerForm.classList.remove("hidden");
  }
});

document.getElementById("q5").addEventListener("click", function () {
  feedbackForm.classList.toggle("hidden");
  if (!feedbackForm.classList.contains("hidden")) {
    answerForm.classList.toggle("hidden");
  }
});

document.getElementById("mq5").addEventListener("click", function () {
  mobileFeedbackForm.classList.toggle("hidden");
  if (!mobileFeedbackForm.classList.contains("hidden")) {
    mobileAnswerForm.classList.toggle("hidden");
  }
});

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    faqQuestions.forEach((q) => q.classList.remove("active"));
    question.classList.add("active");
  });
});
