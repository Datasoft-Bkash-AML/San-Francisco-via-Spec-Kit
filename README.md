# San Francisco Demo - MVP

A flexible single-page e-commerce demo built with PHP and JSON data storage.

## 🚀 Quick Start

### Prerequisites
- PHP 8.x or higher
- Web browser

### Running the Application

1. **Start the local server:**
   ```bash
   cd /workspaces/San-Francisco-via-Spec-Kit
   php -S localhost:8000 -t public
   ```

2. **Open in browser:**
   - Main site: http://localhost:8000
   - Admin panel: http://localhost:8000/admin

## 📁 Project Structure

```
├── public/              # Web root
│   └── index.php        # Main entry point
├── src/
│   ├── Controllers/     # PHP controllers
│   ├── Models/          # Data models
│   ├── Services/        # Business logic
│   └── Views/           # HTML templates
├── data/                # JSON data files
│   ├── categories.json  # Product categories
│   ├── products.json    # Product catalog
│   └── settings.json    # Site configuration
├── assets/              # Static files
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── images/         # Image assets
└── config/             # Configuration files
```

## 🎯 Features

### Frontend
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Product Catalog**: Browse products by category
- **Interactive Elements**: Hover effects, smooth scrolling
- **Newsletter Signup**: Email collection form
- **Add to Cart**: Basic cart functionality (demo alerts)

### Admin Panel
- **Dashboard**: Overview of products and categories
- **Product Management**: View product list (edit/delete coming soon)
- **Category Management**: View category list
- **Settings**: Configure site name, tagline, banners

### Data Management
- **JSON Storage**: No database required
- **Sample Data**: Pre-loaded with demo products and categories
- **Easy Customization**: Edit JSON files to change content

## 🔧 Customization

### Adding Products
Edit `data/products.json`:
```json
{
  "id": 5,
  "name": "New Product Name",
  "brand": "Brand Name",
  "category_id": 1,
  "price": 99.99,
  "image": "/assets/images/products/new-product.jpg"
}
```

### Adding Categories
Edit `data/categories.json`:
```json
{
  "id": 6,
  "name": "New Category",
  "slug": "new-category",
  "icon": "fas fa-star",
  "product_count": 10
}
```

### Site Settings
Edit `data/settings.json`:
```json
{
  "site_name": "Your Store Name",
  "tagline": "Your tagline here",
  "top_banner": "Your banner text"
}
```

## 🎨 Styling

The application uses:
- **CSS Grid & Flexbox**: Modern layout techniques
- **Font Awesome**: Icons for categories and UI elements
- **Responsive Design**: Mobile-first approach
- **Custom Properties**: Easy color theming

## 🚀 Deployment

### Shared Hosting
1. Upload all files to your web server
2. Ensure PHP 8.x is available
3. Point your domain to the `public/` directory
4. Access your site at your domain

### Docker (Optional)
```dockerfile
FROM php:8.1-apache
COPY . /var/www/html
EXPOSE 80
```

## 📝 Next Steps

This MVP provides the foundation for a full e-commerce platform. Future enhancements could include:

- **Database Integration**: Replace JSON with MySQL/PostgreSQL
- **User Authentication**: Login/registration system
- **Shopping Cart**: Persistent cart with sessions
- **Payment Processing**: Integration with payment gateways
- **Order Management**: Admin order tracking
- **Product Images**: File upload system
- **Search & Filtering**: Advanced product search
- **Reviews & Ratings**: Customer feedback system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is for demonstration purposes. Feel free to use and modify as needed.

---

**Built with ❤️ using PHP, HTML5, CSS3, and JavaScript**