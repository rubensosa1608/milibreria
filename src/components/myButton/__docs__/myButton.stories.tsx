// components/mybutton/MyButton.stories.tsx


import React from 'react';
import MyButton from './MyButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MyButton> = {
  title: 'MyButton',
  component: MyButton,
};

export default meta;

type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    txtColor: 'white',
    bgColor: 'blue',
    borderColor: 'blue',
    borderWidth: 2,
    size: 'medium',
    hoverTxtColor: 'black',
    hoverBgColor: 'lightblue',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    txtColor: 'white',
    bgColor: 'grey',
    borderColor: 'grey',
    borderWidth: 2,
    size: 'medium',
    hoverTxtColor: 'darkgrey',
    hoverBgColor: 'lightgrey',
    disabled: true,
  },
};
