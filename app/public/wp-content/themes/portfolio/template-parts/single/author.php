<div class="c-post-author u-margin-bottom-20">
    <h2 class="u-screen-reader-text"><?php esc_attr_e('About the Author', '_themename'); ?></h2>
    <?php 
        $author_id = get_the_author_meta('ID');
        $author_posts = get_the_author_posts();
        $author_display = get_the_author();
        $author_posts_url = get_author_posts_url($author_id);
        $author_description = get_the_author_meta('user_description');
        $author_website = get_the_author_meta('user_url');
    ?>
    <div class="c-post-author__avatar">
        <?php echo get_avatar($author_id, 265); ?>
    </div>
    <div class="c-post-author__content">
        <div class="c-post-author__title">
            <?php if($author_website) { ?>
            <a href="<?php echo esc_url($author_website) ?>" target="_blank">
            <?php } ?>
                <?php echo esc_html($author_display); ?>
            <?php if($author_website) { ?>
            </a>
            <?php } ?>
        </div>
        <div class="c-post-author_info">
            <a href="<?php echo esc_url($author_posts_url); ?>">
                <?php 
                printf(esc_html(_n('%s post', '%s posts', $author_posts, '_themename')), number_format_i18n($author_posts));
                ?>
            </a>
        </div>
        <div class="c-post-author_desc">
            <?php echo esc_html($author_description); ?>
        </div>
    </div>
</div>