// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
const detectPassiveEvents = {
  update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      let passive = false;
      const options = Object.defineProperty({}, 'passive', {
        get() { passive = true; },
      });
      window.addEventListener('test', null, options);

      detectPassiveEvents.hasSupport = passive;
    }
  },
};

detectPassiveEvents.update();
export default detectPassiveEvents;
