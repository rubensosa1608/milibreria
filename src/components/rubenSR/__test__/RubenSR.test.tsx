// src/components/rubenSR/__test__/RubenSR.test.tsx

import { render, screen } from '@testing-library/react';
import RubenSR from '../RubenSR';

describe('RubenSR Component', () => {
  const props = {
    description: 'Soy un apasionado desarrollador de software con experiencia en tecnologías web.',
    position: 'Desarrollador Frontend',
    author: 'Ruben Sosa Ramos',
    avatarUrl: 'https://via.placeholder.com/150',
  };

  test('renders the component with the provided props', () => {
    render(<RubenSR {...props} />);

    // Verifica que se muestre el testimonio
    expect(screen.getByText(props.description)).toBeInTheDocument();

    // Verifica que se muestre el cargo y el autor
    expect(screen.getByText(/Desarrollador Frontend/i)).toBeInTheDocument();
    expect(screen.getByText(/Ruben Sosa Ramos/i)).toBeInTheDocument();
  });
});
