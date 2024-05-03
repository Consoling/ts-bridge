const dropdownBtn = document.getElementById("nav__dpdn_btn");
const dropdownElmnts = document.getElementById("nav_dpdn_elmnts_active");

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

// const closeBtn = document.querySelectorAll(".modal-close");

// closeBtn.forEach(function (btn) {
//   btn.onclick = function () {
//     var modal = (btn.closest(".modal").style.display = "none");
//   };
// });

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
  // const homeNavbar = document.getElementById("homeNavbar");
  // const homeFooter = document.getElementById("homeFooter");

  const sectionTop = sectionTs.getBoundingClientRect().top;
  const footerTop = footer.getBoundingClientRect().top;
  // const homeFooterTop = homeFooter.getBoundingClientRect().top;

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




const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');


const  answerFaq = document.getElementById('answer-faq');

q1.addEventListener('click', ()=> {
  answerFaq.innerHTML = `Bluelearn is a community where you can learn skills, network with smart people, and find work.
  Join the WhatsApp Community to find all these opportunities.`
})
q2.addEventListener('click', ()=> {
  answerFaq.innerHTML = `No TS Bridge Edu is completely free.`
})
q3.addEventListener('click', ()=> {
  answerFaq.innerHTML = `It's simple. Join our WhatsApp Community. Fill the internship form as per your skills and interest. Have a screening session. Congrats!`
})