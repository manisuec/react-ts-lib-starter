import type { TestComponentProps } from './TestComponent.types';

import './TestComponent.scss';

const TestComponent = ({ heading, content }: TestComponentProps) => (
  <div data-testid="test-component" className="test-component">
    <h1 data-testid="test-component__heading" className="heading">
      {heading}
    </h1>
    <div data-testid="test-component__content">{content}</div>
  </div>
);

export default TestComponent;
