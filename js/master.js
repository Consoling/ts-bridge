const dropdownBtn = document.getElementById('nav__dpdn_btn');
const dropdownElmnts = document.getElementById('nav__dpdn_elmnts__active');

dropdownBtn.addEventListener('click',() => {
   dropdownElmnts.classList.toggle('active');
  
} )

document.querySelectorAll(".diamond_img")
.forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            // height: 120%,
            ease: Power1,
            top: dets.clientY,
            left: dets.clientX
        })
    })
})

var crsr = document.querySelectorAll(".diamond_img");

function moveImagesTowardsCursor() {
    window.addEventListener("mousemove", function(event) {
        crsr.forEach(function(elem) {

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

moveImagesTowardsCursor();