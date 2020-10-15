// mock needs be defined before import so the imported file uses the mock when it's executed
Object.defineProperty(window, 'addEventListener', {
  value: jest.fn().mockImplementation((eventName, callback, options) => {
    const passiveOption = options.passive;
  }),
});

import { supportsPassiveEvents } from '../index';

test('browser supports passive events', () => {
  expect(supportsPassiveEvents).toBe(true);
});
