// src/components/tuNombreInicialesApellidos/RubenSR.stories.tsx

import React from 'react';
import RubenSR from '../rubenSR';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RubenSR> = {
  title: 'RubenSR',
  component: RubenSR,
};

export default meta;

type Story = StoryObj<typeof RubenSR>;

export const Default: Story = {
  args: {
    testimonial: 'Este es un testimonio increíble. ¡Altamente recomendado!',
    author: 'John Doe',
    avatarUrl: 'https://via.placeholder.com/150',
    width: 150,
    height: 150,
  },
};

export const Alternate: Story = {
  args: {
    testimonial: 'Un producto fantástico. ¡Definitivamente lo compraré de nuevo!',
    author: 'Jane Smith',
    avatarUrl: 'https://via.placeholder.com/150',
    width: 150,
    height: 150,
  },
};
