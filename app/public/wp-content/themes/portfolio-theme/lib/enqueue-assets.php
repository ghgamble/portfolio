<?php 

function portfolio_assets() {
    wp_enqueue_style('portfolio-stylesheet', get_template_directory_uri() . '/dist/assets/css/bundle.css', array(), '1.0.0', 'all');
}

add_action('wp_enqueue_scripts', 'portfolio_assets');

function portfolio_admin_assets() {
    wp_enqueue_style('portfolio-admin-stylesheet', get_template_directory_uri() . '/dist/assets/css/admin.css', array(), '1.0.0', 'all');
}

add_action('admin_enqueue_scripts', 'portfolio_admin_assets');