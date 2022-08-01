var typed = new Typed(".auto-input", {
    strings: ["Software Development", "Web Development", "Android Development", "Video Editing", "Freelancing"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

gsap.from(".bar abbr", {
    scrollTrigger: ".bar",
    left: 0,
    ease: Power2.easeInOut,
    duration: 3,
    stagger: 0.1
});

gsap.from(".bar span", {
    scrollTrigger: ".bar",
    width: "0px",
    ease: Power2.easeInOut,
    duration: 3,
    stagger: 0.1
});

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}