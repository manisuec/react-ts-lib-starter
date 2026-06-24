import type { Meta, StoryObj } from '@storybook/react-vite';

import TestComponent from './TestComponent';

const meta = {
  title: 'Components/TestComponent',
  component: TestComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof TestComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

const Content = () => (
  <span>The only way to do great work is to love what you do.</span>
);

export const WithText: Story = {
  args: {
    heading: 'I am a test component',
    content: <Content />,
  },
};

export const WithButtons: Story = {
  args: {
    heading: 'I have a button',
    content: (
      <div>
        <button onClick={() => alert('You clicked me!')}>Click me</button>
      </div>
    ),
  },
};
