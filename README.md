# how-to-js
This repo will cover some of the common javascript, html5 and css3 use cases. Currently it has slideshow v1.0 and slideshow v2.0. More to come!

# SlideShowPlugin / Widget 2.0
A simple & slick slideshow plugin written in native javascript. It supports sliding through the images using the left and right
arrows on the images.

## Direct Download

Get the slideshow.js file from the folder. That is all you need!

## Usage

Create div with id where you want to put the image slideshow. You can create multiple div if you wish to load multiple slideshows in the page. All slideshows created will function independent of each other!

```html
<!DOCTYPE html>
<html lang="en">
<head>

  ...
  
  <link rel="stylesheet" href="PATH/TO/slideshow.css">
  
  ...
  
</head>
<body>

...

<div id="#el"></div>
<div id="#el2"></div>

...

<script src="PATH/TO/slideshow.js"></script>
<script>
  // implementation here...
var slideshow1 = new Slideshow('#el', ['img1.jpg', 'img2.jpg', 'img3.jpg']);
slideshow1.render();
var slideshow2 = new Slideshow('#el2', ['img1.jpg', 'img2.jpg', 'img3.jpg']);
slideshow2.render();
</script>
</body>
</html>
```

## Make An Instance Of The SlideShow Widget

To make a slideshow instance, pass the element & an array of image paths and set it up like this:

```javascript

// slideshow instance
var slideshow1 = new Slideshow('#el', ['img1.jpg', 'img2.jpg', 'img3.jpg']);
slideshow1.render();
var slideshow2 = new Slideshow('#el2', ['img1.jpg', 'img2.jpg', 'img3.jpg']);
slideshow2.render();
```

## Additional Fun Facts

The CSS link has been added to the head tag to avoid FOUC (Flash of unstyled content). The script tag for slideshow.js is added at the bottom of the body because script tags are render blocking.


# SlideShow 1.0
https://github.com/nawazkhan/how-to-js/tree/master/slideshow