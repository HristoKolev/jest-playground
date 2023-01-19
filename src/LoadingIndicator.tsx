import { memo } from 'react';

export interface LoadingIndicatorProps {
  message?: string;
}

const defaultMessage = 'Loading...';

export const LoadingIndicator = memo(
  ({ message }: LoadingIndicatorProps): JSX.Element => (
    <div className="loading-indicator" data-testid="loading-indicator">
      {message || defaultMessage}
    </div>
  )
);
