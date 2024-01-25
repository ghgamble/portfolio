<?php 

require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');

function after_pagination() {
    echo 'text';
}

add_action('_themename_after_pagination','after_pagination');