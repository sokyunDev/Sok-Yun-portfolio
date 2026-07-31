// ==============================
// PORTFOLIO JAVASCRIPT
// ==============================

// ---------- Smooth Scroll ----------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ---------- Navbar Shadow ----------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "#0b1120";
        navbar.style.boxShadow = "0 10px 20px rgba(0,0,0,.3)";

    } else {

        navbar.style.background = "#0f172a";
        navbar.style.boxShadow = "none";

    }

});

// ---------- Active Navigation ----------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ---------- Reveal Animation ----------

const revealElements = document.querySelectorAll(

    ".skill-card, .project-card, .service-card, #about img, .contact-info"

);

const reveal = () => {

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".8s";

});

window.addEventListener("scroll", reveal);

reveal();

// ---------- Scroll To Top Button ----------

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style, {

    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "50%",
    background: "#38bdf8",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    display: "none",
    zIndex: "999",
    transition: ".3s"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ---------- Typing Effect ----------

const typingElement = document.querySelector(".hero h3");

const words = [

    "Front-End Web Developer",
    "Computer Science Student",
    "Freelance Web Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(type, 1200);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(type, deleting ? 50 : 100);

}

type();

// ---------- Contact Form ----------

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

// ---------- Console Message ----------

console.log(

"%cWelcome to Sok Yun's Portfolio",

"color:#38bdf8;font-size:18px;font-weight:bold;"

);