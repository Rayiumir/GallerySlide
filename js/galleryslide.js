
/**!
 * GallerySlideshow v1.0.0
 *
 * Simple and Lightweight Slideshow Gallery
 *
 * @copyright Copyright 2024 Rayiumir Limited.
 * @author    Raymond Baghumian.
 * @link      https://github.com/Rayiumir/GallerySlideshow
 *
 */

$(document).ready(function() {
    // Handle thumbnail click
    $('.thumbnail').on('click', function() {
        // Remove 'active' class from all thumbnails
        $('.thumbnail').removeClass('active');
        
        // Add 'active' class to the clicked thumbnail
        $(this).addClass('active');
        
        // Get the large image URL from data attribute
        var largeImage = $(this).data('large');
        
        // Update the main image src
        $('#current').attr('src', largeImage);
    });
});
