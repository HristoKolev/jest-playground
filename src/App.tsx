import { useEffect, useState } from 'react';

import { DataResponse, getData } from '~api';
import { LoadingIndicator } from '~LoadingIndicator';
import { ErrorIndicator } from '~ErrorIndicator';
import { reportError } from '~reportError';

export const App = (): JSX.Element => {
  const [data, setData] = useState<DataResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    void (async () => {
      try {
        setLoading(true);
        setData(undefined);
        setError(false);
        setData(await getData());
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    })().catch(reportError);
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {error && <ErrorIndicator />}
      {data && <pre data-testid="data-wrapper">{JSON.stringify(data)}</pre>}
    </div>
  );
};
