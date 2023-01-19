import { BASE_URL } from '~utils';

export interface DataResponse {
  data: number;
}

export const getData = async (): Promise<DataResponse> => {
  const response = await fetch(`${BASE_URL}/data`);
  return await response.json();
};
