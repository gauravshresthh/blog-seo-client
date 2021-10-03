import api from '../../config/api';

export const signup = user => {
	return api
		.post('/auth/signup', {
			name: user.name,
			email: user.email,
			password: user.password,
		})
		.then(res => res)
		.catch(err => console.log(err.message));
};

export const signin = user => {
	return api
		.post('/auth/login', { email: user.email, password: user.password })
		.then(res => res)
		.catch(err => console.log(err.message));
};
