const headerLinks = document.querySelectorAll('.header__link');
headerLinks.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const el = document.getElementById(item.getAttribute('data-header-link'));
        el.scrollIntoView({behavior: 'smooth', block: 'center'});
    })
});

const footerLinks = document.querySelectorAll('.footer__link');
footerLinks.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const el = document.getElementById(item.getAttribute('data-header-link'));
        el.scrollIntoView({behavior: 'smooth', block: 'center'});
    })
});