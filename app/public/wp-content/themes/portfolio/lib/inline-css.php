<?php 

$inline_styles_selectors = array(
    'a' => array(
        'color' => '_themename_accent_colour'
    ),
    ':focus' => array(
        'outline-color' => '_themename_accent_colour'
    ),
    '.c-post.sticky' => array(
        'border-left-color' => '_themename_accent_colour'
    ),
    'button, input[type=submit], .header-nav .menu > .menu-item:not(.mega) .sub-menu .menu-item:hover > a' => array(
        'background-color' => '_themename_accent_colour'
    ),
    '.header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > .sub-menu a:hover, .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > a:hover' => array(
        'color' => '_themename_accent_colour'
    ),
    '.c-header' => array(
        'background-color' => '_themename_header_colour'
    )
);

$inline_styles = "";
foreach($inline_styles_selectors as $selector => $props) {
    $inline_styles .= "{$selector} {";
        foreach($props as $prop => $value) {
            if($value === '_themename_accent_colour') {
                $inline_styles .= "{$prop}: " . get_theme_mod($value, '#20ddae') . ";";
            }
            if($value === '_themename_header_colour') {
                $inline_styles .= "{$prop}: " . get_theme_mod($value, '#222222') . ";";
            }
        }
    $inline_styles .= "} ";
}

