const initApp = () => {
    const mobileNavButton = document.getElementById('mobile-nav-button');
    const mobileNav = document.getElementById('mobile-menu');

    const toggleMobileNav = () => {
        mobileNav.classList.toggle('hidden');
        mobileNav.classList.toggle('flex');
    }

    mobileNavButton.addEventListener('click', toggleMobileNav);
    mobileNav.addEventListener('click', toggleMobileNav);

}

document.addEventListener('DOMContentLoaded', initApp);