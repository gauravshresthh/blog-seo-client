import api from '../../config/api';

export const signup = user => {
	return api
		.post('/auth/signup', user)
		.then(res => console.log(res))
		.catch(err => console.log(err));
};

export const signin = user => {
	return api
		.post('/auth/signin', user)
		.then(res => console.log(res))
		.catch(err => console.log(err));
};
