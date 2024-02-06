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
function _themename__pluginname_init() {
    include_once('includes/shortcodes/button/button.php');
}

add_action('init', '_themename__pluginname_init');
include_once('includes/enqueue-assets.php');