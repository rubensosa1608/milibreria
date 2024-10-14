// src/components/myfavourite/MyFavourite.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import MyFavourite, { MyFavouriteProps } from './MyFavourite';

export default {
  title: 'Components/MyFavourite',
  component: MyFavourite,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['default', 'inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      },
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<MyFavouriteProps> = (args) => <MyFavourite {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'secondary',
  disabled: true,
};
