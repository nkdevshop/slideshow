# SlideShow Plugin/Widget 2.0
A simple & slick slideshow plugin written in native javascript.

For version 1.0 refer - https://github.com/nawazkhan/how-to-js/tree/master/slideshow

##Usage
### Create a div with an id
The slideshow content will do here

```html
<div id="#el"></div>
<div id="#el2"></div>
```

### Make An Instance Of The SlideShow Widget

To make a slideshow instance, pass the element & an array of image paths and set it up like this:

```javascript

// slideshow instance
var slideshow1 = new Slideshow('#el', ['img1.jpg', 'img2.jpg', 'img3.jpg']);
slideshow1.render();
var slideshow2 = new Slideshow('#el2', ['img1.jpg', 'img2.jpg', 'img3.jpg']);
slideshow2.render();
```

###Additional Fun Facts
The CSS link has been added to the head tag to avoid FOUC (Flash of unstyled content).
The script tag for slideshow.js is added at the bottom of the body because script tags are render blocking. 