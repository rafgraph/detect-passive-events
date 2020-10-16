/**
 * @jest-environment node
 */
// the above makes it so window is not defined, needs to be a top of file

import { supportsPassiveEvents } from '../index';

test('no window', () => {
  expect(supportsPassiveEvents).toBe(false);
});
