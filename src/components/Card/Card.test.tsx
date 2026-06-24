import { render } from '@testing-library/react';

import Card from './Card';
import type { CardProps } from './Card.types';

describe('Card', () => {
  const renderComponent = ({ title, children, footer }: Partial<CardProps>) =>
    render(
      <Card title={title || 'Default title'} footer={footer}>
        {children || 'Default body'}
      </Card>
    );

  it('should render the title correctly', () => {
    const { getByTestId } = renderComponent({ title: 'My title' });

    expect(getByTestId('card__title')).toHaveTextContent('My title');
  });

  it('should render the body correctly', () => {
    const { getByTestId } = renderComponent({ children: 'Hello world' });

    expect(getByTestId('card__body')).toHaveTextContent('Hello world');
  });

  it('should render the footer when provided', () => {
    const { getByTestId } = renderComponent({ footer: 'Footer text' });

    expect(getByTestId('card__footer')).toHaveTextContent('Footer text');
  });

  it('should not render the footer when not provided', () => {
    const { queryByTestId } = renderComponent({});

    expect(queryByTestId('card__footer')).not.toBeInTheDocument();
  });
});
