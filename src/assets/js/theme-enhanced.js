/**
 * Professional Enhanced Salla Theme - Complete Feature Pack
 * Advanced JavaScript for all interactive features
 */

class EnhancedTheme {
    constructor() {
        this.init();
    }

    init() {
        this.initFAQAccordion();
        this.initFloatingButtons();
        this.initCountdownTimer();
        this.initNewsletterPopup();
        this.initStickyAddToCart();
        this.initAnimatedCounters();
        this.initEnhancedSearch();
        this.initProductQuickActions();
        this.initScrollToTop();
        this.initDarkModeToggle();
        this.initSmoothAnimations();
    }

    /**
     * FAQ Accordion Functionality
     */
    initFAQAccordion() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // Close all other FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });
    }

    /**
     * Floating Action Buttons
     */
    initFloatingButtons() {
        // WhatsApp Button
        const whatsappBtn = document.querySelector('.floating-btn--whatsapp');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => {
                const phone = '966500000000'; // Replace with your WhatsApp number
                const message = 'مرحبا! أريد الاستفسار عن منتجاتكم';
                const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
            });
        }

        // Scroll to Top Button
        const scrollTopBtn = document.querySelector('.floating-btn--scroll-top');
        if (scrollTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.style.display = 'flex';
                } else {
                    scrollTopBtn.style.display = 'none';
                }
            });

            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Chat Button
        const chatBtn = document.querySelector('.floating-btn--chat');
        if (chatBtn) {
            chatBtn.addEventListener('click', () => {
                // Implement your chat functionality here
                console.log('Chat button clicked');
            });
        }
    }

    /**
     * Countdown Timer
     */
    initCountdownTimer() {
        const countdownElements = document.querySelectorAll('.countdown-timer');
        
        countdownElements.forEach(element => {
            const endDate = element.dataset.endDate || '2024-12-31T23:59:59';
            const endTime = new Date(endDate).getTime();
            
            const updateCountdown = () => {
                const now = new Date().getTime();
                const distance = endTime - now;
                
                if (distance < 0) {
                    element.innerHTML = '<div class="countdown-expired">انتهى العرض!</div>';
                    return;
                }
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                const countdownHTML = `
                    <div class="countdown-grid">
                        <div class="countdown-item">
                            <span class="countdown-value">${days}</span>
                            <span class="countdown-label">أيام</span>
                        </div>
                        <div class="countdown-item">
                            <span class="countdown-value">${hours}</span>
                            <span class="countdown-label">ساعات</span>
                        </div>
                        <div class="countdown-item">
                            <span class="countdown-value">${minutes}</span>
                            <span class="countdown-label">دقائق</span>
                        </div>
                        <div class="countdown-item">
                            <span class="countdown-value">${seconds}</span>
                            <span class="countdown-label">ثواني</span>
                        </div>
                    </div>
                `;
                
                element.innerHTML = countdownHTML;
            };
            
            updateCountdown();
            setInterval(updateCountdown, 1000);
        });
    }

    /**
     * Newsletter Popup
     */
    initNewsletterPopup() {
        const popup = document.querySelector('.newsletter-popup');
        const backdrop = document.querySelector('.newsletter-backdrop');
        const closeBtn = document.querySelector('.newsletter-close');
        const form = document.querySelector('.newsletter-form');
        
        if (!popup) return;
        
        // Show popup after 5 seconds
        setTimeout(() => {
            if (!localStorage.getItem('newsletterShown')) {
                popup.classList.add('active');
                backdrop.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }, 5000);
        
        // Close popup
        const closePopup = () => {
            popup.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.style.overflow = '';
            localStorage.setItem('newsletterShown', 'true');
        };
        
        if (closeBtn) {
            closeBtn.addEventListener('click', closePopup);
        }
        
        if (backdrop) {
            backdrop.addEventListener('click', closePopup);
        }
        
        // Handle form submission
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = form.querySelector('input[type="email"]').value;
                
                // Here you would typically send the email to your backend
                console.log('Newsletter signup:', email);
                
                // Show success message
                popup.innerHTML = `
                    <div class="newsletter-success">
                        <h3>شكراً لك!</h3>
                        <p>تم الاشتراك بنجاح في النشرة الإخبارية</p>
                        <button class="btn" onclick="this.parentElement.parentElement.classList.remove('active')">إغلاق</button>
                    </div>
                `;
                
                localStorage.setItem('newsletterShown', 'true');
            });
        }
    }

    /**
     * Sticky Add to Cart Bar
     */
    initStickyAddToCart() {
        const stickyBar = document.querySelector('.sticky-add-to-cart');
        if (!stickyBar) return;
        
        // Show sticky bar when scrolling down on product page
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const productInfo = document.querySelector('.product-info');
            
            if (productInfo) {
                const productBottom = productInfo.offsetTop + productInfo.offsetHeight;
                
                if (scrollTop > productBottom - 100) {
                    stickyBar.classList.add('active');
                } else {
                    stickyBar.classList.remove('active');
                }
            }
        });
        
        // Handle add to cart button in sticky bar
        const addToCartBtn = stickyBar.querySelector('.btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                // Trigger the main add to cart functionality
                const mainAddToCartBtn = document.querySelector('.product-add-to-cart .btn');
                if (mainAddToCartBtn) {
                    mainAddToCartBtn.click();
                }
            });
        }
    }

    /**
     * Animated Counters
     */
    initAnimatedCounters() {
        const counters = document.querySelectorAll('.counter-number');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.dataset.target || '1000');
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };
            
            updateCounter();
        };
        
        // Intersection Observer to trigger animation when counter is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    /**
     * Enhanced Search with Suggestions
     */
    initEnhancedSearch() {
        const searchInput = document.querySelector('.search-input');
        const suggestions = document.querySelector('.search-suggestions');
        
        if (!searchInput || !suggestions) return;
        
        let searchTimeout;
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            
            clearTimeout(searchTimeout);
            
            if (query.length < 2) {
                suggestions.classList.remove('active');
                return;
            }
            
            searchTimeout = setTimeout(() => {
                this.fetchSearchSuggestions(query, suggestions);
            }, 300);
        });
        
        // Close suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
                suggestions.classList.remove('active');
            }
        });
    }

    /**
     * Fetch search suggestions
     */
    fetchSearchSuggestions(query, suggestionsContainer) {
        // This would typically make an API call to your backend
        // For now, we'll simulate with mock data
        const mockSuggestions = [
            { id: 1, name: 'iPhone 15 Pro', price: '4,999 ريال', image: '/images/placeholder.png' },
            { id: 2, name: 'Samsung Galaxy S24', price: '3,999 ريال', image: '/images/placeholder.png' },
            { id: 3, name: 'MacBook Pro M3', price: '8,999 ريال', image: '/images/placeholder.png' }
        ].filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
        
        if (mockSuggestions.length > 0) {
            const suggestionsHTML = mockSuggestions.map(item => `
                <div class="suggestion-item" data-product-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}" class="suggestion-image">
                    <div class="suggestion-content">
                        <div class="suggestion-title">${item.name}</div>
                        <div class="suggestion-price">${item.price}</div>
                    </div>
                </div>
            `).join('');
            
            suggestionsContainer.innerHTML = suggestionsHTML;
            suggestionsContainer.classList.add('active');
            
            // Handle suggestion clicks
            suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    const productId = item.dataset.productId;
                    window.location.href = `/products/${productId}`;
                });
            });
        } else {
            suggestionsContainer.classList.remove('active');
        }
    }

    /**
     * Product Quick Actions
     */
    initProductQuickActions() {
        const quickActionBtns = document.querySelectorAll('.quick-action-btn');
        
        quickActionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const action = btn.dataset.action;
                const productId = btn.dataset.productId;
                
                switch (action) {
                    case 'wishlist':
                        this.toggleWishlist(productId, btn);
                        break;
                    case 'quick-view':
                        this.openQuickView(productId);
                        break;
                    case 'compare':
                        this.addToCompare(productId, btn);
                        break;
                }
            });
        });
    }

    /**
     * Toggle wishlist
     */
    toggleWishlist(productId, btn) {
        // This would typically make an API call
        const isInWishlist = btn.classList.contains('active');
        
        if (isInWishlist) {
            btn.classList.remove('active');
            btn.innerHTML = '<i class="sicon-heart"></i>';
            this.showNotification('تم إزالة المنتج من المفضلة', 'info');
        } else {
            btn.classList.add('active');
            btn.innerHTML = '<i class="sicon-heart-fill"></i>';
            this.showNotification('تم إضافة المنتج إلى المفضلة', 'success');
        }
    }

    /**
     * Open quick view modal
     */
    openQuickView(productId) {
        // This would typically load product data and show a modal
        console.log('Opening quick view for product:', productId);
        this.showNotification('جاري تحميل المنتج...', 'info');
    }

    /**
     * Add to compare
     */
    addToCompare(productId, btn) {
        const isInCompare = btn.classList.contains('active');
        
        if (isInCompare) {
            btn.classList.remove('active');
            this.showNotification('تم إزالة المنتج من المقارنة', 'info');
        } else {
            btn.classList.add('active');
            this.showNotification('تم إضافة المنتج إلى المقارنة', 'success');
        }
    }

    /**
     * Scroll to Top functionality
     */
    initScrollToTop() {
        const scrollTopBtn = document.querySelector('.scroll-to-top');
        if (!scrollTopBtn) return;
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * Dark Mode Toggle
     */
    initDarkModeToggle() {
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        if (!darkModeToggle) return;
        
        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        darkModeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update toggle button icon
            const icon = darkModeToggle.querySelector('i');
            if (icon) {
                icon.className = newTheme === 'dark' ? 'sicon-moon' : 'sicon-sun';
            }
        });
    }

    /**
     * Smooth Animations on Scroll
     */
    initSmoothAnimations() {
        const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-slide-in-right, .animate-slide-in-left');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) translateX(0)';
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(element);
        });
    }

    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <div class="notification__message">${message}</div>
                <button class="notification__close">&times;</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
        
        // Close button
        const closeBtn = notification.querySelector('.notification__close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
    }

    /**
     * Utility: Debounce function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Utility: Throttle function
     */
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EnhancedTheme();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedTheme;
} 