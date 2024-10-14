// components/mybutton/MyButton.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import MyButton from '../MyButton';


describe('MyButton component', () => {
  it('should render correctly', () => {
    render(<MyButton text="Click Me" txtColor="white" bgColor="blue" borderColor="blue" borderWidth={2} size="medium" hoverTxtColor="black" hoverBgColor="lightblue" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });
});
