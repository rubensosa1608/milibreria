
import { render } from '@testing-library/react';
import MyFavouriteBorder from '../MyFavouriteBorder';
import { describe, it, expect } from 'vitest';

describe('MyFavouriteBorder', () => {
  it('should render in the DOM', () => {
    const { getByRole } = render(<MyFavouriteBorder color="primary" />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
