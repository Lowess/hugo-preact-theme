
import { h } from 'preact';
import { render } from '@testing-library/preact';
import Bunny from './Bunny';



describe('Bunny', () => {
  test("should render successfully", () => {
    const { container } = render(<Bunny />)

    expect(container).toBeTruthy();
  });
});