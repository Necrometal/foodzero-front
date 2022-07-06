import axios from 'axios';

export function useHttp(){
    return axios.create({
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json'
		}
	});
}