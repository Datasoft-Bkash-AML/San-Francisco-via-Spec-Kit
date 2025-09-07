// Enhanced JavaScript for San Francisco Demo with Design Requirements

document.addEventListener('DOMContentLoaded', function() {
    console.log('San Francisco Demo loaded with enhanced design system!');

    // Enhanced Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card') || this.closest('.deal-card');
            const productName = productCard.querySelector('h4').textContent;
            const productPrice = productCard.querySelector('.current-price')?.textContent || 'N/A';

            // Enhanced feedback with price
            showNotification(`Added "${productName}" (${productPrice}) to cart!`, 'success');
            animateButton(this);
        });
    });

    // Enhanced Newsletter form with validation
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            if (validateEmail(email)) {
                showNotification('Thank you for subscribing!', 'success');
                emailInput.value = '';
                animateButton(this.querySelector('button'));
            } else {
                showNotification('Please enter a valid email address.', 'error');
                emailInput.focus();
            }
        });
    }

    // Enhanced Header actions with better feedback
    const searchBtn = document.querySelector('.search-btn');
    const accountBtn = document.querySelector('.account-btn');
    const wishlistBtn = document.querySelector('.wishlist-btn');
    const cartBtn = document.querySelector('.cart-btn');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => showNotification('Search functionality coming soon!', 'info'));
    }

    if (accountBtn) {
        accountBtn.addEventListener('click', () => showNotification('Account functionality coming soon!', 'info'));
    }

    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            const isActive = this.classList.contains('active');
            showNotification(isActive ? 'Added to wishlist!' : 'Removed from wishlist!', 'success');
            animateButton(this);
        });
    }

    if (cartBtn) {
        cartBtn.addEventListener('click', () => showNotification('Cart functionality coming soon!', 'info'));
    }

    // Enhanced Smooth scrolling for anchor links
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

    // Enhanced Product card hover effects with image swap
    const productCards = document.querySelectorAll('.product-card, .deal-card');
    productCards.forEach(card => {
        const images = card.querySelectorAll('.product-image img');
        const actions = card.querySelector('.product-actions');

        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';

            // Image swap effect
            if (images.length > 1) {
                images[0].style.opacity = '0';
                images[1].style.opacity = '1';
            }

            // Show actions
            if (actions) {
                actions.style.opacity = '1';
                actions.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';

            // Reset image swap
            if (images.length > 1) {
                images[0].style.opacity = '1';
                images[1].style.opacity = '0';
            }

            // Hide actions
            if (actions) {
                actions.style.opacity = '0';
                actions.style.transform = 'translate(-50%, -50%) scale(0.8)';
            }
        });
    });

    // Enhanced Category card hover effects with zoom
    const categoryCards = document.querySelectorAll('.category-card, .category-full-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-4px)';
            this.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        });
    });

    // Enhanced Flash deals countdown timer with urgency styling
    function startCountdown() {
        const countdownElement = document.querySelector('.countdown-timer .timer');
        if (!countdownElement) return;

        // Set end time to 24 hours from now
        const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = endTime - now;

            if (distance < 0) {
                countdownElement.innerHTML = "EXPIRED";
                countdownElement.style.background = 'rgba(255,0,0,0.3)';
                countdownElement.style.color = '#ff4444';
                return;
            }

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            // Add urgency styling when less than 1 hour remains
            if (hours === 0 && minutes < 60) {
                countdownElement.style.background = 'rgba(255,0,0,0.3)';
                countdownElement.style.color = '#ff4444';
                countdownElement.style.animation = 'pulse 1s infinite';
            }
        }

        // Update immediately
        updateCountdown();

        // Update every second
        setInterval(updateCountdown, 1000);
    }

    // Start countdown when page loads
    startCountdown();

    // Enhanced Deal card hover effects
    const dealCards = document.querySelectorAll('.deal-card');
    dealCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
        });
    });

    // Enhanced Journal post hover effects with lift
    const journalPosts = document.querySelectorAll('.journal-post');
    journalPosts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
        });

        post.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        });
    });

    // Enhanced Promo card hover effects
    const promoCards = document.querySelectorAll('.promo-card');
    promoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        });
    });

    // Enhanced CTA buttons with better hover effects
    const ctaButtons = document.querySelectorAll('.cta-button, .ad-btn, .explore-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 16px rgba(240, 78, 35, 0.3)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Utility Functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            zIndex: '10000',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: '500',
            opacity: '0',
            transform: 'translateY(-20px)',
            transition: 'all 0.3s ease'
        });

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    function animateButton(button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }

    // Add CSS for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        .notification {
            pointer-events: none;
        }

        .wishlist-btn.active {
            color: #f04e23 !important;
        }

        .wishlist-btn.active i::before {
            content: "\\f004"; /* solid heart */
        }
    `;
    document.head.appendChild(style);
});