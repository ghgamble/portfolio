<?php 

/*
Plugin Name: _themename _pluginname
Plugin URI: 
Description: Adding custom post types from _themename
Version: 1.0.0
Author: Grace Gamble
AuthorURI: https://github.com/ghgamble,
Text Domain: _themename-_pluginname
Domain Path: /languages
*/

if(!defined('WPINC')) {
    die;
}

include_once('includes/portfolio-post-type.php');
include_once('includes/project-type-tax.php');
include_once('includes/skills-tax.php');
