// Mobile navigation funtionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuBtn = document.querySelector('.burger-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    // Toggle nav open/close
    function toggleMobileNav() {
        burgerMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        body.classList.toggle('mobile-nav-open');
    }

    if (burgerMenuBtn && mobileNav) {
        // Burger button click
        burgerMenuBtn.addEventListener('click', toggleMobileNav);

        // Close nav when clicking links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-call-back-btn');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerMenuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
                body.classList.remove('mobile-nav-open');
            });
        });

        // Close nav when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mobileNav.contains(event.target);
            const isClickOnBurger = burgerMenuBtn.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnBurger && mobileNav.classList.contains('active')) {
                burgerMenuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
                body.classList.remove('mobile-nav-open');
            }
        });

        // Close nav on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && mobileNav.classList.contains('active')) {
                burgerMenuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
                body.classList.remove('mobile-nav-open');
            }
        });

        // Close nav on resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
                burgerMenuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
                body.classList.remove('mobile-nav-open');
            }
        });
    }
});

// Prevent scroll when nav open
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        body.mobile-nav-open {
            overflow: hidden;
            position: fixed;
            width: 100%;
        }
    `;
    document.head.appendChild(style);
});
