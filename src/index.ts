// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md

export let supportsPassiveEvents = false;

if (
  typeof window !== 'undefined' &&
  typeof window.addEventListener === 'function'
) {
  const options = {
    get passive() {
      return (supportsPassiveEvents = true);
    },
  };
  // have to set and remove a no-op listener instead of null
  // (which was used previously), because Edge v15 throws an error
  // when providing a null callback.
  // https://github.com/rafgraph/detect-passive-events/pull/3
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const noop = () => {};
  window.addEventListener('p', noop, options);
  window.removeEventListener('p', noop, false);
}
