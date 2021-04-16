import React from 'react';
import Button from '../src/index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const Primary = () => <Button primary>Primary</Button>;

export const Secondary = () => <Button>Secondary</Button>;
