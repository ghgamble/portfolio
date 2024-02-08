import $ from 'jquery';
import './components/slider.js';
import './components/navigation.js';
import './components/mobile.js';

$(document).ready(() => {
    $('.most_recent_widget').slick();
    if(wp.customize && wp.customize.selectiveRefresh) {
        wp.customize.selectiveRefresh.bind('partial-content-rendered', (placement) => {
            if(placement.partial.widgetIdParts && placement.partial.widgetIdParts.idBase === '_themename_most_recent_widget') {
                placement.container.find('.most_recent_widget').slick();
            }
        });
    }
})


// let x = 0;

// console.log(x);

// $('body').on( 'click', function() {
//     alert(true);
// } );

// $('body').click(() => {
//     alert(true);
// })
