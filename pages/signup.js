import Link from 'next/link';
import React, { useState } from 'react';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		console.log(email, password);
	};

	return (
		<div className="signup justify-content-center align-items-center d-flex py-5">
			<div className="register p-5">
				<form className="register-form" onSubmit={handleSubmit}>
					<h2 className="font-weight-bold text-center mb-5">Sign Up</h2>
					<input
						className="form-control p-3 my-3 "
						type="name"
						placeholder="Enter your Full Name"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
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

					<div className="col-md-12 text-center">
						<button className="btn btn-secondary px-5 mx-auto" type="submit">
							Sign Up
						</button>
					</div>
					<div className="col-md-12 text-center my-2">
						<p style={{ fontSize: 'smaller' }}>Already have an account?</p>
						<Link href="/signin" passHref>
							<button className="btn btn-primary px-5 ">Go to login</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
