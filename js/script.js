// Плавная прокрутка

const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            e.preventDefault();
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header-container').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
        }
    }
}

// Переключение темы

var button = document.getElementById('theme-button');
var link = document.getElementById('theme-link');

button.addEventListener('click', changeTheme);

function changeTheme(e) {
    e.preventDefault();
    
    let lightTheme = 'css/light.css';
    let darkTheme = 'css/dark.css';

    var currTheme = link.getAttribute('href');
    var theme = '';

    if (currTheme == lightTheme) {
        currTheme = darkTheme;
        theme = 'dark';
    } else {
        currTheme = lightTheme;
        theme = 'light';
    }

    link.setAttribute('href', currTheme);
}