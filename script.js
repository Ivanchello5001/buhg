// Мобильное меню
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    navLinks.classList.toggle('active');

    // Анимация иконки бургер-меню
    const spans = mobileMenu.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');

        // Возвращаем иконку бургер-меню в исходное состояние
        const spans = mobileMenu.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('#mobile-menu') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');

        // Возвращаем иконку бургер-меню в исходное состояние
        const spans = mobileMenu.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Анимация появления элементов при скролле
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    // Проверяем при загрузке и при скролле
    checkFade();
    window.addEventListener('scroll', checkFade);

    // Принудительно показываем все элементы в подвале
    window.addEventListener('load', function() {
        const footerElements = document.querySelectorAll('footer .fade-in');
        footerElements.forEach(element => {
            element.classList.add('visible');
        });

        setTimeout(checkFade, 300);
    });

    setTimeout(checkFade, 500);
});
