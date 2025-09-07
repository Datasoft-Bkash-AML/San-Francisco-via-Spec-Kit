<?php
// public/index.php - Main entry point for the San Francisco Demo

// Simple routing without framework for MVP
$request = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

header('Content-Type: text/html; charset=utf-8');

// Basic routing
if ($request === '/' || $request === '/index.php') {
    require_once __DIR__ . '/../src/Views/home.php';
} elseif (strpos($request, '/admin') === 0) {
    require_once __DIR__ . '/../src/Views/admin.php';
} else {
    http_response_code(404);
    echo '<h1>404 - Page Not Found</h1>';
}
?>