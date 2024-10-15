// src/components/myfavourite/MyFavourite.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import MyFavourite from '../myFavourite';

const meta: Meta<typeof MyFavourite> = {
  title: 'Components/MyFavourite',
  component: MyFavourite,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'default',
          'inherit',
          'primary',
          'secondary',
          'error',
          'info',
          'success',
          'warning',
        ],
      },
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof MyFavourite>;

export const Primary: Story = {
  args: {
    color: 'primary',
    disabled: false,
    onClick: () => alert('Favorite clicked!'),
  },
};

export const Disabled: Story = {
  args: {
    color: 'secondary',
    disabled: true,
    onClick: () => alert('Favorite clicked!'),
  },
};
