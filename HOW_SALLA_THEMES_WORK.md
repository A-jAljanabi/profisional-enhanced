# How Salla Themes Work - Complete Guide

## 🎯 Overview

Salla themes are built on the **Twilight Framework**, which is Salla's powerful theme engine for creating customizable e-commerce themes. This guide explains how Salla themes work, from development to deployment.

## 🏗️ Architecture

### 1. **Twilight Framework**
- **What it is**: Salla's official theme development framework
- **Purpose**: Provides structure, tools, and APIs for theme development
- **Technology**: Built with modern web technologies (Twig, SCSS, JavaScript, Webpack)

### 2. **Theme Structure**
```
theme-folder/
├── src/
│   ├── assets/          # CSS, JS, Images
│   ├── views/           # Twig templates
│   └── locales/         # Language files
├── public/              # Built files
├── twilight.json        # Theme configuration
├── package.json         # Dependencies
└── webpack.config.js    # Build configuration
```

## 🔧 How Themes Work

### 1. **Template Engine (Twig)**
```twig
{# Example: Product card template #}
<div class="product-card">
    <img src="{{ product.image }}" alt="{{ product.name }}">
    <h3>{{ product.name }}</h3>
    <p class="price">{{ product.price }}</p>
    <button data-add-to-cart="{{ product.id }}">Add to Cart</button>
</div>
```

**How it works:**
- Twig templates are processed by Salla's server
- Variables like `{{ product.name }}` are replaced with real data
- The final HTML is sent to the browser

### 2. **Data Flow**
```
Salla Database → API → Theme Variables → Twig Templates → HTML → Browser
```

**Example:**
1. User visits a product page
2. Salla fetches product data from database
3. Data is passed to theme as variables
4. Twig template processes the data
5. Final HTML is generated and sent to browser

### 3. **Component System**
Themes use a component-based architecture:

```twig
{# Including a component #}
{% component 'header.header' %}
{% component 'footer.footer' %}
{% component 'home.enhanced-slider' %}
```

**Benefits:**
- Reusable components
- Easy maintenance
- Modular development

## 🚀 Development Process

### 1. **Setup Development Environment**
```bash
# Install Salla CLI
npm install -g @salla.sa/cli

# Create new theme
salla theme create my-theme

# Navigate to theme
cd my-theme

# Install dependencies
pnpm install
```

### 2. **Development Workflow**
```bash
# Start development server
salla theme preview

# Build for production
pnpm run production

# Deploy to store
salla theme push
```

### 3. **File Organization**
```
src/
├── views/
│   ├── layouts/         # Main layout templates
│   ├── pages/           # Page templates
│   └── components/      # Reusable components
├── assets/
│   ├── styles/          # SCSS/CSS files
│   ├── js/              # JavaScript files
│   └── images/          # Image assets
└── locales/
    ├── ar.json          # Arabic translations
    └── en.json          # English translations
```

## 🎨 Theme Configuration

### 1. **twilight.json** - Main Configuration
```json
{
  "name": {
    "ar": "اسم القالب",
    "en": "Theme Name"
  },
  "features": [
    "mega-menu",
    "fonts",
    "color",
    "dark-mode"
  ],
  "settings": [
    {
      "id": "dark_mode_enabled",
      "type": "boolean",
      "label": "تفعيل الوضع الليلي",
      "format": "switch"
    }
  ]
}
```

### 2. **Settings System**
- **Purpose**: Allow store owners to customize themes
- **Types**: Boolean, text, color, image, dropdown
- **Access**: `{{ theme.settings.get('setting_id') }}`

### 3. **Features System**
- **Purpose**: Enable/disable theme capabilities
- **Examples**: mega-menu, dark-mode, advanced-search
- **Access**: `{{ 'feature_name' in theme.features }}`

## 🌐 Internationalization (i18n)

### 1. **Language Files**
```json
// locales/ar.json
{
  "add_to_cart": "أضف إلى السلة",
  "product_details": "تفاصيل المنتج"
}

// locales/en.json
{
  "add_to_cart": "Add to Cart",
  "product_details": "Product Details"
}
```

### 2. **Usage in Templates**
```twig
<button>{{ trans('add_to_cart') }}</button>
<h2>{{ trans('product_details') }}</h2>
```

### 3. **RTL Support**
```css
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}
```

## 🔌 API Integration

### 1. **Salla API**
Themes can access Salla's API for dynamic data:

```javascript
// Fetch products
async function getProducts() {
  const response = await fetch('/api/products');
  return response.json();
}

// Add to cart
async function addToCart(productId) {
  const response = await fetch('/api/cart/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product_id: productId })
  });
  return response.json();
}
```

### 2. **Available APIs**
- **Products**: `/api/products`
- **Cart**: `/api/cart/*`
- **User**: `/api/user/*`
- **Orders**: `/api/orders/*`
- **Wishlist**: `/api/wishlist/*`

## 🎯 Theme Lifecycle

### 1. **Development Phase**
```
1. Create theme structure
2. Design templates
3. Add styling
4. Implement functionality
5. Test locally
```

### 2. **Preview Phase**
```
1. Run salla theme preview
2. Test on demo store
3. Fix issues
4. Optimize performance
```

### 3. **Deployment Phase**
```
1. Build theme (pnpm run production)
2. Push to Salla (salla theme push)
3. Activate on store
4. Monitor performance
```

## 🛠️ Build Process

### 1. **Webpack Configuration**
```javascript
// webpack.config.js
module.exports = {
  entry: {
    app: './src/assets/js/app.js',
    styles: './src/assets/styles/app.scss'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  }
}
```

### 2. **Asset Processing**
- **SCSS** → CSS (with autoprefixer)
- **JavaScript** → Minified JS (with Babel)
- **Images** → Optimized and copied
- **Fonts** → Copied to public directory

### 3. **Output Structure**
```
public/
├── app.css
├── app.js
├── images/
└── fonts/
```

## 🔧 Customization

### 1. **Color Customization**
```css
:root {
  --color-primary: {{ theme.color.primary }};
  --color-secondary: {{ theme.color.secondary }};
}
```

### 2. **Font Customization**
```css
body {
  font-family: {{ theme.font.name }}, sans-serif;
}
```

### 3. **Layout Customization**
```twig
{# Conditional layouts #}
{% if theme.settings.get('sidebar_enabled') %}
  {% include 'layouts/with-sidebar.twig' %}
{% else %}
  {% include 'layouts/full-width.twig' %}
{% endif %}
```

## 📱 Responsive Design

### 1. **Mobile-First Approach**
```scss
// Base styles (mobile)
.product-card {
  width: 100%;
  margin-bottom: 1rem;
}

// Tablet and up
@media (min-width: 768px) {
  .product-card {
    width: 50%;
  }
}

// Desktop and up
@media (min-width: 1024px) {
  .product-card {
    width: 33.333%;
  }
}
```

### 2. **Touch-Friendly Design**
- Minimum 44px touch targets
- Proper spacing between elements
- Swipe gestures for mobile

## ⚡ Performance Optimization

### 1. **Lazy Loading**
```html
<img data-src="{{ product.image }}" class="lazy" alt="{{ product.name }}">
```

### 2. **Code Splitting**
```javascript
// Load components on demand
const ProductModal = () => import('./components/ProductModal.js');
```

### 3. **Caching Strategies**
- Browser caching for static assets
- API response caching
- Image optimization

## 🔍 SEO Optimization

### 1. **Meta Tags**
```twig
<meta name="description" content="{{ product.description }}">
<meta property="og:title" content="{{ product.name }}">
<meta property="og:image" content="{{ product.image }}">
```

### 2. **Structured Data**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{{ product.name }}",
  "price": "{{ product.price }}"
}
```

### 3. **URL Structure**
- Clean, SEO-friendly URLs
- Proper breadcrumb navigation
- XML sitemap generation

## 🚀 Deployment

### 1. **Salla Partners Portal**
1. Go to [Salla Partners Portal](https://salla.partners/)
2. Create new theme project
3. Upload theme files
4. Configure settings
5. Deploy to store

### 2. **Salla CLI**
```bash
# Build theme
pnpm run production

# Preview theme
salla theme preview

# Deploy theme
salla theme push
```

### 3. **Direct Upload**
1. Zip theme folder
2. Upload via Salla admin panel
3. Activate theme

## 🔧 Troubleshooting

### 1. **Common Issues**
- **Build errors**: Check webpack configuration
- **Template errors**: Verify Twig syntax
- **API errors**: Check API endpoints
- **Performance issues**: Optimize assets

### 2. **Debug Mode**
```javascript
// Enable debug logging
window.DEBUG_MODE = true;
```

### 3. **Development Tools**
- Browser developer tools
- Salla CLI debug mode
- Network monitoring

## 📚 Best Practices

### 1. **Code Organization**
- Use meaningful file names
- Follow consistent naming conventions
- Comment complex logic
- Keep components modular

### 2. **Performance**
- Optimize images
- Minimize HTTP requests
- Use efficient CSS selectors
- Implement lazy loading

### 3. **Accessibility**
- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Test with screen readers

### 4. **Security**
- Sanitize user input
- Use HTTPS for all requests
- Validate form data
- Follow OWASP guidelines

## 🎯 Summary

Salla themes work through a sophisticated system that combines:

1. **Twilight Framework** - The foundation
2. **Twig Templates** - Dynamic content generation
3. **Component System** - Modular development
4. **API Integration** - Dynamic data access
5. **Build Process** - Asset optimization
6. **Deployment System** - Easy publishing

The result is a powerful, flexible, and maintainable theme system that allows developers to create professional e-commerce experiences while giving store owners the tools to customize their stores without coding.

---

**For more information:**
- [Salla Documentation](https://docs.salla.dev/)
- [Twilight Framework Guide](https://docs.salla.dev/?nav=01HNFTD5Y5ESFQS3P9MJ0721VM)
- [GitHub Repository](https://github.com/A-jAljanabi/profisional-enhanced) 