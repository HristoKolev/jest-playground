import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { App } from '~App';
import { BASE_URL } from '~utils';

const server = setupServer(
  rest.get(`${BASE_URL}/data`, async (_req, res, ctx) => {
    return res(ctx.json({ data: 42 }));
  })
);

beforeAll(async () => {
  await server.listen();
});

beforeEach(async () => {
  await server.resetHandlers();
});

afterAll(async () => {
  await server.close();
});

test('renders the message', async () => {
  render(<App />);

  await screen.findByTestId('loading-indicator');

  const dataWrapper = await screen.findByTestId('data-wrapper');

  expect(dataWrapper).toHaveTextContent('{"data":42}');
});
