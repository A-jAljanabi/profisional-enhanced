/**
 * Professional Enhanced Salla Theme - Electronics Store
 * Enhanced JavaScript functionality for Twilight framework
 */

class ProfessionalEnhancedTheme {
    constructor() {
        this.init();
    }

    init() {
        this.initDarkMode();
        this.initSearch();
        this.initCart();
        this.initWishlist();
        this.initCompare();
        this.initProductCards();
        this.initVoiceSearch();
        this.initLazyLoading();
        this.initInfiniteScroll();
        this.initBackToTop();
        this.initMobileMenu();
        this.initHeroSlider();
        this.initTestimonialsSlider();
        this.initBrandsSlider();
        this.initSmoothScrolling();
        this.initAccessibility();
        this.initNewsletter();
        this.initSocialSharing();
        this.initLoyaltyProgram();
        this.initCountdownTimers();
        this.initStockNotifications();
        this.initLiveChat();
    }

    // Dark Mode Toggle
    initDarkMode() {
        const darkModeToggle = document.querySelector('[data-dark-mode-toggle]');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                const html = document.documentElement;
                const currentTheme = html.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                html.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                
                // Update toggle icon
                const icon = darkModeToggle.querySelector('i');
                if (icon) {
                    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
                }
            });
        }

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }

    // Advanced Search
    initSearch() {
        const searchInput = document.querySelector('[data-search-input]');
        const searchSuggestions = document.querySelector('[data-search-suggestions]');
        
        if (searchInput && searchSuggestions) {
            let searchTimeout;
            
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                const query = e.target.value.trim();
                
                if (query.length < 2) {
                    searchSuggestions.style.display = 'none';
                    return;
                }
                
                searchTimeout = setTimeout(() => {
                    this.performSearch(query);
                }, 300);
            });
            
            // Hide suggestions when clicking outside
            document.addEventListener('click', (e) => {
                if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
                    searchSuggestions.style.display = 'none';
                }
            });
        }
    }

    async performSearch(query) {
        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
            const data = await response.json();
            this.displaySearchResults(data);
        } catch (error) {
            console.error('Search error:', error);
        }
    }

    displaySearchResults(results) {
        const searchSuggestions = document.querySelector('[data-search-suggestions]');
        if (!searchSuggestions) return;
        
        // Clear previous results
        searchSuggestions.innerHTML = '';
        
        if (results.products && results.products.length > 0) {
            results.products.forEach(product => {
                const productElement = this.createSearchResultItem(product);
                searchSuggestions.appendChild(productElement);
            });
            searchSuggestions.style.display = 'block';
        }
    }

    createSearchResultItem(product) {
        const div = document.createElement('div');
        div.className = 'search-suggestion-item';
        div.innerHTML = `
            <a href="${product.url}" class="search-suggestion-link">
                <img src="${product.image}" alt="${product.name}" class="search-suggestion-image">
                <div class="search-suggestion-content">
                    <h4 class="search-suggestion-title">${product.name}</h4>
                    <p class="search-suggestion-price">${product.price}</p>
                </div>
            </a>
        `;
        return div;
    }

    // Cart Management
    initCart() {
        // AJAX Add to Cart
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-add-to-cart]')) {
                e.preventDefault();
                this.addToCart(e.target.dataset.productId, e.target.dataset.quantity || 1);
            }
        });

        // Cart quantity controls
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-cart-quantity-increase]')) {
                this.updateCartQuantity(e.target.dataset.itemId, 'increase');
            }
            if (e.target.matches('[data-cart-quantity-decrease]')) {
                this.updateCartQuantity(e.target.dataset.itemId, 'decrease');
            }
        });
    }

    async addToCart(productId, quantity) {
        try {
            const response = await fetch('/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ product_id: productId, quantity: quantity })
            });
            
            const data = await response.json();
            if (data.success) {
                this.updateCartCount(data.cart_count);
                this.showNotification('Product added to cart successfully!', 'success');
            }
        } catch (error) {
            console.error('Add to cart error:', error);
            this.showNotification('Failed to add product to cart', 'error');
        }
    }

    updateCartCount(count) {
        const cartCountElements = document.querySelectorAll('[data-cart-count]');
        cartCountElements.forEach(element => {
            element.textContent = count;
        });
    }

    // Wishlist Management
    initWishlist() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-wishlist-toggle]')) {
                e.preventDefault();
                this.toggleWishlist(e.target.dataset.productId);
            }
        });
    }

    async toggleWishlist(productId) {
        try {
            const response = await fetch('/api/wishlist/toggle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ product_id: productId })
            });
            
            const data = await response.json();
            if (data.success) {
                const button = document.querySelector(`[data-wishlist-toggle][data-product-id="${productId}"]`);
                if (button) {
                    button.classList.toggle('active', data.in_wishlist);
                    const icon = button.querySelector('i');
                    if (icon) {
                        icon.className = data.in_wishlist ? 'fas fa-heart' : 'far fa-heart';
                    }
                }
            }
        } catch (error) {
            console.error('Wishlist error:', error);
        }
    }

    // Product Comparison
    initCompare() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-compare-toggle]')) {
                e.preventDefault();
                this.toggleCompare(e.target.dataset.productId);
            }
        });
    }

    async toggleCompare(productId) {
        try {
            const response = await fetch('/api/compare/toggle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ product_id: productId })
            });
            
            const data = await response.json();
            if (data.success) {
                const button = document.querySelector(`[data-compare-toggle][data-product-id="${productId}"]`);
                if (button) {
                    button.classList.toggle('active', data.in_compare);
                }
            }
        } catch (error) {
            console.error('Compare error:', error);
        }
    }

    // Product Cards
    initProductCards() {
        // Quick view
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-quick-view]')) {
                e.preventDefault();
                this.openQuickView(e.target.dataset.productId);
            }
        });

        // Product image zoom
        const productImages = document.querySelectorAll('[data-product-image]');
        productImages.forEach(image => {
            image.addEventListener('mouseenter', () => {
                this.initImageZoom(image);
            });
        });
    }

    async openQuickView(productId) {
        try {
            const response = await fetch(`/api/product/${productId}/quick-view`);
            const data = await response.json();
            
            // Create modal with product data
            this.createQuickViewModal(data);
        } catch (error) {
            console.error('Quick view error:', error);
        }
    }

    // Voice Search
    initVoiceSearch() {
        const voiceSearchBtn = document.querySelector('[data-voice-search]');
        if (voiceSearchBtn && 'webkitSpeechRecognition' in window) {
            voiceSearchBtn.addEventListener('click', () => {
                this.startVoiceSearch();
            });
        }
    }

    startVoiceSearch() {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'ar-SA'; // Arabic language

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            const searchInput = document.querySelector('[data-search-input]');
            if (searchInput) {
                searchInput.value = transcript;
                searchInput.dispatchEvent(new Event('input'));
            }
        };

        recognition.start();
    }

    // Lazy Loading
    initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Infinite Scroll
    initInfiniteScroll() {
        let isLoading = false;
        let page = 1;

        const loadMoreObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isLoading) {
                    this.loadMoreProducts(page++);
                }
            });
        });

        const loadMoreTrigger = document.querySelector('[data-load-more]');
        if (loadMoreTrigger) {
            loadMoreObserver.observe(loadMoreTrigger);
        }
    }

    async loadMoreProducts(page) {
        try {
            isLoading = true;
            const response = await fetch(`/api/products?page=${page}`);
            const data = await response.json();
            
            if (data.products && data.products.length > 0) {
                this.appendProducts(data.products);
            }
        } catch (error) {
            console.error('Load more error:', error);
        } finally {
            isLoading = false;
        }
    }

    // Back to Top
    initBackToTop() {
        const backToTopBtn = document.querySelector('[data-back-to-top]');
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // Mobile Menu
    initMobileMenu() {
        const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        
        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                document.body.classList.toggle('mobile-menu-open');
            });
        }
    }

    // Hero Slider
    initHeroSlider() {
        const heroSlider = document.querySelector('[data-hero-slider]');
        if (heroSlider) {
            let currentSlide = 0;
            const slides = heroSlider.querySelectorAll('[data-slide]');
            const totalSlides = slides.length;

            const showSlide = (index) => {
                slides.forEach((slide, i) => {
                    slide.style.display = i === index ? 'block' : 'none';
                });
            };

            const nextSlide = () => {
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
            };

            // Auto-advance slides
            setInterval(nextSlide, 5000);
        }
    }

    // Testimonials Slider
    initTestimonialsSlider() {
        const testimonialsSlider = document.querySelector('[data-testimonials-slider]');
        if (testimonialsSlider) {
            // Implementation for testimonials slider
        }
    }

    // Brands Slider
    initBrandsSlider() {
        const brandsSlider = document.querySelector('[data-brands-slider]');
        if (brandsSlider) {
            // Implementation for brands slider
        }
    }

    // Smooth Scrolling
    initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Accessibility
    initAccessibility() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close modals
                document.querySelectorAll('[data-modal]').forEach(modal => {
                    modal.classList.remove('active');
                });
            }
        });

        // Focus management
        document.addEventListener('focusin', (e) => {
            if (e.target.matches('[data-focus-trap]')) {
                // Handle focus trap
            }
        });
    }

    // Newsletter Subscription
    initNewsletter() {
        const newsletterForm = document.querySelector('[data-newsletter-form]');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.subscribeNewsletter(newsletterForm);
            });
        }
    }

    async subscribeNewsletter(form) {
        const email = form.querySelector('[data-newsletter-email]').value;
        
        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email })
            });
            
            const data = await response.json();
            if (data.success) {
                this.showNotification('Successfully subscribed to newsletter!', 'success');
                form.reset();
            }
        } catch (error) {
            console.error('Newsletter error:', error);
            this.showNotification('Failed to subscribe to newsletter', 'error');
        }
    }

    // Social Sharing
    initSocialSharing() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-share]')) {
                e.preventDefault();
                this.shareProduct(e.target.dataset.share);
            }
        });
    }

    shareProduct(platform) {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        
        const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
            whatsapp: `https://wa.me/?text=${title}%20${url}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        };
        
        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
    }

    // Loyalty Program
    initLoyaltyProgram() {
        // Implementation for loyalty program features
    }

    // Countdown Timers
    initCountdownTimers() {
        const countdownElements = document.querySelectorAll('[data-countdown]');
        countdownElements.forEach(element => {
            const endDate = new Date(element.dataset.countdown).getTime();
            
            const timer = setInterval(() => {
                const now = new Date().getTime();
                const distance = endDate - now;
                
                if (distance < 0) {
                    clearInterval(timer);
                    element.innerHTML = 'EXPIRED';
                    return;
                }
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }, 1000);
        });
    }

    // Stock Notifications
    initStockNotifications() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-stock-notification]')) {
                e.preventDefault();
                this.subscribeStockNotification(e.target.dataset.productId);
            }
        });
    }

    async subscribeStockNotification(productId) {
        try {
            const response = await fetch('/api/stock-notification/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ product_id: productId })
            });
            
            const data = await response.json();
            if (data.success) {
                this.showNotification('You will be notified when this product is back in stock!', 'success');
            }
        } catch (error) {
            console.error('Stock notification error:', error);
        }
    }

    // Live Chat
    initLiveChat() {
        // Implementation for live chat integration
    }

    // Utility Functions
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <span class="notification__message">${message}</span>
                <button class="notification__close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    createQuickViewModal(productData) {
        const modal = document.createElement('div');
        modal.className = 'modal modal--quick-view';
        modal.innerHTML = `
            <div class="modal__content">
                <div class="modal__header">
                    <h3 class="modal__title">${productData.name}</h3>
                    <button class="modal__close" onclick="this.closest('.modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal__body">
                    <div class="quick-view__content">
                        <div class="quick-view__image">
                            <img src="${productData.image}" alt="${productData.name}">
                        </div>
                        <div class="quick-view__info">
                            <h4 class="quick-view__name">${productData.name}</h4>
                            <div class="quick-view__price">${productData.price}</div>
                            <div class="quick-view__description">${productData.description}</div>
                            <button class="btn btn--primary" data-add-to-cart data-product-id="${productData.id}">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    appendProducts(products) {
        const productsContainer = document.querySelector('[data-products-container]');
        if (!productsContainer) return;
        
        products.forEach(product => {
            const productElement = this.createProductCard(product);
            productsContainer.appendChild(productElement);
        });
    }

    createProductCard(product) {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <div class="product-card__image">
                <img src="${product.image}" alt="${product.name}" class="product-card__img">
                <div class="product-card__badges">
                    ${product.is_new ? '<span class="product-card__badge product-card__badge--new">New</span>' : ''}
                    ${product.discount_percentage > 0 ? `<span class="product-card__badge product-card__badge--sale">-${product.discount_percentage}%</span>` : ''}
                </div>
                <div class="product-card__quick-actions">
                    <button class="product-card__quick-action" data-quick-view data-product-id="${product.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="product-card__quick-action" data-wishlist-toggle data-product-id="${product.id}">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="product-card__quick-action" data-compare-toggle data-product-id="${product.id}">
                        <i class="fas fa-exchange-alt"></i>
                    </button>
                </div>
            </div>
            <div class="product-card__content">
                <h3 class="product-card__name">
                    <a href="${product.url}" class="product-card__name-link">${product.name}</a>
                </h3>
                <div class="product-card__price">
                    ${product.original_price > product.price ? `<span class="product-card__price-original">${product.original_price}</span>` : ''}
                    <span class="product-card__price-current">${product.price}</span>
                </div>
                <button class="btn btn--primary product-card__add-to-cart" data-add-to-cart data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        `;
        return div;
    }
}

// Initialize the theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProfessionalEnhancedTheme();
});

// Export for global access
window.ProfessionalEnhancedTheme = ProfessionalEnhancedTheme; 