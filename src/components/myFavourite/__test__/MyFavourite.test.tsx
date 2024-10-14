import { render } from '@testing-library/react';
import MyFavourite from '../MyFavourite';
import { describe, it, expect } from 'vitest';

describe('MyFavourite component', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<MyFavourite color="primary" />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
