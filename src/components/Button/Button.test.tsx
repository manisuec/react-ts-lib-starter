import { fireEvent, render } from '@testing-library/react';

import Button from './Button';
import type { ButtonProps } from './Button.types';

describe('Button', () => {
  const renderComponent = (props: Partial<ButtonProps> = {}) =>
    render(<Button {...props}>{props.children || 'Click me'}</Button>);

  it('should render children correctly', () => {
    const { getByTestId } = renderComponent({ children: 'Submit' });

    expect(getByTestId('button')).toHaveTextContent('Submit');
  });

  it('should apply the variant class', () => {
    const { getByTestId } = renderComponent({ variant: 'secondary' });

    expect(getByTestId('button')).toHaveClass('button--secondary');
  });

  it('should call onClick when clicked', () => {
    const onClick = vi.fn();

    const { getByTestId } = renderComponent({ onClick });

    fireEvent.click(getByTestId('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    const onClick = vi.fn();

    const { getByTestId } = renderComponent({ onClick, disabled: true });

    fireEvent.click(getByTestId('button'));

    expect(onClick).not.toHaveBeenCalled();
  });
});
