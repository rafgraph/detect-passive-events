// mock needs be defined before import so the imported file uses the mock when it's executed
Object.defineProperty(window, 'addEventListener', {
  value: undefined,
});

import { supportsPassiveEvents } from '../index';

test("browser doesn't support addEventListener", () => {
  expect(supportsPassiveEvents).toBe(false);
});
