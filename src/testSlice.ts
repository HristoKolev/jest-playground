import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';

const delay = (interval: number) =>
  new Promise((resolve) => setInterval(resolve, interval));

const testThunk = createAsyncThunk('test', async (_, { signal }) => {
  for (let i = 0; i < 3; i++) {
    console.log('signal', signal.aborted, i);
    await delay(50);
  }

  return 123;
});

export const runTest = async () => {
  const store = configureStore({
    reducer: (state) => state,
  });

  const result = store.dispatch(testThunk());
  // result.abort();

  console.log(await result.unwrap());
};
