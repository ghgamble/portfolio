<?php 

require_once('lib/customize.php');
require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');
require_once('lib/sidebars.php');
require_once('lib/theme-support.php');
require_once('lib/navigation.php');
require_once('lib/comment-callback.php');
require_once('lib/portfolio.php');
require_once('lib/delete-post.php');
require_once('lib/most-recent-widget.php');

add_action('wp_head', function() { echo '<script type="text/javascript"> if (typeof(wp) == "undefined") { window.wp = { i18n: { setLocaleData: (function() { return false; })} }; } </script>'; });

