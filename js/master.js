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
    var modal = card.getAttribute("data-modal");

    document.getElementById(modal).style.display = "block";
  };
});

const closeBtn = document.querySelectorAll(".modal-close");

closeBtn.forEach(function (btn) {
  btn.onclick = function () {
    var modal = (btn.closest(".modal").style.display = "none");
  };
});

moveImagesTowardsCursor();

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const sectionTs = document.getElementById("sectionTs");
  const footer = document.querySelector("footer");
  const homeNavbar = document.getElementById("homeNavbar");
  const homeFooter = document.getElementById("homeFooter");

  const sectionTop = sectionTs.getBoundingClientRect().top;
  const footerTop = footer.getBoundingClientRect().top;
  const homeFooterTop = homeFooter.getBoundingClientRect().top;

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

  if (homeFooterTop <= homeNavbar.offsetHeight) {
    homeNavbar.style.position = "";
  } else {
    homeNavbar.style.position = "sticky";
  }
});
