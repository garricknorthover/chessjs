import { possible_moves } from './index'

test('gives options for initialpawn move', () => {
  expect(possible_moves()).toEqual([[2, 2], [3, 2]])
})