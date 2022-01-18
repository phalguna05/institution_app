import Axios from 'axios';

const BASE_URL_ = process.env.REACT_APP_API_URL;

const AxiosInstance = Axios.create({
	baseURL: BASE_URL_,
});

AxiosInstance.interceptors.request.use((req) => {
	req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return req;
});

AxiosInstance.interceptors.response.use(
	(res) => res,

	(err) => err
);

export default AxiosInstance;
