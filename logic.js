let nemuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classlist.toggle('fa-xmark');
    navbar.classlist.toggle('active');
}
// scroll section active link
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    section.foreach(sec => {
        let top = window.scrollv;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=;' + id + ']').classlist.add('active');
            });
        };
    });

    // sticky navbar
    let navbar = document.querySelector('header');
    Headers.classlist.toggle('sticky', window.scrollv > 100);

    // remove toggle icon 
    menuIcon.classlist.remove('fa-xmark');
    navbar.classList.remove('active');
};
// scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-cotent , heading ', { origin: 'top' });
ScrollReveal().reveal('.home-img , services-container,protfolio-box ,contact form ', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1 , .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p , .about-content', { origin: 'right' });
// typed js
const Typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'web devloper', 'Backend devloper'],
    typeSpeed: 70,
    backspeed: 70,
    backdelay: 1000,
    loop: true,
})