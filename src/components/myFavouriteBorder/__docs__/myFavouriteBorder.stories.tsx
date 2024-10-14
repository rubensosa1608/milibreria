// src/components/myfavourite/MyFavouriteBorder.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import MyFavouriteBorder, { MyFavouriteBorderProps } from './MyFavouriteBorder';

export default {
  title: 'Components/MyFavouriteBorder',
  component: MyFavouriteBorder,
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

const Template: Story<MyFavouriteBorderProps> = (args) => <MyFavouriteBorder {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'secondary',
  disabled: true,
};
