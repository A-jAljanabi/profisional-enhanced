# Professional Enhanced Salla Theme Documentation

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Customization](#customization)
6. [Components](#components)
7. [API Integration](#api-integration)
8. [Troubleshooting](#troubleshooting)
9. [Support](#support)

## Overview

The Professional Enhanced Salla Theme is a comprehensive, production-ready theme designed specifically for electronics stores. Built on the powerful Twilight framework, it offers advanced features, full Arabic RTL support, and a modern, responsive design.

### Key Benefits
- **Professional Design**: Clean, modern interface optimized for electronics stores
- **Full Arabic Support**: Complete RTL layout and Arabic language support
- **Advanced Features**: Dark mode, advanced search, product comparison, and more
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for speed and SEO
- **Customizable**: Easy to customize colors, fonts, and layouts

## Features

### Core Features
- ✅ Dark Mode Toggle
- ✅ Advanced Search with Suggestions
- ✅ Voice Search
- ✅ Product Comparison
- ✅ Wishlist Management
- ✅ Quick View Products
- ✅ Stock Notifications
- ✅ Loyalty Program
- ✅ Social Sharing
- ✅ Newsletter Subscription
- ✅ Live Chat Support
- ✅ Product Reviews
- ✅ 360° Product View
- ✅ Product Videos

### Language & Localization
- ✅ Full Arabic RTL Support
- ✅ Bilingual Interface (Arabic/English)
- ✅ Localized Content
- ✅ Arabic Numbers Option

### Design & UX
- ✅ Modern UI/UX Design
- ✅ Customizable Color Schemes
- ✅ Multiple Typography Options
- ✅ Smooth Animations
- ✅ Accessibility Compliant

### Performance
- ✅ Lazy Loading Images
- ✅ Code Splitting
- ✅ Smart Caching
- ✅ SEO Optimized

## Installation

### Prerequisites
- Node.js (v16 or higher)
- pnpm package manager
- Salla CLI
- Salla Partner Account

### Quick Installation

#### Using Installation Scripts
```bash
# Linux/Mac
chmod +x install.sh
./install.sh

# Windows
install.bat
```

#### Manual Installation
```bash
# 1. Clone the repository
git clone https://github.com/A-jAljanabi/profisional-enhanced.git

# 2. Navigate to theme directory
cd profisional-enhanced

# 3. Install dependencies
pnpm install

# 4. Build the theme
pnpm run production

# 5. Preview the theme
salla theme preview

# 6. Deploy to your store
salla theme push
```

### Salla Partners Portal Installation
1. Go to [Salla Partners Portal](https://salla.partners/)
2. Create a new theme project
3. Upload the theme files
4. Configure settings
5. Deploy to your store

## Configuration

### Theme Settings

#### Basic Settings
- **Header Sticky**: Enable/disable sticky header
- **Top Navigation Dark**: Dark theme for top navigation
- **Footer Dark**: Dark theme for footer
- **Sticky Add to Cart**: Sticky add to cart on mobile

#### Enhanced Features
- **Dark Mode**: Enable dark mode toggle
- **Advanced Search**: Enable advanced search features
- **Voice Search**: Enable voice search functionality
- **Product Comparison**: Enable product comparison
- **Wishlist**: Enable wishlist functionality
- **Quick View**: Enable quick view for products
- **Stock Notifications**: Enable stock notifications
- **Loyalty Program**: Enable loyalty program
- **Social Sharing**: Enable social sharing
- **Newsletter**: Enable newsletter subscription
- **Live Chat**: Enable live chat support
- **Product Reviews**: Enable product reviews
- **360° View**: Enable 360° product view
- **Product Videos**: Enable product videos

### Color Customization
The theme uses CSS custom properties for easy color customization:

```css
:root {
  --color-primary: #3b82f6;
  --color-primary-dark: #1d4ed8;
  --color-primary-light: #60a5fa;
  --color-secondary: #64748b;
  --color-accent: #f59e0b;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
}
```

### Font Customization
```css
:root {
  --font-family-base: 'Inter', sans-serif;
  --font-family-arabic: 'Cairo', sans-serif;
}
```

## Customization

### Adding Custom Components

1. Create a new component file in `src/views/components/`
2. Add the component to `twilight.json`
3. Include the component in your templates

Example component:
```twig
{# src/views/components/custom/my-component.twig #}
<div class="my-custom-component">
  <h2>{{ title }}</h2>
  <p>{{ description }}</p>
</div>
```

### Custom Styling

Add custom CSS in `src/assets/styles/`:
```scss
// src/assets/styles/custom.scss
.my-custom-component {
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
}
```

### Custom JavaScript

Add custom JavaScript in `src/assets/js/`:
```javascript
// src/assets/js/custom.js
class CustomComponent {
  constructor() {
    this.init();
  }
  
  init() {
    // Your custom functionality
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new CustomComponent();
});
```

## Components

### Available Components

#### Home Page Components
- **Enhanced Slider**: Advanced image slider with text overlays
- **Featured Products**: Multiple styles for featured products
- **Brands**: Display brand logos
- **Testimonials**: Customer testimonials
- **Store Features**: Store highlights
- **Main Links**: Quick navigation links
- **Products Slider**: Horizontal/vertical product sliders
- **Fixed Banner**: Fixed position banners
- **Parallax Background**: Products with parallax effect
- **Square Photos**: Square image gallery
- **YouTube**: Embedded YouTube videos

#### Product Components
- **Product Card**: Standard product display
- **Product Slider**: Product image slider
- **Product Options**: Product customization options
- **Product Reviews**: Customer reviews
- **Related Products**: Similar products
- **Product Videos**: Product demonstration videos
- **360° View**: Interactive product view

#### Navigation Components
- **Header**: Main navigation header
- **Footer**: Site footer
- **Breadcrumbs**: Navigation breadcrumbs
- **Search Bar**: Advanced search functionality
- **Mobile Menu**: Mobile navigation menu

### Component Configuration

Each component can be configured through the Salla admin panel:

1. Go to your store admin panel
2. Navigate to Design > Theme Customization
3. Select the component you want to configure
4. Modify settings and save

## API Integration

### Salla API Integration

The theme integrates with Salla's API for various features:

```javascript
// Example API call
async function getProducts() {
  try {
    const response = await fetch('/api/products');
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('API Error:', error);
  }
}
```

### Custom API Endpoints

Add custom API endpoints in your theme:

```javascript
// Custom API integration
class CustomAPI {
  static async getCustomData() {
    const response = await fetch('/api/custom-endpoint');
    return response.json();
  }
}
```

## Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules
rm -rf public
pnpm install
pnpm run production
```

#### Theme Not Loading
1. Check browser console for errors
2. Verify theme files are uploaded correctly
3. Clear browser cache
4. Check Salla store settings

#### RTL Issues
1. Ensure Arabic language is enabled
2. Check CSS direction properties
3. Verify font loading for Arabic text

#### Performance Issues
1. Optimize images
2. Enable lazy loading
3. Check for JavaScript errors
4. Monitor network requests

### Debug Mode

Enable debug mode for development:

```javascript
// Add to theme-enhanced.js
window.DEBUG_MODE = true;
```

### Logging

The theme includes comprehensive logging:

```javascript
// Enable detailed logging
window.THEME_LOGGING = true;
```

## Support

### Getting Help

1. **Documentation**: Check this documentation first
2. **GitHub Issues**: [Report bugs](https://github.com/A-jAljanabi/profisional-enhanced/issues)
3. **Email Support**: Alijamal532@gmail.com
4. **Salla Community**: [Telegram Group](https://t.me/salladev)

### Contact Information

- **Developer**: A-jAljanabi
- **Email**: Alijamal532@gmail.com
- **GitHub**: [https://github.com/A-jAljanabi](https://github.com/A-jAljanabi)
- **Repository**: [https://github.com/A-jAljanabi/profisional-enhanced](https://github.com/A-jAljanabi/profisional-enhanced)

### Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### License

This theme is licensed under the MIT License. See the LICENSE file for details.

---

**Last Updated**: December 2024
**Version**: 2.0.0
**Compatibility**: Salla Platform v2.14+ 