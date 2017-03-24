# Lightense Images

[![Build Status](https://travis-ci.org/sparanoid/lightense-images.svg?branch=master)](https://travis-ci.org/sparanoid/lightense-images)
[![devDependency Status](https://david-dm.org/sparanoid/lightense-images/dev-status.svg?theme=shields.io)](https://david-dm.org/sparanoid/lightense-images?type=dev)

A dependency-free pure JavaScript image zooming library less than 2 KB (gzipped). Inspired by [tholman/intense-images](https://github.com/tholman/intense-images). You can play with the code [live on CodePen](http://codepen.io/sparanoid/pen/yOJyjV).

This library is mainly used by [Almace Scaffolding](https://github.com/sparanoid/almace-scaffolding).

-----

## [Getting Started](http://sparanoid.com/work/lightense-images/)

## Features

- High performance
- One script, no additional dependencies, no bloated styles
- Safari `backdrop-filter` support
- 2 KB gzipped

## Install

- `npm install lightense-images --save`
- Or download library and save it to your project
- Or host it on a CDN and reference it via `<script></script>` tag

The Lightense library is wrapped in Universal Module Syntax (UMD), this means that out of the box, you can include it into your web application via `<script></script>` tag, `import`, or `require('lightense-images')`.

## Setup

```html
<img src="photo.jpg">
<script src="lightense.js"></script>
<script>
  window.addEventListener('load', function () {
    var el = document.querySelectorAll('img');
    Lightense(el);
  }, false);
</script>
```

### Custom Background Color

```html
<img src="screenshot.png" data-background="rgba(0, 0, 0, .96)">
```

### Disable Lightense for Specific Elements

```html
<img src="photo.jpg" class="no-lightense">
<script>
  window.addEventListener('load', function () {
    var el = document.querySelectorAll('img:not(.no-lightense)');
    Lightense(el);
  }, false);
</script>
```

## Browser Support

All modern browsers, it "should work" in Internet Explorer 10 and up as well.

## Donate

Wanna buy me a cup of coffee? [Great](http://sparanoid.com/donate/).

## Author

**Tunghsiao Liu**

- Twitter: @[tunghsiao](http://twitter.com/tunghsiao)
- GitHub: @[sparanoid](http://github.com/sparanoid)

## License

MIT
