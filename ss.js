document.addEventListener("DOMContentLoaded", function () {
    // Écriture automatique du nom, prénom et profession
    function typeEffect(element, text, delay = 100) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, delay);
            }
        }
        typing();
    }

    let nomElement = document.getElementById("nom");
    let professionElement = document.getElementById("profession");

    typeEffect(nomElement, "ADJE ADJE ANGE EMMANUEL . S", 120);
    setTimeout(() => {
        typeEffect(professionElement, "Développeur FullStack & Web Design", 100);
    }, 2000);

    // Effet d'apparition progressive des projets
    let projets = document.querySelectorAll(".projet");
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "fadeInUp 1s forwards";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    projets.forEach(projet => {
        observer.observe(projet);
    });
});
