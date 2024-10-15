// src/components/myfavourite/MyFavouriteBorder.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import MyFavouriteBorder, { MyFavouriteBorderProps } from '../myFavouriteBorder';

export default {
  title: 'Components/MyFavouriteBorder',
  component: MyFavouriteBorder,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['default', 'inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'], // Opciones para el color
      },
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' }, // Acción para manejar clics
  },
} as Meta;

const Template: Story<MyFavouriteBorderProps> = (args) => <MyFavouriteBorder {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'secondary',
  disabled: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: 'info',
  disabled: false,
};
