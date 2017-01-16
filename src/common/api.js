
import axios from 'axios';

const API = 'http://localhost:7000/api';

export const get = (path) => new Promise((resolve, reject) => {
	axios.get(`${API}/${path}`)
		.then(response => resolve(response.data))
		.catch(err => reject(err));
})

export const post = (path, data) => new Promise((resolve, reject) => {
	axios.post(`${API}/${path}`, data)
		.then(response => resolve(response.data))
		.catch(err => reject(err));
})

export const put = (path, data) => new Promise((resolve, reject) => {
	axios.put(`${API}/${path}`, data)
		.then(response => resolve(response.data))
		.catch(err => reject(err));
})
