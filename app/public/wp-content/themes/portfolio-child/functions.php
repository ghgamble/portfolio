<?php

function portfolio_child_scripts() {
    // get_template_directory_uri() will always point to parent theme, in child theme need to be more specific
    wp_enqueue_style('portfolio-child-styles', get_stylesheet_directory_uri() . '/bundle.css', array('_themename-stylesheet'), '1.0.0', 'all');
}
add_action('wp_enqueue_scripts', 'portfolio_child_scripts');

// function after_pagination($x) {
//     echo $x;
//     echo 'test';
// }
// add_action('_themename_after_pagination', 'after_pagination');

// function function_to_add($query) {
//     if($query->is_main_query()) {
//         $query->set('posts_per_page', 2);
//     }
// }
// add_action('pre_get_posts','function_to_add', 10, 1);