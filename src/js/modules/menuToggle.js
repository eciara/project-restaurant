const menuToggle = function () {
    const btn = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('.navbar__list');
   const btnMobile = document.querySelector('.dropdown__toggle--icon');
    const subMenu = document.querySelector('.navbar-nav');

    btn.addEventListener('click', function () {
        menu.classList.toggle('fadeIn');
    }, false);


    btnMobile.addEventListener('click', function () {
      menu.classList.toggle('fadeInMenu');
    }, false);

};

export default menuToggle;
