# Gallery Slide Show

A simple library to create photo gallery with jQuery.

# How to use

Add JQuery:

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```
Add Galleryslide:

```html
<script src="js/galleryslide.js"></script>
```

HTML:

```html
<div class="gallery">
    <div class="main">
        <img id="current" src="img/1.jpg" alt="Main Image">
    </div>
    <div class="thumbnails">
        <img class="thumbnail active" src="img/1.jpg" data-large="img/1.jpg" alt="Thumbnail 1">
        <img class="thumbnail" src="img/2.jpg" data-large="img/2.jpg" alt="Thumbnail 2">
        <img class="thumbnail" src="img/3.jpg" data-large="img/3.jpg" alt="Thumbnail 3">
        <img class="thumbnail" src="img/4.jpg" data-large="img/4.jpg" alt="Thumbnail 4">
        <img class="thumbnail" src="img/5.jpg" data-large="img/5.jpg" alt="Thumbnail 5">
        <img class="thumbnail" src="img/6.jpg" data-large="img/6.jpg" alt="Thumbnail 6">
        <img class="thumbnail" src="img/7.jpg" data-large="img/7.jpg" alt="Thumbnail 7">
        <!-- Add more thumbnails as needed -->
    </div>
</div>
```

CSS:

```css
.gallery {
    max-width: 800px;
    margin: 0 auto;
}

.main {
    width: 100%;
    border: 2px solid #ddd;
    margin-bottom: 10px;
    position: relative;
}

.main img {
    width: 100%;
    display: block;
}

.thumbnails {
    display: flex;
    gap: 10px;
}

.thumbnail {
    width: 100px;
    height: 70px;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border 0.3s;
}

.thumbnail:hover,
.thumbnail.active {
    border: 2px solid #007BFF;
}
```

jQuery:

```javascript
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
```

# Screenshots

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./screenshots/screenshots.png">
  <source media="(prefers-color-scheme: light)" srcset="./screenshots/screenshots.png">
  <img alt="Gallery Slide Show" src="./screenshots/screenshots.png">
</picture>
