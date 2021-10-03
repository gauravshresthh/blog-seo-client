import Link from 'next/link';
import React, { useState } from 'react';
import { signin, signup } from '../actions/auth/authService';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		console.log(email, password);
		const { data } = await signin({ email, password });
	};

	return (
		<div className="signin justify-content-center align-items-center d-flex py-5">
			<div className="login p-5">
				<form className="login-form" onSubmit={handleSubmit}>
					<h2 className="font-weight-bold text-center mb-5">Sign In</h2>

					<input
						className="form-control p-3 my-3 "
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>

					<input
						className="form-control p-3 my-3"
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<Link href="/forgot" passHref>
						<span className="text-primary">
							<small>Forgot Password?</small>
						</span>
					</Link>

					<div className="col-md-12 text-center">
						<button className="btn btn-secondary px-5 mx-auto" type="submit">
							Sign In
						</button>
					</div>
					<div className="col-md-12 text-center my-2">
						<p style={{ fontSize: 'smaller' }}>Dont have an account?</p>
						<Link href="/signup" passHref>
							<button className="btn btn-primary px-5 ">Sign Up</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
