import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Card title',
    children: 'This is the body of the card.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with footer',
    children: 'This card has a footer section below the body.',
    footer: <small>Last updated just now</small>,
  },
};
