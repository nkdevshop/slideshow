# SlideShow Library
A simple & slick slideshow plugin written in native javascript. It supports sliding through the images using the left and right
arrows on the images.

## Direct Access

[See the slideshow.js file](https://github.com/nawazkhan/how-to-js/tree/master/slideshowplugin)

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

## Additional Fun Topics Covered

* [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
* [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)
* render blocking script tags

The CSS link has been added to the head tag to avoid FOUC (Flash of unstyled content). 
The script tag is added at the bottom of the body to avoid render blocking. In the latest versions of javascript like ES6 you could use things like async or differ accordingly to work around this!


# SlideShow 1.0
https://github.com/nawazkhan/how-to-js/tree/master/slideshow
