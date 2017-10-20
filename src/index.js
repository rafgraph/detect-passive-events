// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
export const testPassiveEventSupport = () => {
  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
    return;
  }

  let passive = false;

  const options = Object.defineProperty({}, 'passive', {
    get() { passive = true; },
  });

  // note: have to set and remove a no-op listener instead of null
  // (which was used previously), becasue Edge v15 throws an error
  // when providing a null callback.
  // https://github.com/rafrex/detect-passive-events/pull/3
  const noop = () => {};

  window.addEventListener('testPassiveEventSupport', noop, options);
  window.removeEventListener('testPassiveEventSupport', noop, options);

  return passive
}

const detectPassiveEvents = {
  update() {
    detectPassiveEvents.hasSupport = testPassiveEventSupport();
  },
};

detectPassiveEvents.update();
export default detectPassiveEvents;
