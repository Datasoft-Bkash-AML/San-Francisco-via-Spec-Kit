// Basic JavaScript for San Francisco Demo MVP

document.addEventListener('DOMContentLoaded', function() {
    console.log('San Francisco Demo loaded successfully!');

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h4').textContent;
            alert(`Added "${productName}" to cart!`);
        });
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with: ${email}`);
            this.reset();
        });
    }

    // Header actions (placeholder functionality)
    const searchBtn = document.querySelector('.search-btn');
    const accountBtn = document.querySelector('.account-btn');
    const wishlistBtn = document.querySelector('.wishlist-btn');
    const cartBtn = document.querySelector('.cart-btn');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => alert('Search functionality coming soon!'));
    }

    if (accountBtn) {
        accountBtn.addEventListener('click', () => alert('Account functionality coming soon!'));
    }

    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', () => alert('Wishlist functionality coming soon!'));
    }

    if (cartBtn) {
        cartBtn.addEventListener('click', () => alert('Cart functionality coming soon!'));
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Category card hover effects
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});