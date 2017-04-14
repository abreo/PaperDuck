# PaperDuck

Manipulates images in the browser via native canvas functions.

Try out the [demo](https://seregpie.github.io/PaperDuck/)!

## dependencies

*no dependencies*

## functions

`PaperDuck(image)`

Creates a new instance of PaperDuck.

| argument | description |
| ---: | :--- |
| `image` | An element to draw into the context. The value can be any canvas image source, such as an HTMLImageElement, an HTMLVideoElement, an HTMLCanvasElement or an ImageBitmap. |

---

`.load(url, callback)`

```javascript
PaperDuck.load('/img/tree.jpg', instance => {
  let canvas = instance.resize(200, '').toCanvas();
  document.getElementById('trees').appendChild(canvas);
});
```

---

`.blank(w = 0, h = 0)`

Creates a PaperDuck instance with a blank transparent image of the given size.

| argument | description |
| ---: | :--- |
| `w` | The width of the image. |
| `h` | The height of the image. |

Returns a new instance of PaperDuck.

---

`.fn.getWidth()`

Returns the width of the image.

```javascript
let instance = PaperDuck.blank(256, 128);
console.log(instance.getWidth()); // => 256
```

---

`.fn.getHeight()`

Returns the height of the image.

```javascript
let instance = PaperDuck.blank(256, 128);
console.log(instance.getHeight()); // => 128
```

---

`.fn.resize(w = 'auto', h = 'auto', smoothing = 1/2)`

Resizes the image to the given size.

| argument | description |
| ---: | :--- |
| `w` | The width of the resized image. If the value is not a number, the width scales proportionally to the height. |
| `h` | The height of the resized image. If the value is not a number, the height scales proportionally to the width. |
| `smoothing` | The smoothing factor. The value must be a float between 0 (inclusive) and 1 (exclusive). 0 means no smoothing. |

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(image).resize('', 512).toCanvas();
```

---

`.fn.crop(x = 0, y = 0, w = ∞, h = ∞)`

Positions and crops the image to the given size.

| argument | description |
| ---: | :--- |
| `x` | The left offset of the cropping. |
| `y` | The top offset of the cropping.  |
| `w` | The width of the cropped image. |
| `h` | The height of the cropped image. |

... image ...

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(image).crop(128, -512, '', 256).toCanvas();
```

---

`.fn.cropAlign(w = ∞, h = ∞, align = 'center')`

Aligns and crops the image to the given size.

| argument | description |
| ---: | :--- |
| `w` | The width of the cropped image. |
| `h` | The height of the cropped image. |
| `align` | The alignment of the cropping. Possible values are `'top left'`, `'top center'`, `'top right'`, `'center left'`, `'center'`, `'center right'`, `'bottom left'`, `'bottom center'` and `'bottom right'`. The order of words does not matter. |

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(image).cropAlign(256, 128, 'top center').toCanvas();
```

---

`.fn.scale(factor, smoothing = 1/2)`

Resizes the image proportionally by the given factor.

| argument | description |
| ---: | :--- |
| `factor` | The scale factor. If the value is greater than 1, the image is an enlargement. If the value is between 0 and 1, the image is a reduction. |
| `smoothing` | The smoothing factor. The value must be a float between 0 (inclusive) and 1 (exclusive). 0 means no smoothing. |

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(image).scale(4).toCanvas();
```

---

`.fn.flip()`

Flips the image vertically.

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(image).flip().toCanvas();
```

---

`.fn.flop()`

Flops the image horizontally.

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(image).flop().toCanvas();
```

---

`.fn.rotate90()`

Rotates the image by 90 degrees clockwise.

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(image).rotate90().toCanvas();
```

---

`.fn.rotate180()`

Rotates the image by 180 degrees.

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(image).rotate180().toCanvas();
```

---

`.fn.rotate270()`

Rotates the image by 270 degrees clockwise.

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(image).rotate270().toCanvas();
```

---

`.fn.toImage(...args)`

---

`.fn.toCanvas()`

---

`.fn.toContext()`

---

`.fn.toDataURL(...args)`

Returns a data URI containing a representation of the image.

See [`HTMLCanvasElement.toDataURL()`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/toDataURL).

| argument | description |
| ---: | :--- |
| `args` | Any number of arguments to be passed to the function `.toDataURL()` of the canvas element. |
