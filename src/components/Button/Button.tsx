import type { ButtonProps } from './Button.types';

import './Button.scss';

const Button = ({
  children,
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) => (
  <button
    data-testid="button"
    className={['button', `button--${variant}`, className]
      .filter(Boolean)
      .join(' ')}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
