// mock needs be defined before import so the imported file uses the mock when it's executed
Object.defineProperty(window, 'addEventListener', {
  value: jest.fn().mockImplementation((eventName, callback, useCapture) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const capture = Boolean(useCapture);
  }),
});

import { supportsPassiveEvents } from '../index';

test("browser doesn't support passive events", () => {
  expect(supportsPassiveEvents).toBe(false);
});
