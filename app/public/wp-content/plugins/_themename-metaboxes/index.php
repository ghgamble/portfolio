<?php 

/*
Plugin Name: _themename _pluginname
Plugin URI: 
Description: Adding metaboxes from _themename
Version: 1.0.0
Author: Grace Gamble
AuthorURI: https://github.com/ghgamble,
Text Domain: _themename-_pluginname
Domain Path: /languages
*/

if(!defined('WPINC')) {
    die;
}

include_once('includes/metaboxes.php');
include_once('includes/enqueue-assets.php');