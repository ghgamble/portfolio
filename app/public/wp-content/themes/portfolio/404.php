<?php get_header(); ?>
<?php 
$base = dirname(__FILE__);
// echo $base;
$imgURL = dirname(dirname($base))."/dist/images/barbie.jpg";
?>
<div class="o-container u-margin-bottom-40">
    <div class="o-row">
        <div class="o-row__column o-row__column--span-12 o-row__column--span-12">
            <main role="main">
                <img src="<?php echo get_template_directory_uri(); ?>/dist/assets/images/404.png" alt="" />
                <h1>Ruh roh</h1>
                <h3><?php esc_html_e('We looked all over, but that page seems to have gotten away from us. Try using the search form below to get back on track.', '_themename'); ?></h3>
                <?php get_search_form(); ?>
            </main>
        </div>   
    </div>
</div>
<?php get_footer(); ?>