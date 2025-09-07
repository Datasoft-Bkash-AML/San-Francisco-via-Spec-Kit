<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - San Francisco Demo</title>
    <link rel="stylesheet" href="/assets/css/admin.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="admin-container">
        <header class="admin-header">
            <h1>San Francisco Demo - Admin Panel</h1>
            <a href="/" class="back-to-site">← Back to Site</a>
        </header>

        <nav class="admin-nav">
            <ul>
                <li><a href="#dashboard" class="active">Dashboard</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#settings">Settings</a></li>
            </ul>
        </nav>

        <main class="admin-content">
            <section id="dashboard" class="admin-section active">
                <h2>Dashboard</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <h3>Products</h3>
                        <div class="stat-number">4</div>
                        <p>Total products in catalog</p>
                    </div>
                    <div class="stat-card">
                        <h3>Categories</h3>
                        <div class="stat-number">5</div>
                        <p>Product categories</p>
                    </div>
                    <div class="stat-card">
                        <h3>Orders</h3>
                        <div class="stat-number">0</div>
                        <p>Pending orders</p>
                    </div>
                    <div class="stat-card">
                        <h3>Revenue</h3>
                        <div class="stat-number">$0</div>
                        <p>This month</p>
                    </div>
                </div>
            </section>

            <section id="products" class="admin-section">
                <h2>Products Management</h2>
                <div class="section-header">
                    <button class="btn btn-primary">Add New Product</button>
                </div>
                <div class="data-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Wireless Bluetooth Headphones</td>
                                <td>AudioTech</td>
                                <td>$199.99</td>
                                <td>15</td>
                                <td>
                                    <button class="btn btn-sm btn-edit">Edit</button>
                                    <button class="btn btn-sm btn-delete">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Smart Fitness Watch</td>
                                <td>FitTech</td>
                                <td>$299.99</td>
                                <td>20</td>
                                <td>
                                    <button class="btn btn-sm btn-edit">Edit</button>
                                    <button class="btn btn-sm btn-delete">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Portable Bluetooth Speaker</td>
                                <td>SoundMax</td>
                                <td>$79.99</td>
                                <td>25</td>
                                <td>
                                    <button class="btn btn-sm btn-edit">Edit</button>
                                    <button class="btn btn-sm btn-delete">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Digital Camera 4K</td>
                                <td>PhotoPro</td>
                                <td>$599.99</td>
                                <td>8</td>
                                <td>
                                    <button class="btn btn-sm btn-edit">Edit</button>
                                    <button class="btn btn-sm btn-delete">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="categories" class="admin-section">
                <h2>Categories Management</h2>
                <div class="section-header">
                    <button class="btn btn-primary">Add New Category</button>
                </div>
                <div class="data-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Icon</th>
                                <th>Products</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Accessories</td>
                                <td><i class="fas fa-headphones"></i></td>
                                <td>25</td>
                                <td>
                                    <button class="btn btn-sm btn-edit">Edit</button>
                                    <button class="btn btn-sm btn-delete">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Cameras</td>
                                <td><i class="fas fa-camera"></i></td>
                                <td>18</td>
                                <td>
                                    <button class="btn btn-sm btn-edit">Edit</button>
                                    <button class="btn btn-sm btn-delete">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Headphones</td>
                                <td><i class="fas fa-headphones"></i></td>
                                <td>32</td>
                                <td>
                                    <button class="btn btn-sm btn-edit">Edit</button>
                                    <button class="btn btn-sm btn-delete">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Speakers</td>
                                <td><i class="fas fa-volume-up"></i></td>
                                <td>15</td>
                                <td>
                                    <button class="btn btn-sm btn-edit">Edit</button>
                                    <button class="btn btn-sm btn-delete">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Wearables</td>
                                <td><i class="fas fa-watch"></i></td>
                                <td>22</td>
                                <td>
                                    <button class="btn btn-sm btn-edit">Edit</button>
                                    <button class="btn btn-sm btn-delete">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="settings" class="admin-section">
                <h2>Site Settings</h2>
                <form class="settings-form">
                    <div class="form-group">
                        <label for="site_name">Site Name</label>
                        <input type="text" id="site_name" value="San Francisco Demo">
                    </div>
                    <div class="form-group">
                        <label for="tagline">Tagline</label>
                        <input type="text" id="tagline" value="Premium Electronics & Gadgets">
                    </div>
                    <div class="form-group">
                        <label for="top_banner">Top Banner Text</label>
                        <input type="text" id="top_banner" value="FREE WORLDWIDE SHIPPING OVER $100">
                    </div>
                    <div class="form-group">
                        <label for="promo_ribbon">Promo Ribbon Text</label>
                        <input type="text" id="promo_ribbon" value="LAST CALL: LOWEST PRICE GUARANTEE 50% OFF. EXPLORE">
                    </div>
                    <div class="form-group">
                        <label for="contact_email">Contact Email</label>
                        <input type="email" id="contact_email" value="hello@sanfrancisco.demo">
                    </div>
                    <button type="submit" class="btn btn-primary">Save Settings</button>
                </form>
            </section>
        </main>
    </div>

    <script src="/assets/js/admin.js"></script>
</body>
</html>