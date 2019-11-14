// In the case using axios as http client.
import axios, { AxiosRequestConfig } from 'axios';
const client = axios.create();

export default {
  get: async (url: string, option: AxiosRequestConfig | undefined = undefined) => {
    return await client.get(url, option).then(result => result.data).catch(handleError);
  },
  put: async (url: string, option: AxiosRequestConfig | undefined = undefined) => {
    return await client.put(url, option).then(result => result.data).catch(handleError);
  },
  post: async (url: string, option: AxiosRequestConfig | undefined = undefined) => {
    return await client.post(url, option).then(result => result.data).catch(handleError);
  },
};

function handleError(err: Error) {
  const errorName = err.name;
  const errorMessage = err.message;
  alert(errorMessage);
  // For debug
  console.log('Http client got Error!! errorname', errorName);
  console.log('Http client got Error!! errormessage', errorMessage);
}
