import type { CardProps } from './Card.types';

import './Card.scss';

const Card = ({ title, children, footer }: CardProps) => (
  <div data-testid="card" className="card">
    <h2 data-testid="card__title" className="card__title">
      {title}
    </h2>
    <div data-testid="card__body" className="card__body">
      {children}
    </div>
    {footer && (
      <div data-testid="card__footer" className="card__footer">
        {footer}
      </div>
    )}
  </div>
);

export default Card;
