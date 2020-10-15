// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md

export let supportsPassiveEvents: boolean = false;

if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
  const options = Object.defineProperty({}, 'passive', {
    get() {
      supportsPassiveEvents = true;
    },
  });
  // note: have to set and remove a no-op listener instead of null
  // (which was used previously), because Edge v15 throws an error
  // when providing a null callback.
  // https://github.com/rafgraph/detect-passive-events/pull/3
  const noop = () => {};
  window.addEventListener('testPassive', noop, options);
  window.removeEventListener('testPassive', noop, options);
}
