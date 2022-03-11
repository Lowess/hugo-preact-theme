
import { h } from 'preact';
import { render } from '@testing-library/preact';
import Name from './name';



describe('Name', () => {
  test("should display name", () => {
    const value = "Foo, bar!"
    const { container } = render(<Name name={value} />)

    expect(container.textContent).toMatch(value);
  })
});