import { memo } from 'react';

export interface ErrorIndicatorProps {
  message?: string;
}

const defaultMessage = 'Error...';

export const ErrorIndicator = memo(
  ({ message }: ErrorIndicatorProps): JSX.Element => (
    <div className="error-indicator" data-testid="error-indicator">
      {message || defaultMessage}
    </div>
  )
);
