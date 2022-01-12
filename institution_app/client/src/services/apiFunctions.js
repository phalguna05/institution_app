import AxiosInstance from './axiosInstance';

const apiGetCall = async (url) => {
  try {
    const response = await AxiosInstance.get(url);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const apiPostCall = async (url, payload) => {
  try {
    const response = await AxiosInstance.post(url, payload);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const apiDeleteCall = async (url) => {
  try {
    const response = await AxiosInstance.delete(url);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const apiPatchCall = async (url, payload) => {
  try {
    const response = await AxiosInstance.patch(url, payload);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export { apiGetCall, apiPostCall, apiDeleteCall, apiPatchCall };
