const fetchApi = require('./exercise6');
const API_URL = 'https://dog.ceo/api/breeds/image/random';

describe('Exercise6', () => {
  const mockFetchApi = jest.spyOn(fetchApi, 'fetchDog');
  afterEach(mockFetchApi.mockReset);
  fetchApi.fetchDog(API_URL);

  test('testing mockFetchApi', async () => {
    expect(mockFetchApi).toHaveBeenCalled();
    expect(mockFetchApi).toHaveBeenCalledTimes(1);
    expect(mockFetchApi).toHaveBeenCalledWith(API_URL);
  });
  test('Request Sucess', async () => {
    mockFetchApi.mockResolvedValue(_ => 'request sucess');
    expect(mockFetchApi()).resolves.toEqual('request sucess');
    expect(mockFetchApi).toHaveBeenCalled();
    expect(mockFetchApi).toHaveBeenCalledTimes(1);
  });
  test('Request failed', () => {
    mockFetchApi.mockRejectedValue(_ => 'request failed');
    expect(mockFetchApi()).rejects.toEqual('request failed');
    expect(mockFetchApi).toHaveBeenCalled();
    expect(mockFetchApi).toHaveBeenCalledTimes(1);
  });
});
