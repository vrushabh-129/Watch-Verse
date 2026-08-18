// ================= MOBILE MENU =================

function toggleMenu() {
    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("active");
}


// ================= ADD TO CART =================

function addToCart(watchName) {

    alert(watchName + " has been added to your cart! 🛒");

}


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received. ⌚"
    );

    contactForm.reset();

});


// ================= NAVIGATION =================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navbar = document.querySelector(".navbar");

        navbar.classList.remove("active");

    });

});
