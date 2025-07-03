# Professional Enhanced Salla Theme - Complete CSS Code
# Copy and paste this entire code into your Salla CSS Editor

/* ==========================================================================
   Professional Enhanced Salla Theme - Complete Feature Pack
   Advanced CSS styles for all modern features
   ========================================================================== */

/* CSS Custom Properties & Variables */
:root {
  /* Colors */
  --color-white: #ffffff;
  --color-black: #000000;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  
  /* Primary Colors */
  --color-primary: var(--color-primary, #3b82f6);
  --color-primary-dark: var(--color-primary-dark, #1d4ed8);
  --color-primary-light: var(--color-primary-light, #60a5fa);
  
  /* Secondary Colors */
  --color-secondary: var(--color-secondary, #64748b);
  --color-accent: var(--color-accent, #f59e0b);
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
  
  /* Typography */
  --font-family-base: var(--font-main, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  --font-family-arabic: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  --spacing-4xl: 6rem;
  --spacing-5xl: 8rem;
  
  /* Border Radius */
  --border-radius: 0.375rem;
  --border-radius-lg: 0.5rem;
  --border-radius-xl: 0.75rem;
  --border-radius-2xl: 1rem;
  --border-radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  /* Transitions */
  --transition-base: 0.15s ease-in-out;
  --transition-fast: 0.1s ease-in-out;
  --transition-slow: 0.3s ease-in-out;
  
  /* Z-Index */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
  --z-floating: 1080;
}

/* ==========================================================================
   Base Styles & RTL Support
   ========================================================================== */

[dir="rtl"] {
  direction: rtl;
  text-align: right;
  font-family: var(--font-family-arabic);
}

[dir="rtl"] body {
  font-family: var(--font-family-arabic);
}

body {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--color-gray-900);
  background-color: var(--color-white);
}

[dir="rtl"] body {
  font-family: var(--font-family-arabic);
}

/* ==========================================================================
   Advanced Button Styles with Animations
   ========================================================================== */

.btn, .salla-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: var(--color-white) !important;
  border: none;
  border-radius: var(--border-radius-lg);
  padding: 0.75em 2em;
  font-size: var(--font-size-sm);
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  transition: all var(--transition-base);
  text-decoration: none;
  min-height: 44px;
  min-width: 44px;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.btn::before, .salla-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn:hover::before, .salla-button:hover::before {
  left: 100%;
}

.btn:hover, .salla-button:hover {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
  transform: translateY(-2px) scale(1.02);
  box-shadow: var(--shadow-lg);
}

.btn:focus, .salla-button:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.btn:disabled, .salla-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Button Variants */
.btn--primary, .salla-button--primary {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
}

.btn--secondary, .salla-button--secondary {
  background: linear-gradient(135deg, var(--color-gray-600) 0%, var(--color-gray-500) 100%);
}

.btn--success, .salla-button--success {
  background: linear-gradient(135deg, var(--color-success) 0%, #34d399 100%);
}

.btn--warning, .salla-button--warning {
  background: linear-gradient(135deg, var(--color-warning) 0%, #fbbf24 100%);
}

.btn--error, .salla-button--error {
  background: linear-gradient(135deg, var(--color-error) 0%, #f87171 100%);
}

.btn--outline, .salla-button--outline {
  background: transparent;
  color: var(--color-primary) !important;
  border: 2px solid var(--color-primary);
}

.btn--outline:hover, .salla-button--outline:hover {
  background: var(--color-primary);
  color: var(--color-white) !important;
}

/* Button Sizes */
.btn--small, .salla-button--small {
  padding: 0.5em 1.5em;
  font-size: var(--font-size-xs);
  min-height: 36px;
}

.btn--large, .salla-button--large {
  padding: 1em 3em;
  font-size: var(--font-size-lg);
  min-height: 52px;
}

/* ==========================================================================
   Enhanced Product Cards with Badges & Animations
   ========================================================================== */

.salla-product-card, .product-card {
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: all var(--transition-slow);
  background: var(--color-white);
  position: relative;
  border: 1px solid var(--color-gray-100);
}

.salla-product-card:hover, .product-card:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
}

/* Product Badges */
.salla-product-card .badge, .product-card .badge {
  position: absolute;
  top: var(--spacing-md);
  left: var(--spacing-md);
  background: var(--color-accent);
  color: var(--color-white);
  padding: 0.25em 0.75em;
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-xs);
  font-weight: bold;
  z-index: 2;
  box-shadow: var(--shadow-sm);
}

[dir="rtl"] .salla-product-card .badge, [dir="rtl"] .product-card .badge {
  left: auto;
  right: var(--spacing-md);
}

.badge--new {
  background: var(--color-success);
}

.badge--sale {
  background: var(--color-error);
}

.badge--hot {
  background: var(--color-warning);
}

/* Product Image Animations */
.product-card__image, .salla-product-card__image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
}

.product-card__img, .salla-product-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover .product-card__img,
.salla-product-card:hover .salla-product-card__img {
  transform: scale(1.1) rotate(-1deg);
}

/* Quick Actions */
.product-card__quick-actions, .salla-product-card__quick-actions {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  opacity: 0;
  transform: translateX(20px);
  transition: all var(--transition-base);
}

[dir="rtl"] .product-card__quick-actions, [dir="rtl"] .salla-product-card__quick-actions {
  right: auto;
  left: var(--spacing-md);
  transform: translateX(-20px);
}

.product-card:hover .product-card__quick-actions,
.salla-product-card:hover .salla-product-card__quick-actions {
  opacity: 1;
  transform: translateX(0);
}

[dir="rtl"] .product-card:hover .product-card__quick-actions,
[dir="rtl"] .salla-product-card:hover .salla-product-card__quick-actions {
  transform: translateX(0);
}

.quick-action-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-white);
  border: none;
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-base);
}

.quick-action-btn:hover {
  background: var(--color-primary);
  color: var(--color-white);
  transform: scale(1.1);
}

/* ==========================================================================
   Sticky Add to Cart Bar
   ========================================================================== */

.sticky-add-to-cart {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-white);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  padding: var(--spacing-md) var(--spacing-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: var(--z-sticky);
  border-top: 1px solid var(--color-gray-200);
  transform: translateY(100%);
  transition: transform var(--transition-base);
}

.sticky-add-to-cart.active {
  transform: translateY(0);
}

.sticky-add-to-cart__info {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.sticky-add-to-cart__price {
  font-size: var(--font-size-lg);
  font-weight: bold;
  color: var(--color-primary);
}

.sticky-add-to-cart__actions {
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================== */

.faq-accordion {
  border-radius: var(--border-radius-xl);
  background: var(--color-gray-50);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.faq-item {
  border-bottom: 1px solid var(--color-gray-200);
  margin-bottom: var(--spacing-md);
}

.faq-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.faq-question {
  background: none;
  border: none;
  font-weight: 600;
  font-size: var(--font-size-lg);
  width: 100%;
  text-align: left;
  padding: var(--spacing-md) 0;
  cursor: pointer;
  transition: color var(--transition-base);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-gray-900);
}

[dir="rtl"] .faq-question {
  text-align: right;
}

.faq-question:hover {
  color: var(--color-primary);
}

.faq-question::after {
  content: '+';
  font-size: var(--font-size-xl);
  font-weight: bold;
  transition: transform var(--transition-base);
}

.faq-item.active .faq-question::after {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow), padding var(--transition-base);
  padding: 0 var(--spacing-md);
  color: var(--color-gray-700);
  line-height: 1.6;
}

.faq-item.active .faq-answer {
  max-height: 200px;
  padding: var(--spacing-md);
}

/* ==========================================================================
   Testimonials Section
   ========================================================================== */

.salla-testimonials {
  background: linear-gradient(135deg, var(--color-gray-50) 0%, #e0f2fe 100%);
  padding: var(--spacing-3xl) var(--spacing-xl);
  border-radius: var(--border-radius-2xl);
  margin: var(--spacing-3xl) 0;
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
}

.salla-testimonials::before {
  content: '"';
  position: absolute;
  top: var(--spacing-xl);
  left: var(--spacing-xl);
  font-size: 8rem;
  color: var(--color-primary);
  opacity: 0.1;
  font-family: serif;
}

[dir="rtl"] .salla-testimonials::before {
  left: auto;
  right: var(--spacing-xl);
}

.testimonial-item {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.testimonial-text {
  font-style: italic;
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-lg);
  line-height: 1.8;
}

.testimonial-author {
  font-weight: bold;
  color: var(--color-primary);
  font-size: var(--font-size-lg);
}

.testimonial-rating {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-sm);
}

.star {
  color: #fbbf24;
  font-size: var(--font-size-lg);
}

/* ==========================================================================
   Floating Action Buttons
   ========================================================================== */

.floating-actions {
  position: fixed;
  bottom: var(--spacing-xl);
  right: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  z-index: var(--z-floating);
}

[dir="rtl"] .floating-actions {
  right: auto;
  left: var(--spacing-xl);
}

.floating-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.floating-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.floating-btn:hover::before {
  opacity: 1;
}

.floating-btn:hover {
  transform: scale(1.1);
}

.floating-btn--whatsapp {
  background: #25d366;
  color: var(--color-white);
}

.floating-btn--scroll-top {
  background: var(--color-primary);
  color: var(--color-white);
}

.floating-btn--chat {
  background: var(--color-accent);
  color: var(--color-white);
}

/* ==========================================================================
   Animated Counters
   ========================================================================== */

.animated-counter {
  text-align: center;
  padding: var(--spacing-xl);
}

.counter-number {
  font-size: var(--font-size-4xl);
  font-weight: bold;
  color: var(--color-primary);
  display: block;
  margin-bottom: var(--spacing-sm);
}

.counter-label {
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ==========================================================================
   Countdown Timer
   ========================================================================== */

.countdown-timer {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-xl);
  text-align: center;
  margin: var(--spacing-xl) 0;
}

.countdown-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-lg);
  font-weight: bold;
}

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: var(--spacing-md);
  max-width: 400px;
  margin: 0 auto;
}

.countdown-item {
  background: rgba(255, 255, 255, 0.1);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-lg);
  backdrop-filter: blur(10px);
}

.countdown-value {
  font-size: var(--font-size-2xl);
  font-weight: bold;
  display: block;
}

.countdown-label {
  font-size: var(--font-size-xs);
  opacity: 0.8;
  text-transform: uppercase;
}

/* ==========================================================================
   Newsletter Signup Popup
   ========================================================================== */

.newsletter-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  background: var(--color-white);
  padding: var(--spacing-3xl);
  border-radius: var(--border-radius-2xl);
  box-shadow: var(--shadow-xl);
  z-index: var(--z-modal);
  max-width: 500px;
  width: 90%;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-slow);
}

.newsletter-popup.active {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%) scale(1);
}

.newsletter-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: var(--z-modal-backdrop);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
}

.newsletter-backdrop.active {
  opacity: 1;
  visibility: visible;
}

.newsletter-title {
  font-size: var(--font-size-2xl);
  font-weight: bold;
  margin-bottom: var(--spacing-md);
  color: var(--color-gray-900);
}

.newsletter-description {
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.newsletter-input {
  flex: 1;
  padding: var(--spacing-md);
  border: 2px solid var(--color-gray-200);
  border-radius: var(--border-radius-lg);
  font-size: var(--font-size-base);
  transition: border-color var(--transition-base);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.newsletter-close {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: none;
  border: none;
  font-size: var(--font-size-xl);
  cursor: pointer;
  color: var(--color-gray-400);
  transition: color var(--transition-base);
}

.newsletter-close:hover {
  color: var(--color-gray-600);
}

[dir="rtl"] .newsletter-close {
  right: auto;
  left: var(--spacing-md);
}

/* ==========================================================================
   Enhanced Search Bar
   ========================================================================== */

.enhanced-search {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.search-input-group {
  position: relative;
  display: flex;
  align-items: center;
  background: var(--color-white);
  border: 2px solid var(--color-gray-200);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-sm);
}

.search-input-group:focus-within {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.search-input {
  flex: 1;
  padding: var(--spacing-md) var(--spacing-lg);
  border: none;
  outline: none;
  font-size: var(--font-size-base);
  background: transparent;
}

.search-input::placeholder {
  color: var(--color-gray-400);
}

.search-btn {
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  cursor: pointer;
  transition: background var(--transition-base);
}

.search-btn:hover {
  background: var(--color-primary-dark);
}

.search-suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-top: none;
  border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: var(--z-dropdown);
  max-height: 300px;
  overflow-y: auto;
  display: none;
}

.search-suggestions.active {
  display: block;
}

.suggestion-item {
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--color-gray-100);
  cursor: pointer;
  transition: background var(--transition-base);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.suggestion-item:hover {
  background: var(--color-gray-50);
}

.suggestion-item:last-child {
  border-bottom: none;
}

.suggestion-image {
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius);
  object-fit: cover;
}

.suggestion-content {
  flex: 1;
}

.suggestion-title {
  font-weight: 500;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-xs);
}

.suggestion-price {
  color: var(--color-primary);
  font-weight: bold;
}

/* ==========================================================================
   Dark Mode Styles
   ========================================================================== */

[data-theme="dark"] {
  --color-white: #1f2937;
  --color-black: #ffffff;
  --color-gray-50: #374151;
  --color-gray-100: #4b5563;
  --color-gray-200: #6b7280;
  --color-gray-300: #9ca3af;
  --color-gray-400: #d1d5db;
  --color-gray-500: #e5e7eb;
  --color-gray-600: #f3f4f6;
  --color-gray-700: #f9fafb;
  --color-gray-800: #ffffff;
  --color-gray-900: #f9fafb;
}

[data-theme="dark"] .salla-product-card,
[data-theme="dark"] .product-card {
  background: var(--color-gray-800);
  border-color: var(--color-gray-700);
}

[data-theme="dark"] .search-input-group {
  background: var(--color-gray-800);
  border-color: var(--color-gray-600);
}

[data-theme="dark"] .sticky-add-to-cart {
  background: var(--color-gray-800);
  border-color: var(--color-gray-700);
}

[data-theme="dark"] .newsletter-popup {
  background: var(--color-gray-800);
}

/* ==========================================================================
   SALLA DOCUMENTATION COMPONENTS
   ========================================================================== */

/* Enhanced Square Banners */
.enhanced-square-banners {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.square-banners-grid {
  margin-top: 2rem;
}

.square-banner-item {
  transition: transform 0.3s ease;
}

.square-banner-item:hover {
  transform: translateY(-5px);
}

.square-banner-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.square-banner-image {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.square-banner-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%);
  transition: opacity 0.3s ease;
}

.square-banner-content {
  text-align: center;
}

.square-banner-title {
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.square-banner-description {
  opacity: 0.9;
  line-height: 1.5;
}

/* Main Links */
.main-links-section {
  padding: 3rem 0;
  background: white;
}

.main-links-grid {
  margin-top: 2rem;
}

.main-link-item {
  text-decoration: none;
  color: inherit;
}

.main-link-content {
  background: white;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.main-link-content:hover {
  border-color: var(--color-primary);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  transition: all 0.3s ease;
}

.main-link-title {
  transition: color 0.3s ease;
}

/* Enhanced Slider */
.enhanced-slider-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.enhanced-slider {
  margin-top: 2rem;
}

.enhanced-slider-item {
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.enhanced-slider-image {
  position: relative;
}

.enhanced-slider-overlay {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%);
}

.enhanced-slider-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.enhanced-slider-title {
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.enhanced-slider-description {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.enhanced-slider-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #333;
  text-decoration: none;
  border-radius: 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.enhanced-slider-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* Slider Products with Header */
.slider-products-with-header {
  padding: 4rem 0;
  background: #f8fafc;
}

.slider-header {
  margin-bottom: 3rem;
}

.slider-title {
  color: #1f2937;
  margin-bottom: 1rem;
}

.slider-description {
  color: #6b7280;
  margin-bottom: 2rem;
}

.view-all-button {
  display: inline-block;
  padding: 0.75rem 2rem;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  text-decoration: none;
  border-radius: 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.view-all-button:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

.products-slider {
  margin-top: 2rem;
}

.product-slide {
  padding: 0 0.5rem;
}

/* Latest Products */
.latest-products-section {
  padding: 4rem 0;
  background: white;
}

.latest-products-grid {
  margin-top: 2rem;
}

.latest-product-item {
  transition: transform 0.3s ease;
}

.latest-product-item:hover {
  transform: translateY(-5px);
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  display: flex;
  gap: 0.125rem;
}

.star {
  font-size: 0.875rem;
}

.reviews-count {
  color: #9ca3af;
}

.product-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.quick-action-btn {
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #6b7280;
}

.quick-action-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: #fef3c7;
}

/* ==========================================================================
   Responsive Design
   ========================================================================== */

@media (max-width: 768px) {
  .sticky-add-to-cart {
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
  }
  
  .sticky-add-to-cart__info {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .floating-actions {
    bottom: var(--spacing-md);
    right: var(--spacing-md);
  }
  
  [dir="rtl"] .floating-actions {
    left: var(--spacing-md);
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .countdown-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Salla Components Mobile */
  .square-banners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .main-links-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  
  .enhanced-slider-content {
    padding: 2rem 1rem;
  }
  
  .enhanced-slider-title {
    font-size: 2rem;
  }
  
  .enhanced-slider-description {
    font-size: 1rem;
  }
  
  .latest-products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .salla-testimonials {
    padding: var(--spacing-xl) var(--spacing-md);
  }
  
  .newsletter-popup {
    padding: var(--spacing-xl) var(--spacing-md);
  }
  
  .floating-btn {
    width: 48px;
    height: 48px;
  }
  
  /* Salla Components Small Mobile */
  .square-banners-grid {
    grid-template-columns: 1fr;
  }
  
  .main-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .latest-products-grid {
    grid-template-columns: 1fr;
  }
  
  .enhanced-slider-title {
    font-size: 1.5rem;
  }
  
  .enhanced-slider-description {
    font-size: 0.875rem;
  }
}

/* ==========================================================================
   Animations & Keyframes
   ========================================================================== */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

/* Animation Classes */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-bounce {
  animation: bounce 1s infinite;
}

/* ==========================================================================
   Accessibility & Focus Styles
   ========================================================================== */

.btn:focus,
.salla-button:focus,
.quick-action-btn:focus,
.floating-btn:focus,
.faq-question:focus,
.search-btn:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* ==========================================================================
   Print Styles
   ========================================================================== */

@media print {
  .floating-actions,
  .sticky-add-to-cart,
  .newsletter-popup,
  .newsletter-backdrop {
    display: none !important;
  }
  
  .salla-product-card,
  .product-card {
    break-inside: avoid;
    box-shadow: none;
    border: 1px solid var(--color-gray-300);
  }
}

/* ==========================================================================
   Reduced Motion Support
   ========================================================================== */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ==========================================================================
   High Contrast Support
   ========================================================================== */

@media (prefers-contrast: high) {
  .btn,
  .salla-button {
    border: 2px solid currentColor;
  }
  
  .search-input-group,
  .newsletter-input {
    border-width: 2px;
  }
}

/* ==========================================================================
   Additional Utility Classes
   ========================================================================== */

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mb-12 { margin-bottom: 3rem; }

.mt-8 { margin-top: 2rem; }

.grid { display: grid; }
.flex { display: flex; }
.inline-flex { display: inline-flex; }

.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }

.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }

@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

.text-3xl { font-size: 1.875rem; }
.text-4xl { font-size: 2.25rem; }
.text-xl { font-size: 1.25rem; }

.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }

.text-primary { color: var(--color-primary); }
.text-gray-600 { color: var(--color-gray-600); }
.text-gray-900 { color: var(--color-gray-900); }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* ==========================================================================
   End of Enhanced Theme CSS
   ========================================================================== */ 