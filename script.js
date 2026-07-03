// ScrollReveal Initialisierung
ScrollReveal().reveal('.about-section, .locations-section, .menu-section, .contact-section', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200,
    easing: 'ease-in-out',
    reset: true
});

// Smooth Scroll für die Überschrift
document.querySelector('.überschrift').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const popup = document.getElementById("popup");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

// Popup schließen, wenn auf den Hintergrund geklickt wird
popup.addEventListener("click", function (e) {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

const analysisPopup = document.getElementById("analysisPopup");
const openAnalysis = document.getElementById("openAnalysis");
const closeAnalysis = document.querySelector(".close-analysis");

openAnalysis.addEventListener("click", () => {
    analysisPopup.style.display = "flex";
});

closeAnalysis.addEventListener("click", () => {
    analysisPopup.style.display = "none";
});

analysisPopup.addEventListener("click", (e) => {
    if (e.target === analysisPopup) {
        analysisPopup.style.display = "none";
    }
});