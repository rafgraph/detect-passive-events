# Detect Passive Events

Detects if the browser supports passive event listeners, also avaiable as part of [`detect-it`][detectitrepo].

[Live detection test][livedetectiontest]

> Note that the code used in the detection is adapted from this [Passive Events Explainer][passiveexplainer].

### Using `detect-passive-events`

```
npm install --save detect-passive-events
```

```js
// supportsPassiveEvents is a boolean
import { supportsPassiveEvents } from 'detect-passive-events';

if (supportsPassiveEvents) {
  // passive events are supported by the browser
  document.addEventListener('scroll', handleScroll, { capture: false, passive: true });
} else {
  // passive events are not supported by the browser
  document.addEventListener('scroll', handleScroll, false);
}
```

### Or use the script directly in the browser

Optionally, instead using `npm install` you can the load the script directly in the browser. A minified UMD version is available for this purpose.

```html
<script src="https://unpkg.com/detect-passive-events/dist/detect-passive-events.umd.min.js"></script>
```

```js
// it will be available on the window as detectPassiveEvents
if (window.detectPassiveEvents.supportsPassiveEvents) {
  document.addEventListener('scroll', handleScroll, { capture: false, passive: true });
} else {
  document.addEventListener('scroll', handleScroll, false);
}
```

<!-- links -->

[livedetectiontest]: https://detect-it.rafgraph.dev
[passiveexplainer]: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
[detectitrepo]: https://github.com/rafgraph/detect-it
