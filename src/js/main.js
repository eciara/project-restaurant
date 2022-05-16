// import fslightbox
require('fslightbox');

// import Glide.js
// import Glide from '@glidejs/glide';

// some bootstrap scripts needs popper
import '@popperjs/core';

// Import just what we need
// import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';

// custom IP modules
//import cookies from './modules/cookies';
import scrollTop from './modules/scrollTop';
import menuToggle from './modules/menuToggle';

// cookies notification handler
//cookies();

// menu handler
menuToggle();

// scroll to top button handler
scrollTop();

const main = document.querySelector('main');

if (main.classList.contains("main")) {
    const form = document.getElementById("form");
    if (form) {
        const btnSubmit = document.querySelector('#submit');
        btnSubmit.addEventListener('click', (e) => {
            e.preventDefault();
        })
    }
}
