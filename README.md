# San Francisco Demo - PHP Implementation

A PHP-based replica of the San Francisco demo from Rey theme, featuring modern web development practices and pixel-perfect design matching.

## 🚀 Quick Start

### Prerequisites
- PHP 8.0 or higher
- Web server (Apache/Nginx) or PHP built-in server

### Running the Application

1. **Start PHP development server:**
   ```bash
   cd /workspaces/San-Francisco-via-Spec-Kit/public
   php -S localhost:8000
   ```

2. **Open in browser:**
   - Main site: http://localhost:8000

## 📁 Project Structure

```
├── public/              # Web root directory
│   ├── index.php        # Main entry point
│   ├── assets/          # Static assets (CSS, JS, images)
│   │   ├── css/         # Stylesheets
│   │   ├── js/          # JavaScript files
│   │   └── images/      # Image assets
├── src/                 # Source files
│   ├── Views/           # PHP view templates
│   │   ├── home.php     # Main home page
│   │   └── admin.php    # Admin interface
│   ├── Controllers/     # PHP controllers (future)
│   ├── Models/          # PHP models (future)
│   └── Services/        # PHP services (future)
├── data/                # JSON data files
│   ├── products.json    # Product catalog
│   ├── categories.json  # Category data
│   └── settings.json    # Site configuration
├── specs/               # Project specifications
└── San-Francisco/       # Legacy Eleventy files (deprecated)
```

## 🎯 Features

### Frontend
- **PHP Backend**: Server-side rendering with PHP 8.x
- **Rey Theme Styling**: Matches the original Rey theme design
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Component Architecture**: Modular sections for easy maintenance
- **Data-Driven**: Uses JSON data files for products and categories

### Sections
- **Header**: Navigation with logo and action buttons
- **Text Scroller**: Animated announcement banner with Splide
- **Hero**: Main call-to-action section
- **Complete Setup**: SITE/SHOP navigation links
- **Categories**: Product category grid
- **Discover**: USP links section
- **Features**: Unique selling points
- **Products**: New arrivals product grid
- **Flash Deals**: Time-limited offers with countdown
- **Footer**: Site links and newsletter signup

## 🔧 Technology Stack

- **PHP 8.x**: Server-side processing
- **HTML5/CSS3**: Modern markup and styling
- **JavaScript**: Interactive features
- **Splide**: Carousel/slider functionality
- **Font Awesome**: Icons
- **Outfit Font**: Modern typography (Rey theme)
- **JSON**: Data storage format

## 🎨 Styling

The site uses a comprehensive design system with CSS custom properties for:
- **Colors**: Primary, secondary, neutral (Rey theme colors)
- **Typography**: Outfit font family (weights 300, 400, 700, 900)
- **Spacing**: Consistent spacing scale
- **Layout**: Responsive grid system
- **Components**: Buttons, cards, sections

## 📊 Data Files

- `data/products.json`: Product catalog data
- `data/categories.json`: Category information
- `data/settings.json`: Site configuration

## 🎯 Target Site Analysis

This replica is based on the San Francisco demo from Rey theme (https://demos.reytheme.com/san-francisco/) with the following key components:

- **Rey Theme Framework**: Custom CSS properties and components
- **Elementor Sections**: Complex nested layouts
- **WooCommerce Integration**: Product grids and e-commerce features
- **WP Rocket Optimization**: Performance optimizations
- **Outfit Font Family**: Modern typography

## 🚀 Deployment

### PHP Hosting
1. Upload all files to your PHP hosting provider
2. Ensure `public/` directory is set as web root
3. Make sure PHP 8.0+ is available
4. Configure URL rewriting if needed

### Docker (Optional)
```dockerfile
FROM php:8.1-apache
COPY . /var/www/html
EXPOSE 80
```

## 📝 Development History

This project evolved from multiple approaches:

- **Original PHP**: Basic PHP implementation
- **Eleventy Migration**: Static site generation attempt (deprecated)
- **PHP Refinement**: Enhanced PHP with Rey theme classes
- **Current State**: Optimized PHP implementation with modern features

## 🔄 Key Improvements

- **Rey Theme Classes**: Added `rey-siteWrapper`, `rey-siteHeader`, `rey-textScroller`
- **Elementor Structure**: Implemented `elementor-section` classes
- **Splide Integration**: Modern carousel functionality
- **Complete Setup Section**: Added SITE/SHOP navigation
- **Enhanced Styling**: Rey theme color variables and typography

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally: `php -S localhost:8000`
5. Submit a pull request

## 📄 License

This project is for demonstration purposes. Feel free to use and modify as needed.

---

**Built with ❤️ using PHP, modern CSS, and Rey theme design**