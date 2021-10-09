import { message } from '../src/constants'

test("message contains 'Hello'", () => {
  expect(message).toContain('Hello')
})
