<?php 

/*
Plugin Name: _themename _pluginname
Plugin URI: 
Description: Adding shortcodes from _themename
Version: 1.0.0
Author: Grace Gamble
AuthorURI: https://github.com/ghgamble,
Text Domain: _themename-_pluginname
Domain Path: /languages
*/

if(!defined('WPINC')) {
    die;
}

function _themename__pluginname_clean_p_tags($content) {
    return preg_replace('#<p>(\s|$nbsp;)*+(<br\s*/*>)*(/s|&nbsp;)*</p>#i', '', $content);
}
add_filter('the_content', '_themename__pluginname_clean_p_tags', 20, 1);

function _themename__pluginname_init() {
    include_once('includes/shortcodes/button/button.php');
    include_once('includes/shortcodes/slider/slider.php');
}

add_action('init', '_themename__pluginname_init');
include_once('includes/enqueue-assets.php');